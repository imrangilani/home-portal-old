<template>
  <div class="homepage">
   ================================ <br/>   
   <h3>{{ title }}</h3>
   <div class="demo" @click="attachRed = !attachRed" :class="{red:attachRed}">
   </div>
   <div class="demo" :class="divClasses"></div>
   <div class="demo" :class="color"></div>
   <input type="text" v-model="color">
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data: function() {
    return {
      title: "Welcome to the home-portal Imran!",
      attachRed: false,
      attachGreen: false,
      color: "green"
    };
  },
  methods: {},
  computed: {
    divClasses: function() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      };
    }
  },
  watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homepage h3 {
  color: blue;
}
.demo {
  width: 100px;
  height: 100px;
  background-color: grey;
  display: inline-block;
  margin: 10px;
}
.red {
  background-color: red;
}
.green {
  background-color: green;
}
.blue {
  background-color: blue;
}
</style>
