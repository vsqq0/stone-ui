//去console插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//gzip压缩插件
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
  // outputDir: process.env.outputDir,
  // assetsDir: 'static',
  // baseUrl: '/vue-project',
  
  configureWebpack: config => {
    let plugins = [
      // new UglifyJsPlugin({
      //   uglifyOptions: {
      //     compress: {
      //       warnings: false,
      //       drop_debugger: true,
      //       drop_console: true
      //     }
      //   },
      //   // sourceMap: false,
      //   parallel: true
      // }),
      new CompressionWebpackPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ];
    if (process.env.NODE_ENV !== 'development') {
      config.plugins = [...config.plugins, ...plugins];
    }
  },
  devServer: {
    // open: false,
    // host: '0.0.0.0',
    // port: 8000,
    // https: false,
    // hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8012',
        changeOrigin: true
      }
    }
  }
};

