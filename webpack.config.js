'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    script: "./src/script.js",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "dist",
    filename: "[name].min.js",
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader', 'sass-loader'],
        // publicPath: '/dist',
      })
    }]
  },
  devServer: {
    stats: "errors-only",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Starterkit es6',
      hash: true,
      template: './src/index.html',
      filename: './../index.html',
      minify: {
        collapseWhitespace: true
      },
    }),
    new ExtractTextPlugin('style.css')
  ]
};
