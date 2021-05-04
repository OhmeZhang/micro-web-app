const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

function resolve (dir) {
    return path.resolve(__dirname, '..', dir)
}

module.exports = {

    configureWebpack: {
        entry: './src/main.ts',

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                    include: [resolve('src')]
                }
            ]
        },

        resolve: {
            alias: {
                '@': path.join(__dirname, 'src')
            },
            extensions: ['.ts', '.tsx', '.js', '.json']
        }
    }
}
