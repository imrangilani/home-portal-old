import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
export const eventBus = new Vue({
  methods: {
    resetName(name) {
      eventBus.$emit("nameWasResetAgain", name);
    }
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
