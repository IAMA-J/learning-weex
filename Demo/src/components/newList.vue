<template>
  <!--  <list class="list" >
        <cell class="cell" >
            <div class="header">
                <text>11111111</text>
            </div>
           &lt;!&ndash; <div class="cell">
                <div class="title"><text>{{val.title}}</text></div>
                <div class="img" title="val.id"> <image class="title-bg" resize="cover" :src="val.images[0]"></image></div>
            </div>&ndash;&gt;


        </cell>
    </list>-->

        <list class="list" @loadmore="fetch" loadmoreoffset="0">
            <cell class="cell" v-for="val in lists">
                <div class="list-item" >
                    <div class="title"><text>{{val.title}}</text></div>
                    <div class="img" title="val.id"> <image class="title-bg" resize="cover" :src="val.images[0]"></image></div>
                </div>
            </cell>
        </list>

</template>

<style scoped>
    .list{
        background-color: #ececec;
        flex-direction: column;
    }
    .header{
        flex:1;
        height:84px;
        justify-content: center;
        align-items: center;
        padding-top:6px;
        padding-bottom: 6px;
    }
    .cell{
        flex:1;
        flex-direction: row;
        height:200px;
    }
    .list-item{
        flex:1;
        flex-direction: row;
        justify-content: center;
        align-items: center;
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
    }
    .img{
        flex:1;
    }
    .title-bg{
        height:150px;
        width:150px;
    }
</style>
<script>
    const modal = weex.requireModule('modal');
    const stream = weex.requireModule('stream');
    export default {
        data () {
            return {
                lists: [],
                arrMsg:[],
                beforeTime:'2017'
            }
        },
        methods: {
            fetch (event) {
                modal.toast({ message:this.beforeTime.slice(4), duration: 1 })
                setTimeout(() => {
                    this.beforeTime=this.beforeTime
                }, 800)
            },
            getData:function(callback){
                return stream.fetch({
                    method: 'GET',
                    type: 'json',
                    url: 'http://news-at.zhihu.com/api/4/news/latest'
                },callback)
            }
        },created () {
            this.getData( res => {
                let data=res.data
                let currentTime=data.date
                this.beforeTime=res.ok ? currentTime : '(network error)';
                this.lists = res.ok ? data.stories : '(network error)';
            })

        }
    }
</script>