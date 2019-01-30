import bugsnag from '@bugsnag/js'
import bugsnagExpress from '@bugsnag/plugin-express'

var bugsnagClient, middleware, intercept, contextualize
const errorMsg = 'Class not initialized, execute init ({apiKey, projectRoot, notifyReleaseStages})'

export default class HandlerBug {
  static init ({apiKey, projectRoot, notifyReleaseStages}) {
    bugsnagClient = bugsnag({
      apiKey, projectRoot, notifyReleaseStages
    })
    bugsnagClient.use(bugsnagExpress)
    middleware = bugsnagClient.getPlugin('express')
    intercept = bugsnagClient.getPlugin('intercept')
    contextualize = bugsnagClient.getPlugin('contextualize')
  }

  static get requestHandler () {
    if (!bugsnagClient) throw new Error(errorMsg)
    return middleware.requestHandler
  }

  static get errorHandler () {
    if (!bugsnagClient) throw new Error(errorMsg)
    return middleware.errorHandler
  }

  static get intercept () {
    if (!bugsnagClient) throw new Error(errorMsg)
    return intercept
  }

  static get contextualize () {
    if (!bugsnagClient) throw new Error(errorMsg)
    return contextualize
  }

  static notify (error) {
    if (!bugsnagClient) throw new Error(errorMsg)
    bugsnagClient.notify(error)
  }
}
