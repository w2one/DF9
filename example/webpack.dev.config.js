const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./example/src/index.tsx"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [
                require("postcss-preset-env")({
                  flexbox: "no-2009"
                }),
                require("cssnano")({
                  preset: "default"
                })
              ]
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src/")
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./example/src/index.html"
    })
  ],
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM"
  // },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    host: "0.0.0.0",
    port: 9000,
    useLocalIp: true,
    hot: true,
    hotOnly: true,
    open: true,
    disableHostCheck: true,
    historyApiFallback: true
  }
};
