const path = require('path')
const webpack = require('webpack')

module.exports = {
//  mode: 'production',
  mode: 'none',
  entry: './root/main.js',
  output: {
    path: path.resolve(__dirname, 'root'),
//    publicPath: '/root/',
    filename: 'js/bundle.js'
  },
  devtool: 'inline',
  module: {
    rules: [
      {
        test: /\.riot$/,
        exclude: /node_modules/,
        use: [{
          loader: '@riotjs/webpack-loader',
          options: {
            hot: true
          }
        }]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'root'),
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
      }
    }
  }
}