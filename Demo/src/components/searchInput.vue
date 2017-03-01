<template>
  <div class="header">
        <input class="searchInput" ref="inputVal" type="text"  autofocus="true" placeholder="请输入搜索关键词" />
        <div class="hotWord">
          <div class="hot" v-for="eve in arr">
            <text @click="choose(eve.word)" style="background-color:#f5f5f5;color:#363636;padding-top:10px;padding-bottom:10px;padding-left:5px;padding-right:5px">{{eve.word}}</text>
          </div>




        </div>
    <text>{{a}}</text>

  </div>
</template>

<style scoped>
  .searchInput{
    padding-left:40px;
    padding-top:5px;
    padding-bottom: 5px;
    border:none;
    border-width: 5px;
    border-style: solid;
    border-color: #999999;
    justify-content: center;
    align-items: center;
  }
  .hotWord{
    flex-direction: column;
  }
  .hot{
    padding-top:20px;
    padding-bottom:20px;
    flex:5;
    justify-content: center;
    align-items: center;
  }
</style>
<script>
    const modal = weex.requireModule('modal')
  export default{
      data(){
          return {
              arr:[
                  {word:'金毛走丢报警求助'},
                  {word:'中1.3亿分闺蜜'},
                  {word:'学区房买1200万'},
                 {word:'神兽踩空掉千岛湖'},
                 {word:'游览车糟黑熊围堵'},

              ],
              msg:'111'
          }
      },
      methods:{
          choose:function (eve){
              /*console.log(event.target.innerText)*/
            this.$refs.inputVal.value=eve;
              modal.toast({
                  message: eve,
                  duration: 0.8
              })
          }
      }
  }
</script>
