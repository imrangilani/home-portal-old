<template>
  <div class="quoteAppContainer">
    <QuoteGrid :quotes="quotes"></QuoteGrid>
  </div>
</template>
<script>
import QuoteGrid from "./QuoteGrid";
export default {
  name: "QuoteApp",
  components: {
    QuoteGrid
  },
  data: function() {
    return {
      quotes: ["You make choices and your choices make you", "You only lose when you give up"],
      maxQuotes: 10
    };
  }
};
</script>
<style scoped>
</style>


