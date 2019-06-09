import Vue from 'vue';
import VueRouter from 'vue-router';
import Moo from "./components/moo/Moo";
import Loo from "./components/loo/Loo";
import Home from "./components/Home";
import UsersLogin from "./components/users/UsersLogin";


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            children: [
                {
                    path: 'moo',
                    name: 'routes.moo',
                    component: Moo
                },
                {
                    path: 'loo',
                    name: 'routes.loo',
                    component: Loo
                },
            ],
        },
        {
            path: '/404',
            component: Moo
        },
        {
            path: '/login',
            name: 'routes.users.login',
            component: UsersLogin
        },
    ]
});

export default router;
