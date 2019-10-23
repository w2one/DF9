const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ENV = process.env.NODE_ENV || "development";

module.exports = {
  mode: ENV,
  entry: {
    index: "./src/index.tsx"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "lib"),
    libraryTarget: "commonjs2"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src/"),
      "@styles": path.resolve(__dirname, "../src/styles/"),
      "@static": path.resolve(__dirname, "../src/static/"),
      "@utils": path.resolve(__dirname, "../src/utils/"),
      "@components": path.resolve(__dirname, "../src/components/"),
      "@containers": path.resolve(__dirname, "../src/containers/"),
      "@contexts": path.resolve(__dirname, "../src/contexts/")
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"]
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
          ENV !== "production"
            ? {
                loader: "style-loader"
              }
            : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  // publicPath: "../"
                }
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
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css"
    })
  ],
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
