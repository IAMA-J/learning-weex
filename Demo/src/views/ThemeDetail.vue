<template>

  <list class="list">
    <cell class="cell" v-for="val in lists">
      <div class="list-item" @click="tnewsDetails(val.id)" >
        <div class="img" v-if="val.images"> <image class="title-bg" resize="cover" :src="val.images[0]"></image></div>
        <div class="title"><text>{{val.title}}</text></div>
      </div>
    </cell>

  </list>
</template>

<style scoped>
  .list{
    background-color: #ececec;

  }
  .cell{
    /*
    cell标签不能使用flex,会导致安卓出现高度压缩的，所以想让每一行有高度，则给cell下面的div定高度。
    */
  }
  .list-item{
    height:200px;
    flex-direction: row;
    padding-top:12px;
    padding-bottom: 12px;
    background-color: #FFFFFF;
    margin-top:6px;
    margin-bottom:6px;
    padding-left:12px;
    padding-right: 6px;
  }
  .title{
    flex:4;
    justify-content: center;
    padding-left:12px;
  }
  .img{
    flex:1;
    height:200px;
    justify-content: center;
    align-items: center;
  }
  .title-bg{
    height:150px;
    width:150px;
  }
</style>

<script>
    const stream = weex.requireModule('stream');
    export default {
        data(){
            return {
                msg:'',
                lists:[]
            }
        },
        methods:{
            getData:function(callback){
                var id=this.$route.params.id;
                return stream.fetch({
                    method: 'GET',
                    type: 'json',
                    url: 'http://news-at.zhihu.com/api/4/theme/'+id
                },callback)
            }
        },
        created(){
            this.getData( res => {
                let data=res.data
                this.msg=res.ok ? data.stories : '(network error)';
               /* this.imgUrl=res.ok ? data.image : '(network error)';
                this.title=res.ok ? data.title: '(network error)';*/
               this.lists=res.ok ? data.stories: '(network error)';

            })
        }
    }
</script>
