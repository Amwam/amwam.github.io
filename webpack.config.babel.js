/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import webpack from 'webpack';

export default {
    context: __dirname,
    entry: './index.jsx',
    output: {
        path: `${__dirname}/`,
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
            {
                test: /\.json$/,
                loader: 'json'
            },

        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
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
