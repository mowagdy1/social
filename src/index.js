import Vue from 'vue';
import router from "./router.js";
import Home from './components/Home.vue';


const app = new Vue({
    router,
    render: h => h(Home),
}).$mount('#app');

// Now the app has started!
