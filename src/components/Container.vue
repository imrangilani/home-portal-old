<template>
  <div id="appContainer">
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
import HelloWorld from "./HelloWorld.vue";
import HomePage from "./HomePage.vue";
import Slots from "./Slots.vue";

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
