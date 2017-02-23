<template>
    <div class="container">
        <div class="cov-menu">
            <text>--</text>
            <text>--</text>
        </div>
        <div class="cov-search">
            <div class="search-box">
                <text style="color:#999999">搜索产品和店铺</text>
            </div>
        </div>
        <div class="cov-login">
            <text style="color:#FFFFFF">登录</text>
        </div>
    </div>
</template>

<style>
    .container{
        font-family: Hiragino Sans GB,Helvetica,Arial,STHeiti,WenQuanYi Micro Hei,sans-serif;
        flex-direction:row;
        height:100px;
        background-color: #f32d2d;
        font-size: 20px;
    }
    .cov-menu{
        flex:0.2;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }
    .cov-search{
        flex:1;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .search-box{
        flex:1;
        height:80px;
        border-width:1px;
        border-style: solid;
        border-color: #FFFFFF;
        border-radius: 15px;
        justify-content: center;
        align-items: center;
        background-color: #FFFFFF;
    }
    .cov-login{
        flex:0.2;
        justify-content: center;
        align-items: center;
    }

</style>

<script>

    export default {
        methods: {

        }
    };

</script>
