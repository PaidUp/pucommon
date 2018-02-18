var path = require('path')
var nodeExternals = require('webpack-node-externals')
// const NodemonPlugin = require('nodemon-webpack-plugin')
const pkg = require('./package.json')

let libraryName = pkg.name

let wpc = {
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/index.js',
  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'lib'),
    publicPath: '/lib/',
    filename: 'library.js',
    library: 'puCommon',
    libraryTarget: 'var',
    umdNamedDefine: true
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, './src')]
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
      '@': path.resolve(__dirname, './src')
    },
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  plugins: []
}

module.exports = wpc
