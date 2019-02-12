<template>
  <div id="appContainer">
    <img alt="Vue logo" src="./assets/logo.png"><br>
    <button @click="selectedComponent= 'Container'">Show Container</button>
    <button @click="selectedComponent= 'QuoteApp'">Show QuoteApp</button>
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
import Container from "./components/Container.vue"
import QuoteApp from "./components/QuoteApp.vue"

export default {
  name: "mainApp",
  components: {
    Container,
    QuoteApp
  },
  data: function() {
    return {
      selectedComponent: QuoteApp
    };
  },
  methods: {
    
  }
};
</script>

<style>
</style>
