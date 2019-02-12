<template>
  <div id="appContainer">
    <img alt="Vue logo" src="./assets/logo.png"><br>
    <button @click="selectedComponent= 'Container'">Show Container</button>
    <button @click="selectedComponent= 'QuoteGrid'">Show QuoteGrid</button>
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
import Container from "./components/Container.vue"
import QuoteGrid from "./components/QuoteGrid.vue"

export default {
  name: "mainApp",
  components: {
    Container,
    QuoteGrid
  },
  data: function() {
    return {
      selectedComponent: QuoteGrid
    };
  },
  methods: {
    
  }
};
</script>

<style>
</style>
