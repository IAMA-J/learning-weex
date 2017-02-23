<template>
  <div class="rootView">
    <div class="hotImg">
        <image style="height:100px;width:130px" src="//img.alicdn.com/tps/i2/TB1FEnkIpXXXXbkaXXXVQpuFVXX-136-100.png_760x760Q30s0.jpg"></image>
    </div>
    <div class="hotMsg">
        <text>兰蔻气垫CC全新上市买一送三</text>
        <text style="color:#ff2f2f">换季必备人手一支</text>
    </div>

  </div>
</template>

<style>
    .rootView{
      height:120px;
      flex-direction: row;
    }
    .hotImg{
      flex:0.8;
      justify-content: center;
      align-items: center;
    }
    .hotMsg{
      flex:2;
      flex-direction: column;
      justify-content: center;
    }
</style>

<script>
  export default {

  }
</script>
