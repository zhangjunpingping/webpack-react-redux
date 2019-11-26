const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const commonConfig = require('./webpack.base.config')

const devConfig = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: {
    app: ['react-hot-loader/patch', path.join(__dirname, '../src/index.tsx')]
  },
  output: {
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 8081,
    contentBase: path.join(__dirname, '../dist'),
    historyApiFallback: true,
    host: 'localhost',
    disableHostCheck: true
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  }
}

module.exports = merge({
  customizeArray(a, b, key) {
    if (key === 'entry.app') {
      return b
    }
    return undefined
  }
})(commonConfig, devConfig)
