const { merge } = require('webpack-merge')
const webpackCommon = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { getPath } = require('./webpack.utils')
const config = {
  entry: getPath('./src'),
  output: {
    path: getPath('./dist'),
    filename: '[name][hash:6].js'
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        getPath('./dist')
      ]
    }),
  ]
}
module.exports = merge(webpackCommon, config)