<template>
  <div class="header">
      <div class="tab" @click="jump('/home')"><text   style="color:#ffffff;font-size:30px;">首页</text></div>
      <div class="tab" @click="jump('/themes')"><text  style="color:#ffffff;font-size:30px;">主题日报</text></div>
      <div class="tab" @click="jump('/about')"><text  style="color:#ffffff;font-size:30px;">关于</text></div>
  </div>
</template>

<style scoped>
    .header{
        height:120px;
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