// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import ScrollExample from "./VirtualTable";
// import Antd from "ant-design-vue";

Vue.config.productionTip = false;
// Vue.use(Antd);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { ScrollExample },
  template: "<ScrollExample/>"
});
