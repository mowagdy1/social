import Vue from 'vue';
import VueRouter from 'vue-router';
import Moo from "./components/moo/Moo";
import Loo from "./components/loo/Loo";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/moo', component: Moo},
        {path: '/loo', component: Loo},
    ]
});

export default router;
