import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(ElementUI,axios)
// 幣別金額的Filter
Vue.filter('toCurrency', function (value) {
  if (typeof value !== "number") {
      return value;
  }
  var formatter = new Intl.NumberFormat('zh-TW', {
      style: 'currency',
      currency: 'TWD',
      minimumFractionDigits: 0
  });
  return formatter.format(value);
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
