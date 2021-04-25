import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    base: '/one',
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
