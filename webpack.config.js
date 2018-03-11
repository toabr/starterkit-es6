'use strict';

const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractLESS = new ExtractTextPlugin('styles.css');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: {
    scripts: "./src/scripts.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist",
    filename: "[name].min.js",
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: extractLESS.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader'],
          publicPath: '/dist',
        })
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }
    }]
  },
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    stats: "errors-only",
  },
  plugins: debug ? [
    new HtmlWebpackPlugin({
      title: 'ES6 Starterkit',
      minify: {
        collapseWhitespace: true
      },
      filename: './../index.html',
      hash: true,
      template: './src/index.html',
    }),
    extractLESS,
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
