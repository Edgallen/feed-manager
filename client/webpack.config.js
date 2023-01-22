const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const getRules = require("./config/webpack/webpack.config.rules");

module.exports = {
    entry: path.resolve(__dirname, "src"),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: "bundlefile.js"
    },
    module: {
      rules: [
        ...getRules()
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    },
    resolveLoader: {
      modules: [
        path.join(__dirname, 'node_modules')
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new MiniCssExtractPlugin(),
    ],
};
