const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["whatwg-fetch", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
  },
  devServer: {
    contentBase: ".",
    historyApiFallback: true,
    hot: true,
    publicPath: "/",
    host: "0.0.0.0",
    disableHostCheck: true
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunksSortMode: "dependency",
      hash: true,
      inject: "body"
    })
  ]
};
