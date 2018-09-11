var path = require("path");
var webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  // Define entry point
  entry: "./src/index.js",

  // Define target file and directory
  output: {
    // path는 절대 경로여야 한다고 함..
    path: path.join(__dirname, "dist/assets"),
    filename: "bundle.js",
    // source map 지원을 위한 설정
    sourceMapFilename: "bundle.map"
  },

  // source map 지원을 위한 설정
  devtool: "#source-map",

  module: {
    rules: [
      {
        // 로더가 처리할 파일 종류 매칭
        test: /\.js$/,
        // 제외할 파일 지정
        exclude: /(node_modules)/,
        // 바벨 loader를 사용할 것임
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },

      // CSS로 넣자!
      {
        test: /\.css/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [require("autoprefixer")]
            }
          }
        ]
      }
    ]
  },

  // Minify 설정 (Uglify or Obfuscate)
  // 이건.. webpack 4 설정임. Reference: https://webpack.js.org/configuration/optimization/
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  }
};
