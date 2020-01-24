const path = require("path");
const webpack = require("webpack");
HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: { "react-dom": "@hot-loader/react-dom" }
  },

  output: {
    path: path.resolve(__dirname, "public"),
    //publicPath: "/public",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "/public",
    port: 3000,
    publicPath: "/",
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ]
};
