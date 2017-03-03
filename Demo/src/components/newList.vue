<template>
    <list class="list" @loadmore="fetch" loadmoreoffset="10">
        <cell class="cell" v-for="val in lists">
            <div class="list-item" @click="newsDetails(val.id)">
                <div class="title"><text>{{val.title}}</text></div>
                <div class="img" title="val.id"> <image class="title-bg" resize="cover" :src="val.images[0]"></image></div>
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

    const modal = weex.requireModule('modal');
    const stream = weex.requireModule('stream');
    export default {
        data () {
            return {
                lists: [],
                arrMsg:[],
                beforeTime:'2017',
                num:0,
            }
        },
        methods: {
            fetch (event) {
                this.num++;
                if(this.num<=1){
                    return stream.fetch({
                        method: 'GET',
                        type: 'json',
                        url: 'http://news-at.zhihu.com/api/4/news/before/20170301'
                    }, res => {
                        let beforeData=res.data.stories;
                        setTimeout(() => {
                            for(let i=0;i<beforeData.length;i++){
                                this.lists.push(beforeData[i]);
                            }
                        }, 800)
                    })
                }
            },
            getData:function(callback){
                return stream.fetch({
                    method: 'GET',
                    type: 'json',
                    url: 'http://news-at.zhihu.com/api/4/news/latest'
                },callback)
            }
        },
        created () {
            this.getData( res => {
                let data=res.data
                let currentTime=data.date
                this.beforeTime=res.ok ? currentTime : '(network error)';
                this.lists = res.ok ? data.stories : '(network error)';

            })
        }
    }
</script>