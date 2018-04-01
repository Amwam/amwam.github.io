/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import webpack from "webpack";
import UglifyEsPlugin from "uglify-es-webpack-plugin";

const isProduction = process.env.NODE_ENV === "production";

export default {
  context: __dirname,
  entry: "./index.jsx",
  output: {
    path: `${__dirname}/`,
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        loader: "css-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: (() => {
    if (isProduction) {
      return [
        new webpack.DefinePlugin({
          "process.env": {
            NODE_ENV: JSON.stringify("production")
          }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
      ];
    }
    return [];
  })(),
  mode: isProduction ? 'production': 'development',
  devtool: isProduction ? "source-map" : "eval-source-map",
  devServer: {
    port: 3500,
    historyApiFallback: {
      index: "index.html"
    }
  }
};
