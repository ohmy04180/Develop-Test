const { merge } = require("webpack-merge");
const config = require("./webpack.config.js");

module.exports = merge(config, {
  mode: "development",

  watch: true,
  
  watchOptions: {
    ignored: [
      "./node_modules/**"
    ],
  },

  // devServer: {
  //   proxy: {
  //     '/www': {
  //       target: 'https://www.icheon.go.kr/portal/rssBbsNtt.do?bbsNo=13&type=p',
  //       changeOrigin: true,
  //       pathRewrite: { '^/www': '' },
  //     },
  //   }
  // }
});
