let path = require("path");

module.exports = {
    entry: './src/App.js',
    output:{
        path: __dirname,
        filename: 'app.js'
    },
    module: {
        rules:[{
            test: /\.jsx?$/,
            exclude: '/node_modules/',
            use:['babel-loader']
        }]
    },
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: true,
        contentBase: __dirname

    }

}