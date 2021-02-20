const path = require("path");
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),

module.exports = {

  entry: {
    "main": ['babel-polyfill',"./src/index.js"],
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./js/[name].bundle.js",
    publicPath: "../",
  },

  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        },
      },

      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: path.resolve(__dirname, "./src/fonts"),
        use: [{
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        }, ],
      },

      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, "./src/scss"),
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", 
          "postcss-loader", 
          "sass-loader", 
        ],
      },
    ],
  },

  plugins: [
    // index.js에 포함된 css를 별도의 .css 파일 형식으로 추출한다.
    new MiniCssExtractPlugin({
      filename: "css/style.min.css",
    })
  ]
};