import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';
import './config/axios.config';
import './config/bootstrap-vue.config';
import './config/global-components.config';
import './config/moment.config';
import './config/noty.config';
import './config/vuelidate.config';
import { Router } from './router';
import App from './App.vue';

new Vue({
  el: '#app',
  router: Router,
  render: h => h(App)
});