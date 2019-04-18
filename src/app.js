import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.esm.browser.js';
// import routes from "./routes.js";
import {App} from './App.js';



const app = new Vue({
    // router: routes,
    render: h => h(App),
}).$mount('#app');

// Now the app has started!
