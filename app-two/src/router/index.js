import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    base: window.__POWERED_BY_QIANKUN__ ? '/two/' : '/child/two/',
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('@/views/hello'),
        }
    ]
});
