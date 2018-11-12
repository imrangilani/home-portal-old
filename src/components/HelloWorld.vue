<template>
  <div class="hello">
    <h1 v-if="msg">{{msg}}</h1>
    <ul>
    <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
    </ul> 
    <button v-on:click="reverseMessage" >Show Message: </button>
    <h2>Counter Example</h2>
    <button v-on:click="counter++">increase</button>
    <button v-on:click="counter--">decrease</button>
    <button v-on:click="secondCounter++">Increase Second</button>
    <p>Counter: {{ counter }}</p>
    <p>Counter: {{ secondCounter }}</p>
    <p>Result: {{ result }}</p>
       <p>Result: {{ secondResult }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function(){
    return{
      msg: "Hello Imran!",
      todos:[
        {id:0, text: 'Learn Javascript'},
        {id:1, text: 'Learn Vue'},
        {id:2, text: 'Build something great'}
      ],
      counter: 0,
      secondCounter: 0
    }
  },
  methods:{
    reverseMessage: function () {
      console.log('reverseMessage Called');
      this.msg = this.msg.split('').reverse().join('');
    }
  },
  computed:{
    result: function(){
      console.log('result method Called');
      return this.counter > 5? 'Greater than 5': 'Smaller than 5';
    },
    secondResult: function(){
      console.log('secondResult method Called');
      return this.secondCounter > 5? 'Greater than 5': 'Smaller than 5';
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
