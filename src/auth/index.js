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

let secret
let redis
let apiKey

class Auth {
  set config ({ port, host, credential, key }) {
    secret = credential
    redis = new Redis(port, host)
    apiKey = key
  }

  validate (req, res, next) {
    if (!secret) {
      throw new Error('first must set cretendials, use fn config')
    }
    if (!apiKey) {
      throw new Error('first must set cretendials, use fn config')
    }
    if (req.headers['x-api-key']) {
      if (req.headers['x-api-key'] === apiKey) {
        return next()
      }
      return res.sendStatus(401)
    }
    const token = serverTokenAuthenticated(req)
    if (!token) {
      return res.sendStatus(401)
    }
    jwt.verify(token, secret, (error, decoded) => {
      if (error) {
        return res.status(401).json({error, message: 'invalid token'})
      }
      redis.get(decoded.user.email).then(value => {
        if (token !== value) return res.sendStatus(401)
        req.user = decoded.user
        next()
      }).catch(reason => {
        res.sendStatus(500).json(reason)
      })
    })
  }

  populateUser (req, res, next) {
    if (req.headers['x-api-key']) {
      if (req.headers['x-api-key'] === apiKey) {
        req.user = {roles: ['api']}
        return next()
      }
      return res.sendStatus(401)
    }
    const token = serverTokenAuthenticated(req)
    if (!token) {
      req.user = {roles: ['']}
      return next()
    }
    jwt.verify(token, secret, (error, decoded) => {
      if (error) {
        return res.status(401).json({error, message: 'invalid token'})
      }
      redis.get(decoded.user.email).then(value => {
        if (token !== value) return res.sendStatus(401)
        req.user = decoded.user
        next()
      }).catch(reason => {
        res.sendStatus(500).json(reason)
      })
    })
  }

  revoke (req, res, next) {
    if (!secret) {
      throw new Error('first must set cretendials, use fn setCredential')
    }
    let token = serverTokenAuthenticated(req)
    if (!token) {
      return res.sendStatus(401)
    }
    const decoded = jwt.decode(token)
    if (decoded) {
      redis.del(decoded.user.email)
    }
    next()
  }

  token (user, rembemberMe) {
    let expireTime = (60 * 60)
    if (rembemberMe) {
      expireTime = expireTime * 60
    }
    let token = jwt.sign({ user }, secret, {
      expiresIn: expireTime
    })
    redis.set(user.email.toLowerCase(), token, expireTime)
    return token
  }

  remove (email) {
    return this.redis.del()
  }
}

const auth = new Auth()

export default auth
