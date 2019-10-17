<template>
    <div class="yingping">
        <div 
            class="yingpingbox"
            v-for="yingping in yingpings"
            :key="yingping.id"
        >
            <img width="100%" v-lazy="yingping.picList[0].imgSrc" alt="">
            <div class="touming"></div>
            <span class="ypname">{{yingping.name}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            yingpings:[]
        }
    },
    created(){
        this.$http.get("/api/migu/yingping").then(res=>{ ///api/db/in_theaters
            console.log(res.data.data.object_list)
            this.yingpings = res.data.data.object_list
            
        })
    }
}
</script>

<style lang="scss">
    .yingpingbox{
        position: relative;
        margin-bottom: 7px;
        .touming{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 50;
            background: rgba(0, 0, 0, 0.5);
        }
        .ypname{
            position: absolute;
            top: 50%;
            left: 35px;
            right: 35px;
            z-index: 100;
            margin-top: -1.2em;
            font-size: 16px!important;
            text-align: center;
            font-size: 14px;
            color: #fff;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            font-weight: bold;
        }
    }
</style>