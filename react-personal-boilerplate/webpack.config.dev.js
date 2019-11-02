const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
  // Providing the mode configuration option tells webpack to use its built-in optimizations accordingly.
  // 
  mode: 'development', 
  devServer: {
    open: true // open browser after WDS has been started
  },
  devtool: 'eval-source-map', /** refer for more options https://webpack.js.org/configuration/devtool/ */
});
