<template>
    <div class="header">
      <div class="btnBach" @click="jump('/home')"><text style="color:#FFFFFF;font-size:50px"><</text></div>
      <div class="searchMsg"><text style="color:#FFFFFF;font-size:50px">搜索</text></div>
      <div class="btnBach"></div>
    </div>
</template>

<style scoped>
  .header{
    flex-direction:row;
    height:88px;
    background-color: #d43d3d;
  }
  .btnBach{
    flex:0.2;
    justify-content: center;
    align-items: center;
  }
  .searchMsg{
    flex:2;
    justify-content: center;
    align-items: center;
  }
</style>
