
const { merge } = require('webpack-merge')
const webpackCommon = require('./webpack.common')
const { getPath } = require('./webpack.utils')
const config = {
  entry: getPath('./test'),
  plugins: [
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