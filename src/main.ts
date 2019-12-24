import Vue from 'vue';
import App from './app.vue';
import './registerServiceWorker';
import router from './router/index';
import store from './store';
import 'bootstrap';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
