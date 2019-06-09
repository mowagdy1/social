import Vue from 'vue';
import router from "./router.js";
import App from "./App";


const app = new Vue({
    router,
    render: h => h(App),
}).$mount('#app');

// Now the app has started!
