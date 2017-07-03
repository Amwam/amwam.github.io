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
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
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
        new UglifyEsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
      ];
    }
    return [];
  })(),
  devtool: isProduction ? "source-map" : "eval-source-map",
  devServer: {
    port: 3500,
    historyApiFallback: {
      index: "index.html"
    }
  }
};
