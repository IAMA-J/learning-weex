<template>
  <div @androidback="back">
    <topbar></topbar>
    <topmenu></topmenu>
    <router-view style="flex:1"></router-view>
  </div>
</template>

<script>
  import topbar from './components/topbar.vue'
  import topmenu from './components/topmenu.vue'
  export default {
    methods: {
      back: function () {
        this.$router.back()
      }
    },
    components:{
        topbar,topmenu
    }
  }
</script>
