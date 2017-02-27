<template>
  <div class="header">
        <div class="email" @click="showConfirm ">
          <image style="width:64px;height:50px;" resize="contain" src="http://s3b.pstatp.com/growth/mobile_list/image/feed_ic_message_normal@3x_f2ea949f120fda7532de30660fd47455.png" ></image>
        </div>
        <div class="toutiao">
          <text style="font-size: 50px;color: #FFFFFF;">今日头条</text>
        </div>
        <div class="search">
          <image style="width:64px;height:50px;" resize="contain" src="http://s3.pstatp.com/growth/mobile_list/image/feed_ic_search_normal@3x_0f198e566fac66cbb016bc72f15d4f39.png" ></image>

        </div>
  </div>
</template>

<style scoped>
  .header{
    height:88px;
    background-color: #d43d3d;
    flex-direction: row;
  }
  .email{
    flex:0.8;
    justify-content: center;
    align-items: center;

  }
  .toutiao{
    flex:3;
    justify-content: center;
    align-items: center;
  }
  .search{
    flex:0.8;
    justify-content: center;
    align-items: center;
  }

</style>
<script>
    var modal = weex.requireModule('modal')
    export default {
        methods: {
            showConfirm  (event) {
                modal.confirm({
                    message: '需要发邮件吗，亲？',
                    okTitle:'yes',
                    cancelTitle:'no',
                    duration: 0.3
                }, function (value) {

                })
            }
        }
    }
</script>