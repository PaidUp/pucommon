import bugsnag from '@bugsnag/js'
import bugsnagExpress from '@bugsnag/plugin-express'

let bugsnagClient, middleware, intercept, contextualize
const errorMsg = 'Class not initialized, execute init ({apiKey, projectRoot, notifyReleaseStages})'

class HandlerBug {
  init ({apiKey, projectRoot, notifyReleaseStages}) {
    bugsnagClient = bugsnag({
      apiKey, projectRoot, notifyReleaseStages
    })
    bugsnagClient.use(bugsnagExpress)
    middleware = bugsnagClient.getPlugin('express')
    intercept = bugsnagClient.getPlugin('intercept')
    contextualize = bugsnagClient.getPlugin('contextualize')
  }

  get requestHandler () {
    if (!bugsnagClient) throw new Error(errorMsg)
    return middleware.requestHandler
  }

  get errorHandler () {
    if (!bugsnagClient) throw new Error(errorMsg)
    return middleware.errorHandler
  }

  get intercept () {
    if (!bugsnagClient) throw new Error(errorMsg)
    return intercept
  }

  get contextualize () {
    if (!bugsnagClient) throw new Error(errorMsg)
    return contextualize
  }

  notify (error) {
    if (!bugsnagClient) throw new Error(errorMsg)
    bugsnagClient.notify(error)
  }
}

export default new HandlerBug()
