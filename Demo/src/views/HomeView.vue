<template>
  <div class="wrapper">
    <newList></newList>
  </div>
</template>

<style scoped>

</style>

<script>
    var stream = weex.requireModule('stream');
    import newList from './../components/newList.vue'
    export default {
       components:{
            newList
       }
    }
</script>
