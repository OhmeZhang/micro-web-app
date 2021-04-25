const path = require('path');

module.exports = {
    devServer: {
        port: 9517,

        headers: {
            'Access-Control-Allow-Origin': '*'
        },

        overlay: {
            warnings: false, //不显示警告
            errors: false	//不显示错误
        }
    },

    configureWebpack: {
        output: {
            library: 'oneApp',
            libraryTarget: 'umd'
        },

        resolve: {
            alias: {
                '@': path.join(__dirname, 'src')
            }
        }
    },

    lintOnSave: false
};
