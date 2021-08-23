'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    script: "./src/script.js",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: "dist",
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
      test: /\.(sa|sc|c)ss$/,
      use: [
        false ? "style-loader" : MiniCssExtractPlugin.loader,
        "css-loader",
        "postcss-loader",
        "sass-loader",
      ],
    }]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    // stats: "errors-only",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Starterkit es6',
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true
      },
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    })
  ]
};
