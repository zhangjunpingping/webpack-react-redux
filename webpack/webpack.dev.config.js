const path = require('path')
const commonConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
const StyleLintPlugin = require('stylelint-webpack-plugin')

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  // 入口文件/*  */
  module: {
    // entry: {
    //   app: ["react-hot-loader/patch", path.join(__dirname, "../src/index.js")]
    // },
    // output: {
    //   path: path.join(__dirname, "../dist"),
    //   filename: "[name].[hash].js",
    //   publicPath: "/"
    // },
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
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
  plugins: [
    new StyleLintPlugin({
      context: 'src',
      files: '**/*.less',
      syntax: 'less'
    })
  ],
  devServer: {
    port: 8086,
    contentBase: path.join(__dirname, '../dist'),
    historyApiFallback: true,
    host: 'localhost',
    disableHostCheck: true
  }
  // historyApiFallback: true,在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
}
module.exports = merge({
  customizeArray(a, b, key) {
    if (key === 'entry.app') {
      return b
    }
    return undefined
  }
})(commonConfig, devConfig)
