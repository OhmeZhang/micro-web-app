const path = require('path');

const {npm_lifecycle_script} = process.env;
if (npm_lifecycle_script) {
    const [env] = npm_lifecycle_script.split(' ').reverse();
    console.log(env);
}

module.exports = {
    devServer: {
        port: 9518,

        headers: {
            'Access-Control-Allow-Origin': '*'
        },

        overlay: {
            warnings: false, //不显示警告
            errors: false	//不显示错误
        }
    },

    publicPath: process.env.NODE_ENV === 'production'
        ? '/child/two/'
        : '/',

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
