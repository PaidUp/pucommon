import AWS from 'aws-sdk'
import AsyncLock from 'async-lock'
const lock = new AsyncLock()
let lambda
let options

export default class Sequence {
  static setConfig (params, region = 'us-east-1', apiVersion = '2015-03-31', profile = 'default') {
    const credentials = new AWS.SharedIniFileCredentials({ profile })
    AWS.config.credentials = credentials
    options = params
    lambda = new AWS.Lambda({region, apiVersion})
  }

  static next (key, qty = 1) {
    let opt = {
      FunctionName: options.functionName,
      InvocationType: 'RequestResponse',
      LogType: 'None',
      Payload: JSON.stringify({
        key,
        db: options.db,
        host: options.host,
        port: options.port,
        qty
      })
    }
    return new Promise((resolve, reject) => {
      lock.acquire(key, function (done) {
        lambda.invoke(opt, function (error, data) {
          if (error) return done(error)
          done(null, JSON.parse(data.Payload))
        })
      }, function (err, ret) {
        if (err) {
          reject(err)
        } else {
          resolve(ret)
        }
      })
    })
  }
}
