<template>
  <div class="homepage">
   ================================ <br/>   
   <h3>{{ title }}</h3>
   <div class="demo"></div>
   <div class="demo"></div>
   <div class="demo"></div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data: function() {
    return {
      title: "Welcome to the home-portal Imran!"
    };
  },
  methods: {},
  computed: {},
  watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homepage h3 {
  color: blue;
}
</style>
