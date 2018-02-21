// import config from '@/config/environment'
import Redis from '../redis'
import jwt from 'jsonwebtoken'

/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403
 */

function serverTokenAuthenticated (req) {
  let token
  // allow access_token to be passed through query parameter as well
  if (req.headers.authorization) {
    token = req.headers.authorization.split(' ')[1]
  } else if (req.query && req.query.hasOwnProperty('token')) {
    token = req.query.token
  } else if (req.body && req.body.token) {
    token = req.body.token
  } else if (req.query && req.query.hasOwnProperty('access_token')) {
    token = req.query.token
  }
  return token
}

let auth

class Auth {
  set config ({ port, host, credential, apiKey }) {
    this.secret = credential
    this.redis = new Redis(port, host)
    this.apiKey = apiKey
  }

  static get instance () {
    if (!auth) {
      auth = new Auth()
    }
    return auth
  }

  revoke (req, res, next) {
    if (!this.secret) {
      throw new Error('first must set cretendials, use fn setCredential')
    }
    let token = serverTokenAuthenticated(req)
    if (!token) {
      return res.sendStatus(401)
    }
    const decoded = jwt.decode(token)
    if (decoded) {
      this.redis.del(decoded.user.email)
    }
    next()
  }

  validate (req, res, next) {
    if (!this.secret) {
      throw new Error('first must set cretendials, use fn config')
    }
    if (!this.apiKey) {
      throw new Error('first must set cretendials, use fn config')
    }
    if (req.headers['x-api-key']) {
      if (req.headers['x-api-key'] === this.apiKey) {
        return next()
      }
      return res.sendStatus(401)
    }
    let token = serverTokenAuthenticated(req)
    if (!token) {
      return res.sendStatus(401)
    }
    jwt.verify(token, this.secret, (error, decoded) => {
      if (error) {
        return res.status(500).json({error, message: 'invalid token'})
      }
      this.redis.get(decoded.user.email).then(value => {
        if (token !== value) return res.sendStatus(401)
        req.user = decoded.user
        next()
      }).catch(reason => {
        res.sendStatus(500).json(reason)
      })
    })
  }

  token (user, rembemberMe) {
    let expireTime = (60 * 60)
    if (rembemberMe) {
      expireTime = expireTime * 60
    }
    let token = jwt.sign({ user }, this.secret, {
      expiresIn: expireTime
    })
    this.redis.set(user.email.toLowerCase(), token, expireTime)
    return token
  }

  remove (email) {
    return this.redis.del()
  }
}

export default auth = Auth.instance
