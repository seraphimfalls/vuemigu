<template>
    <div class="yingdan">
        <div class="bannertu">
            <banner></banner>
        </div>
        <div class="list">
            <div class="moviename">影视100个经典角色</div>
            <div class="movieall">
                <move></move>
            </div>
        </div>
        <div class="list">
            <div class="moviename">影视100人</div>
            <div class="movieall">
                <yingshi></yingshi>
            </div>
        </div>
        <div class="list">
            <div class="moviename">她们说：女性导演作品推荐</div>
            <div class="movieall">
                <tamen></tamen>
            </div>
        </div>
        <div class="list">
            <div class="moviename">漫威大宇宙集结</div>
            <div class="movieall">
                <manwei></manwei>
            </div>
        </div>
    </div>
</template>

<script>
import move from '@/components/Move'
import yingshi from '@/components/Yingshi'
import manwei from '@/components/Manwei'
import tamen from '@/components/Tamen'
import banner from '@/components/Banner'
export default {
    name:"yingdan",
    components:{
        move,banner,yingshi,tamen,manwei
    },
    data(){
        return {

        }
    }
}
</script>

<style lang="scss">
body{
    background: #f1f1f1;
}
    
    .list{
        height: 276px;
        
        background: #fff;
        margin: 0px 0px 10px;
        .moviename{
            height: 45px;
            width: 100%;
            background: #fff;
            line-height: 45px;
            font-size: 16px;
            color: #666;
            padding: 0 12px 0 8px;
        }
        img{
            height: 175px;
            width: 130px;
        }
        
    }
</style>