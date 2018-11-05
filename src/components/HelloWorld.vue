<template>
  <div class="hello">
    <h1 v-if="msg">{{msg}}</h1>
    <ul>
    <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
    </ul> 
    <button v-on:click="reverseMessage" >Show Message</button>
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
      ]
    }
  },
  methods:{
    reverseMessage: function () {
      this.msg = this.msg.split('').reverse().join('');
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
