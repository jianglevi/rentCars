import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
// 引用高德地图插件
import './plugin/aMap'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
