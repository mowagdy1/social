import Vue from 'vue';
// import routes from "./routes.js";
import Home from './components/Home.vue';


const app = new Vue({
    // router: routes,
    render: h => h(Home),
}).$mount('#app');

// Now the app has started!
