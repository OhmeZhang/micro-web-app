import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false

let instance = null;

function render(props) {
    instance = new Vue({
        el: '#app',
        router,
        render: h => h(App), // 这里是挂载到自己的html中，基座会拿到挂载后的html，将其插入进去
    })
}

if (window.__POWERED_BY_QIANKUN__) {
    // eslint-disable-next-line no-undef
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// 判断是否独立运行
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

// 子组件协议
export async function bootstrap(props = {}) {
}

export async function mount(props) {
    render(props);
}

export async function unmount(props) {
    instance.$destroy();
}
