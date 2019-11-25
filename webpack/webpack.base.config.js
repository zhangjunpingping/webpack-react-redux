const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const commonConfig = {
  // 入口文件
  devtool: 'inline-source-map',
  entry: {
    app: [path.join(__dirname, '../src/index.tsx')]
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: [
          'babel-loader?cacheDirectory=true',
          'awesome-typescript-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|woff|eot)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  // 配置相应的插件
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../src/index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.join(__dirname, '../src')
    }
  }
}

module.exports = commonConfig
