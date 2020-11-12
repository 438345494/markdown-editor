const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { getPath } = require('./webpack.utils')
const NODE_MODULES_PATH = getPath('node_modules')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
        exclude: NODE_MODULES_PATH
      },
      {
        test: /\.pug$/,
        use: ['pug-html-loader'],
        exclude: NODE_MODULES_PATH
      },
      {
        test: /\.m?js$/,
        use: ['babel-loader'],
        exclude: NODE_MODULES_PATH
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: [
            'style-loader',
            'css-loader',
            'stylus-loader'
        ],
        exclude: NODE_MODULES_PATH
      },
      {
        test: /\.(png|jpg|jpeg|gift|svg)$/,
        use: 'url-loader'
      },
      {
        test: /\.js$/,
        use: ['eslint-loader'],
        exclude: NODE_MODULES_PATH,
        enforce: 'pre'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.styl'],
    alias: {
      '@config': getPath('./config'),
      '@src': getPath('./src'),
      '@components': getPath('./src/components'),
      '@css': getPath('./src/css'),
      '@utils': getPath('./utils')
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: getPath('./index.html')
    })
  ]
}