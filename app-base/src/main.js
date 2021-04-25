import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';

Vue.use(ElementUI);

Vue.config.productionTip = false;

import {registerMicroApps, start} from 'qiankun';

registerMicroApps(
    [
        {
            name: 'oneApp',
            entry: '//localhost:9517', // 默认会加载这个html 解析里面的js 动态的执行（子应用必须支持跨域， 请求方式fetch）
            container: '#vueOne',
            activeRule: '/one',
            props: {
                store //共享主应用的store实例
            }
        },
        {
            name: 'twoApp',
            entry: '//localhost:9518', // 默认会加载这个html 解析里面的js 动态的执行（子应用必须支持跨域， 请求方式fetch）
            container: '#vueTwo',
            activeRule: '/two'
        },
    ],
    /*{
        beforeLoad: [
            app => {
                console.log("before load", app);
            }
        ], // 挂载前回调
        beforeMount: [
            app => {
                console.log("before mount", app);
            }
        ], // 挂载后回调
        afterUnmount: [
            app => {
                console.log("after unload", app);
            }
        ] // 卸载后回调
    }*/
)

start()

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
})
