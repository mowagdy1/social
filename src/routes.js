import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.esm.browser.js';
import VueRouter from 'https://unpkg.com/vue-router@2.0.0/dist/vue-router.js';

Vue.use(VueRouter);


const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };


const router = new VueRouter({
    mode:'history',
    routes : [
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar }
    ]
});

export default router;
