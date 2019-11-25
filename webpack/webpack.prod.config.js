const commonConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const cssnano = require('cssnano')

const proConfig = {
  // 入口文件
  devtool: 'cheap-module-source-map',
  mode: 'production',
  module: {
    // 配置相应的规则
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          { loader: 'less-loader', options: { javascriptEnabled: true } }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  },
  plugins: [
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    })
  ]
}
module.exports = merge({
  customizeArray(a, b, key) {
    if (key === 'entry.app') {
      return b
    }
    return undefined
  }
})(commonConfig, proConfig)
