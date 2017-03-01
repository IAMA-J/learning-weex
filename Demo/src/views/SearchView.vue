<template>
  <div>
       <scroller>
         <searchTop></searchTop>
         <searchInput></searchInput>

       </scroller>
  </div>
</template>

<style scoped>

</style>

<script>
  import searchTop from './../components/searchTop.vue'
  import searchInput from './../components/searchInput.vue'
  export default {
      components:{
          searchTop,searchInput
      }
  }
</script>
