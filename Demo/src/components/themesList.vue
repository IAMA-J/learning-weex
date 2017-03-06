<template>
    <list class="list" loadmoreoffset="10">
        <cell class="cell" v-for="val in lists">
            <div class="list-item" @click="themeView(val.id)">
                <div class="img" ><image class="title-bg" resize="cover" :src="val.thumbnail"></image></div>
                <div class="title"><text>{{val.name}}</text></div>
                <div class="desc"><text>{{val.description}}</text></div>
            </div>
        </cell>
    </list>


</template>

<style scoped>
    .list{
        background-color: #ececec;

    }
    .cell{
       /* cell标签不能使用flex,会导致安卓出现高度压缩的，所以想让每一行有高度，则给cell下面的div定高度。*/
    }
    .list-item{
        height:360px;
        background-color: #FFFFFF;
        margin-top:12px;
        margin-bottom:12px;
    }
    .title{
        padding-top:12px;
        padding-bottom: 12px;
        align-items: center;
    }
    .desc{
        padding-left:25px;
    }
    .img{
        height:220px;
    }
    .title-bg{
        width:750px;
        height:220px;
    }
</style>
<script>

    const modal = weex.requireModule('modal');
    const stream = weex.requireModule('stream');
    export default {
        data () {
            return {
                lists: [],

            }
        },
        methods: {
            getData:function(callback){
                return stream.fetch({
                    method: 'GET',
                    type: 'json',
                    url: 'http://news-at.zhihu.com/api/4/themes'
                },callback)
            }
        },
        created () {
            this.getData( res => {
                let data=res.data
                this.lists = res.ok ? data.others : '(network error)';

            })
        }
    }
</script>