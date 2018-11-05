const commonConfig = require('./webpack.config.common');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {

  mode: 'development',
  
  devServer: {
    port: 1981,
    host: 'localhost',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }

});