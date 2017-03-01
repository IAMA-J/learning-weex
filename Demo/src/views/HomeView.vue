<template>
  <div class="wrapper">
    <!--<div class="header">
        <text>{{timer}}</text>
    </div>
    <div class="list-item" v-for="val in arrMsg">
      <div class="title"><text>{{val.title}}</text></div>
      <div class="img" title="val.id"> <image class="title-bg" resize="cover" :src="val.images[0]"></image></div>
    </div>-->
    <newList></newList>


  </div>
</template>

<style scoped>

</style>

<script>
    var stream = weex.requireModule('stream');
    import newList from './../components/newList.vue'
    export default {
       /* data () {
            return {
                arrMsg:[],
                vueStar: 'unknown',
                timer:'2017'
            }
        },

        methods:{
           getData:function(repo, callback){
               return stream.fetch({
                   method: 'GET',
                   type: 'json',
                   url: 'http://news-at.zhihu.com/api/4/news/latest'
               },callback)
           }
       },
        created () {
            this.getData('alibaba/weex', res => {
                let data=res.data
                let currentTime=(data.date).slice(0,4)+'-'+(data.date).slice(4,6)+'-'+(data.date).slice(6,8);
                this.timer=res.ok ? currentTime : '(network error)';
                this.arrMsg = res.ok ? data.stories : '(network error)';
            })

        }*/
       components:{
            newList
       }
    }
</script>
