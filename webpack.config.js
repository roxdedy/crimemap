const path = require('path');

const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, '/app'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader'},
            { test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    devServer: {
        contentBase: "./app",
        port: 8888
    }
}

module.exports = config;