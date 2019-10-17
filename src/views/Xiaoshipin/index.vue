<template>
    <div class="xiaoshipin">
        <div 
            class="xspbox"
            v-for="shipin in shipins"
            :key="shipin.id"
        >
            <img width="100%" v-lazy="shipin.picList[0].imgSrc" alt="">
            <span class="imgname">{{shipin.name}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            shipins:[]
        }
    },
    created(){
        this.$http.get("/api/migu/jingcai").then(res=>{ ///api/db/in_theaters
            console.log(res.data.data.object_list)
            this.shipins = res.data.data.object_list
            
        })
    }
}
</script>

<style lang="scss">
    .xspbox{
        position: relative;
        margin-bottom: 5px;
        .imgname{
            position: absolute;
            left: 12px;
            right: 12px;
            bottom: 12px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color: #fff;
    }
    }
</style>