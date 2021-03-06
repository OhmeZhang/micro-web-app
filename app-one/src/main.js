import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuex from 'vuex';
import selfStore from './store';
Vue.use(Vuex);

Vue.config.productionTip = false

let instance = null;

function render(props) {
    const store = props.store;

    Vue.observable(store);

    Vue.prototype.$selfStore = selfStore;

    instance = new Vue({
        router,
        store,
        render: h => h(App), // 这里是挂载到自己的html中，基座会拿到挂载后的html，将其插入进去
    }).$mount('#app');
}

if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// 判断是否独立运行
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

// 子组件协议
export async function bootstrap(props = {}) {}
export async function mount(props) {
    render(props);
}
export async function unmount(props) {
    instance.$destroy();
}
