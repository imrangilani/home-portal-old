<template>
  <div class="hello">
    <h1 v-once>{{title}}</h1>
    <h2 v-if="msg">{{msg}} {{name}}! to {{title}}</h2>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
    </ul>

    <button @click="reverseMessage">Show Message:</button>
    <p>
      <a :href="vueLink">Vue JS</a>
    </p>
    <p v-html="vueHTML"></p>
    <button @click="increaseCount">Increase Count</button>
    <p>{{count}}</p>
    <input type="text" v-model="title">

    <h2>Counter Example</h2>
    <button @click="counter++">increase</button>
    <button @click="counter--">decrease</button>
    <button @click="secondCounter++">Increase Second</button>
    <p>Counter: {{ counter }}</p>
    <p>Counter: {{ secondCounter }}</p>
    <p>Result: {{ result }}</p>
    <p>Result: {{ secondResult }}</p>
    <br>
    <br>
    <button @click="resetFn()">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
  name: "HelloWorld",
  props: {
    name: String,
    resetFn: Function
  },
  data: function() {
    return {
      name: this.name,
      title: "Vue JS App",
      msg: "Hello ",
      vueLink: "https://vuejs.org",
      vueHTML: '<a href="http://www.cnn.com">CNN</a>',
      count: 0,
      todos: [
        { id: 0, text: "Learn Javascript" },
        { id: 1, text: "Learn Vue" },
        { id: 2, text: "Build something great" }
      ],
      counter: 0,
      secondCounter: 0
    };
  },
  methods: {
    reverseMessage: function() {
      console.log("reverseMessage Called");

      this.title = this.title
        .split("")
        .reverse()
        .join("");

      this.msg = this.msg
        .split("")
        .reverse()
        .join("");
    },
    increaseCount: function() {
      this.count++;
    }
  },
  created() {
    eventBus.$on("nameWasResetAgain", name => {
      this.name = name;
    });
  },
  computed: {
    result: function() {
      console.log("result method Called");
      return this.counter > 5 ? "Greater than 5" : "Smaller than 5";
    },
    secondResult: function() {
      console.log("secondResult method Called");
      return this.secondCounter > 5 ? "Greater than 5" : "Smaller than 5";
    }
  },
  watch: {
    counter: function(value) {
      var vm = this;
      setTimeout(function() {
        vm.counter = 0;
      }, 4000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
