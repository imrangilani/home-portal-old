<template>
  <div class="row">
    <Quote v-for="quote in quotes" :key="quote">{{ quote }}</Quote>
  </div>
</template>
<script>
import Quote from "./Quote";
export default {
  props: ["quotes"],
  components: {
    Quote
  }
};
</script>
<style scoped>
</style>

