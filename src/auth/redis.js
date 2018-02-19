import redis from 'redis'
import Logger from './logger'

export default class Redis {
  constructor (port, host) {
    this.client = redis.createClient(port, host)
    this.client.on('connect', function () {
      Logger.info('connected to redis')
    })
  }

  set (key, value, expiration = 86400) {
    return new Promise((resolve, reject) => {
      this.client.set(key, value, (err, reply) => {
        if (err) {
          reject(err)
        }
        this.client.expire(key, expiration)
        resolve(reply)
      })
    })
  }

  get (key) {
    return new Promise((resolve, reject) => {
      this.client.get(key, (err, reply) => {
        if (err) {
          reject(err)
        }
        resolve(reply)
      })
    })
  }

  del (key) {
    return new Promise((resolve, reject) => {
      this.client.del(key, (err, reply) => {
        if (err) {
          reject(err)
        }
        resolve(reply)
      })
    })
  }
}
