/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import webpack from 'webpack';

export default {
  context: __dirname,
  entry: './index.jsx',
  output: {
    path: `${__dirname}/__build__`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },

    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    },
  },
  plugins: (() => {
    if (process.argv.indexOf('-p') !== -1) {
      return [
        new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false,
        },
      }),
      ];
    }
    return [];
  })(),
  devtool: (process.argv.indexOf('-p') === -1)? 'eval-source-map' : 'none',
};
