const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./main.js",
  context: path.resolve(__dirname, 'src'),
  module: {
    rules: [
      { test: /\.svg$/, use: "svg-inline-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(js)$/, exclude: /node_modules/, use: "babel-loader",  options: {presets: ['env'] }},
      { test: /\.s?css$/, use: [  MiniCssExtractPlugin.loader, {loader: "css-loader"} ]}
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'My module',
        filename: 'index.html',
    }),
    new MiniCssExtractPlugin({ filename: 'style.css' })
  ],
  mode: 'development'
};
