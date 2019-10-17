<template>
    
        <div class="yingshi swiper-container swiper-container-initialized swiper-container-horizontal">
            <ul class="swiper-wrapper vertical-pic clearfix">
                <li 
                    class="swiper-slide swiper-slide-active"
                    v-for="yingshi in yingshis"
                    :key="yingshi._id"
                >
                    <img v-lazy="yingshi.imgSrc" alt="">
                    <p class="ft14">{{yingshi.name}}</p>
                    <p class="ft13">{{yingshi.LONG_NAME}}</p>
                </li>

                
            </ul>
        </div>
       
</template>

<script>
import Swiper from "swiper"
export default {
    data(){
        return {
            yingshis:[]
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
        this.$http.get("/api/migu/yingshi").then(res=>{ // /api/db/in_theaters
            console.log(res.data.data.object_list)
            this.yingshis = res.data.data.object_list
            this.$nextTick(()=>{
                new Swiper(".yingshi",{
                    slidesPerView: 3,
                    slidesPerGroup : 1,
                    spaceBetween: 1,
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
            }
            .ft13{
                width: 130px;
                height: 22px;
                font-size: 13px;
                padding: 0 12px;
                color: #999;
            }
        }
</style>