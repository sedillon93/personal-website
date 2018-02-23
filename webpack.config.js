'use strict';

require('dotenv').config();

const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');

const webpackConfig = module.exports = {};

webpackConfig.entry = `${__dirname}/frontend/src/main.js`;
webpackConfig.output = {
  path: path.resolve(__dirname, './dist'),
  filename: 'bundle.[hash].js',
};
webpackConfig.plugins = [
  new htmlWebpackPlugin(),
  new extractTextPlugin('bundle.[hash].css'),
];
webpackConfig.module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader',
    },
  ],
};
webpackConfig.devServer = {
  historyApiFallback: true,
};
