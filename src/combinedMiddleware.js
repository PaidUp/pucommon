import connect from 'connect'

export default function combinedMiddleware (arrayMethods) {
  return (function () {
    var chain = connect()
    arrayMethods.forEach(function (middleware) {
      chain.use(middleware)
    })
    return chain
  })()
}
