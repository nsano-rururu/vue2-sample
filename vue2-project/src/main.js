import Vue from 'vue';
import App from './App.vue';
import './style.css';
import ElastalertTimePicker from './components/ElastalertTimePicker.vue';
//import Sample from './components/Sample.vue';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import 'element-ui/lib/theme-chalk/index.css';
//Vue.component('Sample', Sample);
Vue.component('ElastalertTimePicker', ElastalertTimePicker);
Vue.use(ElementUI, { locale, size: 'mini' });
new Vue({
  render: (h) => h(App),
}).$mount('#app');
