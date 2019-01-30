import bugsnag from '@bugsnag/js'
import bugsnagExpress from '@bugsnag/plugin-express'

let bugsnagClient, middleware
const errorMsg = 'Class not initialized, execute init ({apiKey, projectRoot, notifyReleaseStages})'

export default {
  init ({ apiKey, projectRoot, notifyReleaseStages }) {
    bugsnagClient = bugsnag({ apiKey, projectRoot, notifyReleaseStages })
    bugsnagClient.use(bugsnagExpress)
    middleware = bugsnagClient.getPlugin('express')
  },

  requestHandler () {
    if (!bugsnagClient) throw new Error(errorMsg)
    return middleware.requestHandler
  },

  errorHandler () {
    if (!bugsnagClient) throw new Error(errorMsg)
    return middleware.errorHandler
  },

  intercept () {
    if (!bugsnagClient) throw new Error(errorMsg)
    return bugsnagClient.getPlugin('intercept')
  },

  contextualize () {
    if (!bugsnagClient) throw new Error(errorMsg)
    return bugsnagClient.getPlugin('contextualize')
  },

  notify (error) {
    if (!bugsnagClient) throw new Error(errorMsg)
    bugsnagClient.notify(error)
  }

}
