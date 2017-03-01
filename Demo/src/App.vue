<template>
  <div @androidback="back">
      <topbar></topbar>

      <router-view style="flex:1"></router-view>


  </div>
</template>

<script>
    import topbar from './components/topbar.vue'

  export default {
    methods: {
      back: function () {
        this.$router.back()
      }
    },
    components:{
        topbar

    }
  }
</script>
