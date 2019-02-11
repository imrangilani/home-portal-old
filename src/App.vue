<template>
  <div id="appContainer">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="selectedComponent= 'HelloWorld'">Show HelloWorld</button>
    <button @click="selectedComponent= 'HomePage'">Show HomePage</button>
    <button @click="selectedComponent='Slots'">Show Slots</button>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
    ***********************************************
    <HelloWorld :name="name" :resetFn="resetName"/>
    <HomePage :name="name" @nameWasReset="name = $event"/>
    <button @click="changeName">Change my Name</button>
    <Slots :slotData="slotData">
      <h3 slot="firstSlot" class="slotClass">This is html being passed from the parent to component</h3>
      <p>lorem ipsem</p>
    </Slots>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HomePage from "./components/HomePage.vue";
import Slots from "./components/Slots.vue";

export default {
  name: "container",
  components: {
    HelloWorld,
    HomePage,
    Slots
  },
  data: function() {
    return {
      name: "Imran Gilani",
      slotData: "first ever slot",
      selectedComponent: HelloWorld
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
.slotClass {
  color: red;
}
</style>
