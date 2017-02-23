<template>
    <div class="container">
        <scroller>
            <navbar></navbar>
            <sliderimg></sliderimg>
            <layout></layout>
            <tianmaohot></tianmaohot>
            <modulelayout></modulelayout>
        </scroller>

    </div>
</template>

<style>
    .container{
        font-family: Hiragino Sans GB,Helvetica,Arial,STHeiti,WenQuanYi Micro Hei,sans-serif;

    }


</style>

<script>
import navbar from './pagesVue/nav.vue'
import sliderimg from './pagesVue/slider.vue'
import layout   from './pagesVue/layout.vue'
import tianmaohot from './pagesVue/tianmaohot.vue'
import modulelayout from './pagesVue/modulelayout.vue'
    export default {
       components:{
           navbar,
           sliderimg,
           layout,
           tianmaohot,
           modulelayout
       }
    };

</script>
