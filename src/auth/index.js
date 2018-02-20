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

export default class Auth {
  static setCredential (config) {
    let { port, host } = config
    secret = config.credential
    redis = new Redis(port, host)
  }

  static revoke (req, res, next) {
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

  static validate (req, res, next) {
    if (!secret) {
      throw new Error('first must set cretendials, use fn setCredential')
    }
    let token = serverTokenAuthenticated(req)
    if (!token) {
      return res.sendStatus(401)
    }
    jwt.verify(token, secret, (error, decoded) => {
      if (error) {
        return res.status(500).json({error, message: 'invalid token'})
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

  static token (user, rembemberMe) {
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

  static remove (email) {
    return redis.del()
  }
}
