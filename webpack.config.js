var webpack = require('webpack');
var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');


module.exports = {
    entry: "./src/ReputationInvestigation.ts",
    target: "node",
    output: {
        filename: "./dist/out.min.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        plugins: [
            new TsConfigPathsPlugin()
        ]
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),
        new UnminifiedWebpackPlugin(),
    ]
}