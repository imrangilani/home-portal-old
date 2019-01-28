<template>
  <div id="appContainer">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :name="name" :resetFn="resetName"/>
    <HomePage :name="name" @nameWasReset="name = $event"/>
    <button @click="changeName">Change my Name</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HomePage from "./components/HomePage.vue";

export default {
  name: "appl",
  components: {
    HelloWorld,
    HomePage
  },
  data: function() {
    return {
      name: "Imran Gilani"
    };
  },
  methods: {
    changeName: function() {
      this.name = "Aneesa Gilani";
    },
    resetName: function() {
      this.name = "Huma Gilani";
    }
  }
};
</script>

<style>
#appContainer {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
