<template>
  <div class="layout">
      <div class="layoutmenut" >
          <div class="list" v-for="img in oneLIst">
              <image style="height:80px;width:80px" :src="img.src"></image>
              <text style="padding-top:20px">{{img.name}}</text>
          </div>
      </div>
      <div class="layoutmenut">
          <div class="list" v-for="img in twoLIst">
              <image style="height:80px;width:80px" :src="img.src"></image>
              <text style="padding-top:20px">{{img.name}}</text>
          </div>
      </div>
  </div>
</template>

<style>
    .layout{
        flex-direction: column;
        height:400px;
    }
    .layoutmenut{
        flex: 1;
        flex-direction: row;
    }
    .list{
        flex:1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>

<script>
  export default {
        data(){
            return {
                oneLIst:[
                    {src:'https://img.alicdn.com/tps/i4/TB1gWFLKFXXXXXLXXXXwu0bFXXX.png_760x760Q30s0.jpg',name:'积分乐园'},
                    {src:'https://img.alicdn.com/tps/i4/TB1nfRqKFXXXXXvXVXXwu0bFXXX.png_760x760Q30s0.jpg',name:'充值中心'},
                    {src:'https://img.alicdn.com/tps/i4/TB1D4VmKFXXXXcRXVXXwu0bFXXX.png_760x760Q30s0.jpg',name:'天猫国际'},
                    {src:'https://img.alicdn.com/tps/i4/TB1ONhvKFXXXXb_XFXXwu0bFXXX.png_760x760Q30s0.jpg',name:'聚划算'},
                    {src:'https://img.alicdn.com/tps/TB1J.e2KVXXXXafXFXXXXXXXXXX-160-160.png_760x760Q30s0.jpg',name:'天猫超市'}
                ],
                twoLIst:[
                    {src:'https://img.alicdn.com/tps/i4/TB1RRdgKFXXXXaOaXXXwu0bFXXX.png_760x760Q30s0.jpg',name:'免费试用'},
                    {src:'https://img.alicdn.com/tps/i4/TB1cs46NpXXXXadXpXXwu0bFXXX.png_760x760Q30s0.jpg',name:'尤物'},
                    {src:'https://img.alicdn.com/tps/i4/TB1jwdFKFXXXXc9XXXXwu0bFXXX.png_760x760Q30s0.jpg',name:'粉丝趴'},
                    {src:'https://img.alicdn.com/tps/i4/TB1zXW9PFXXXXXDXVXXwu0bFXXX.png_760x760Q30s0.jpg',name:'时尚全书'},
                    {src:'https://img.alicdn.com/tps/i4/TB12oXAKFXXXXcDXpXXwu0bFXXX.png_760x760Q30s0.jpg',name:'分类'}
                ]
            }
        }
  }
</script>
