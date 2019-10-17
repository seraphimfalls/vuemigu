<template>
    
        <div class="move swiper-container swiper-container-initialized swiper-container-horizontal">
            <ul class="swiper-wrapper vertical-pic clearfix">
                <li 
                    class="swiper-slide swiper-slide-active"
                    v-for="move in moves"
                    :key="move._id"
                >
                    <img v-lazy="move.imgSrc" alt="">
                    <p class="ft14">{{move.name}}</p>
                    <p class="ft13">{{move.LONG_NAME}}</p>
                </li>

                
            </ul>
        </div>
       
</template>

<script>
import Swiper from "swiper"
export default {
    data(){
        return {
            moves:[]
        }
    },
    methods:{
        // getImages( _url ){
        //     if( _url !== undefined ){
        //     let _u = _url.substring( 7 );
        //     return 'https://images.weserv.nl/?url=' + _u;
        //     }
        // }
    },
    created(){
        this.$http.get("/api/migu/100p").then(res=>{ // /api/db/in_theaters
            console.log(res.data.data.object_list)
            this.moves = res.data.data.object_list
            this.$nextTick(()=>{
                new Swiper(".move",{
                    slidesPerView: 3,
                    slidesPerGroup : 1,
                    spaceBetween: 1,
                    slidesOffsetBefore : 0,
                    // pagination: {
                    //     el: '.swiper-pagination', //.swiper-pagination
                    //     clickable: true,
                    // },
                })
            })
        })
    }
}
</script>

<style lang="scss">
    .swiper-slide{
            width: 130px;
            .ft14{
            width: 130px;
            height: 23px;
            font-size: 14px;
            padding: 0 12px;
            color: #666;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            }
            .ft13{
                width: 130px;
                height: 22px;
                font-size: 13px;
                padding: 0 12px;
                color: #999;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
</style>