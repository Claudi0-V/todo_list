const path = require('path')
let mode = "development";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


if (process.env.NODE_ENV === "production") {
  mode = "production";
} 


module.exports = {
	mode: mode,
	devtool: "source-map",
  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      }
    },
    {
    test: /\.css$/i,
    use: [MiniCssExtractPlugin.loader, "css-loader"],
  },
  ]
  },
  plugins: [new MiniCssExtractPlugin()],
	devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    compress: true,
    port: 9000,
  }
}