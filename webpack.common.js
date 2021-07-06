const path = require('path');
const { ProvidePlugin, optimize } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { GOOGLE_PLACES_API_KEY } = require('./config.js');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.css$/i,
        exclude: /(node_modules)/,
        use: [{
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        }]
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /(node_modules)/,
        use: [{
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader'
        }]
      }
    ]
  },
  plugins: [
    new ProvidePlugin({
      "React": "react"
    }),
    new optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      inject: true,
      GOOGLE_PLACES_API: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_PLACES_API_KEY}&libraries=places`
    })
  ]
};