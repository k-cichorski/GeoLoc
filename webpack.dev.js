const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const { DEV_SERVER_PORT } = require('./config.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval', // 'source-map'
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: DEV_SERVER_PORT
  }
});