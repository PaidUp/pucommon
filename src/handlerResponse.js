import Logger from './logger'

export default class HandlerResponse {
  static send (response, msg) {
    return response.status(200).json(msg)
  }

  static error (response, msg, code) {
    if (process.env.NODE_ENV === 'local') {
      console.log('ERROR: ' + JSON.stringify(msg))
    }
    const err = {code: code, message: msg}
    Logger.error(err)
    return response.status(code || 500).json(err)
  }
}
