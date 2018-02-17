var path = require('path')
var nodeExternals = require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin')

let wpc = {
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/index.js',
  devtool: '#eval',

  output: {
    path: path.resolve(__dirname, './lib'),
    publicPath: '/lib/',
    filename: 'library.js'
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, './server')]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './server')
    }
  },
  plugins: [
    new NodemonPlugin({
      nodeArgs: ['--inspect=0.0.0.0:9228']
    })
  ]
}

module.exports = wpc
