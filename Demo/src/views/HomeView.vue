<template>
  <div>
    <topbar></topbar>
    <topmenu></topmenu>
  </div>
</template>

<style scoped>

</style>

<script>
  import topbar from './../components/topbar.vue'
  import topmenu from './../components/topmenu.vue'
  export default {
      components:{
          topbar, topmenu
      }
  }
</script>
