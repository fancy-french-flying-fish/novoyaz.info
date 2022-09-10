<template>
    <form autocomplete="on">
        <input class=" input is-large is-rounded" type="text" v-model="query" placeholder="Поиск"></input>
    </form>
</template>
<script>
export default {
  name: 'SearchForm',
  data(){
    return {
      query:"",
    }
  },
  watch:{
    query(){
      this.$emit('searchquery', this.query)
    }
  },

}
</script>
