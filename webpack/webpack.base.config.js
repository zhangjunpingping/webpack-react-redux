const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

const commonConfig = {
  entry: {
    app: [path.join(__dirname, '../src/index.tsx')]
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[contenthash].js',
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
    }),

    new webpack.HashedModuleIdsPlugin(),

    new StyleLintPlugin({
      context: 'src',
      files: '**/*.less',
      syntax: 'less'
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
