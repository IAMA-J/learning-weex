<template>
  <scroller class="content">
    <div class="header">
      <image :src="imgUrl" style="height:600px;width: 690px;"></image>
      <div class="title"><text>{{title}}</text></div>

    </div>
    <div class="body">
      <text>{{msg}}</text>
    </div>

  </scroller>
</template>

<style scoped>
  .content{
    background-color: #f5f5f5;
  }
  .header{
    margin-top:20px;
    margin-left:30px;
    margin-right:30px;
    background-color: #FFFFFF;
  }
  .title{
    padding-top:40px;
    padding-bottom: 40px;
  }
  .body{
    margin-top:20px;
    margin-left:30px;
    margin-right:30px;
    background-color: #FFFFFF;
  }
</style>

<script>
    const stream = weex.requireModule('stream');
    export default {
        data(){
           return {
               msg:'12334',
               imgUrl:'',
               title:''
           }
        },
        methods:{
            getData:function(callback){
                var id=this.$route.params.id;
                return stream.fetch({
                    method: 'GET',
                    type: 'json',
                    url: 'http://news-at.zhihu.com/api/4/news/'+id
                },callback)
            }
        },
        created(){
            this.getData( res => {
                let data=res.data
                this.msg=res.ok ? res : '(network error)';
                this.imgUrl=res.ok ? data.theme.thumbnail : '(network error)';
                this.title=res.ok ? data.title: '(network error)';

            })
        }
    }
</script>
