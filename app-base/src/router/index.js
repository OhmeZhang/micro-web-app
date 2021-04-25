import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('@/views/hello'),
        },
        {
            path: '/home',
            component: () => import('@/views/home'),
        },
        {
            path: '/about',
            component: () => import('@/views/about'),
        }
    ]
});
