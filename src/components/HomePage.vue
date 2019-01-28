<template>
  <div class="homepage">================================
    <br>
    <h3>{{ title }} {{ name }}</h3>
    <div class="demo" @click="attachRed = !attachRed" :class="{red:attachRed}"></div>
    <div class="demo" :class="divClasses"></div>
    <div class="demo" :class="color"></div>
    <input type="text" v-model="color">
    <br>
    <button @click="resetName">Reset Name</button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
      // required: true,
      //default: 'Huma Gilani' (For Primitives, string, boolean etc)

      //type:Array or Object (not primitive)
      //default: function(){return{name: 'Huma Gilani'}}
    }
  },
  data: function() {
    return {
      title: "Welcome to the home-portal ",
      attachRed: false,
      attachGreen: false,
      color: "green"
    };
  },
  methods: {
    resetName: function() {
      this.name = "Your Name";
      this.$emit("nameWasReset", this.name);
    }
  },
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
