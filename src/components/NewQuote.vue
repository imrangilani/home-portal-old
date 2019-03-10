<template>
    <div>
        <form>
        <div>
        <label>New Quote</label>
        <textarea v-model="quote"></textarea>
        </div>
        <div>
            <button @click.prevent="createNew">Add quote</button>
        </div>
        </form>
    </div>    
</template>
<script>
export default {
    name: "newQuote",
    data: function(){
        return{
            quote: ''
        }
    },
    methods: {
        createNew: function(){

        }
    }
    
}
</script>
<style scoped>

</style>


