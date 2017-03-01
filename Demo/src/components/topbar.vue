<template>
  <div class="header">
      <div class="tab"><text @click="jump('/home')"  style="color:#ffffff;font-size:30px;">首页</text></div>
      <div class="tab"><text @click="jump('/themes')" style="color:#ffffff;font-size:30px;">主题日报</text></div>
      <div class="tab"><text @click="jump('/about')" style="color:#ffffff;font-size:30px;">关于</text></div>
  </div>
</template>

<style scoped>
  .header{
    height:74px;
    background-color: #252e39;
    flex-direction: row;
  }

    .tab{
        flex: 1;
        justify-content:center;
        align-items: center;
    }
</style>
<script>
    export default {
        methods: {

        }
    }
</script>