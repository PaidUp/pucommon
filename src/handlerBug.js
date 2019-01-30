import bugsnag from '@bugsnag/js'
import bugsnagExpress from '@bugsnag/plugin-express'

const errorMsg = 'Class not initialized, execute init ({apiKey, projectRoot, notifyReleaseStages})'

class HandlerBug {
  init ({apiKey, projectRoot, notifyReleaseStages}) {
    this.bugsnagClient = bugsnag({
      apiKey, projectRoot, notifyReleaseStages
    })
    this.bugsnagClient.use(bugsnagExpress)
    this.middleware = this.bugsnagClient.getPlugin('express')
    this.intercept = this.bugsnagClient.getPlugin('intercept')
    this.contextualize = this.bugsnagClient.getPlugin('contextualize')
  }

  get requestHandler () {
    if (!this.bugsnagClient) throw new Error(errorMsg)
    return this.middleware.requestHandler
  }

  get errorHandler () {
    if (!this.bugsnagClient) throw new Error(errorMsg)
    return this.middleware.errorHandler
  }

  get intercept () {
    if (!this.bugsnagClient) throw new Error(errorMsg)
    return this.intercept
  }

  get contextualize () {
    if (!this.bugsnagClient) throw new Error(errorMsg)
    return this.contextualize
  }

  notify (error) {
    if (!this.bugsnagClient) throw new Error(errorMsg)
    this.bugsnagClient.notify(error)
  }
}
export const handlerBug = new HandlerBug()
