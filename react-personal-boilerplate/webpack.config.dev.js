const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
  mode: 'development', // Providing the mode configuration option tells webpack to use its built-in optimizations accordingly.
  devServer: {
    open: true // open browser after WDS has been started
  },
  devtool: 'eval-source-map', /** refer for more options https://webpack.js.org/configuration/devtool/ */
});
