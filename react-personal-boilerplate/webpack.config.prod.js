const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(), // to clean dist folder before build
    new BundleAnalyzerPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: "all", // to split code in two bundles vendors and main
    },
    runtimeChunk: {
      name: "manifest",
    },
  },
  output: {
    filename: "[name].[chunkhash].js",
  }
});
