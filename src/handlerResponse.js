import Logger from './logger'

export default class HandlerResponse {
  static send (response, msg) {
    return response.status(200).json(msg)
  }

  static error (response, msg, code) {
    Logger.error({code: code, resason: msg})
    return response.status(code || 500).json(msg)
  }
}
