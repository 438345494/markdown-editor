
const { merge } = require('webpack-merge')
const webpackCommon = require('./webpack.common')
const { getPath } = require('./webpack.utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
  entry: getPath('./demo'),
  plugins: [
    new HtmlWebpackPlugin({
      template: getPath('./index.html')
    })
  ],
  devServer: {
    host: 'localhost',
    port: '8080',
    hot: true,
    inline: true,
    open: true,
    useLocalIp: false,
    proxy: {}
}
}
module.exports = merge(webpackCommon, config)