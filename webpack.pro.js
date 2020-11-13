const { merge } = require('webpack-merge')
const webpackCommon = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { getPath } = require('./webpack.utils')
const config = {
  entry: getPath('./src/index.js'),
  output: {
    path: getPath('./dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
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