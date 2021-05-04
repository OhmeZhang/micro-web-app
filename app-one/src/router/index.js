import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    base: window.__POWERED_BY_QIANKUN__ ? '/one/' : '/child/one/',
    mode: 'history',
    redirect: '/',
    component: () => import('@/App.vue'),
    routes: [
        {
            path: '/',
            component: () => import('@/views/hello'),
        }
    ]
});
