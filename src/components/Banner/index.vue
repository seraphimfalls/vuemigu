<template>
        <div class="banner swiper-container">
            <div class="swiper-wrapper">
                <div 
                    class="swiper-slide swiper-slide-active"
                    v-for="banner in banners"
                    :key="banner._id"
                >
                    <img :src="banner.imgSrc" alt="">
                    
                </div>    
            </div>
            <div class="swiper-pagination"></div>
        </div>
</template>

<script>
import Swiper from "swiper"
export default {
    data(){
        return {
            banners:[]
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
        this.$http.get("/api/migu/yingdanbanners").then(res=>{ ///api/db/in_theaters
            console.log(res.data.data.object_list)
            this.banners = res.data.data.object_list
            this.$nextTick(()=>{
                new Swiper(".banner",{
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    autoplay: {
                        delay: 1000,
                        stopOnLastSlide: false,
                        disableOnInteraction: true,
                        }
                })
            })
        })
    }
}
</script>

<style lang="scss">
.banner{
    margin-bottom: 10px;
}
    .swiper-slide{
            width: 130px;
            img{
                width: 100%;
                height: 230px;
            }
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
    .swiper-pagination{
        text-align: right;
        margin-right: 10px;
        
    }
</style>