<template>
    
        <div class="manwei swiper-container swiper-container-initialized swiper-container-horizontal">
            <ul class="swiper-wrapper vertical-pic clearfix">
                <li 
                    class="swiper-slide swiper-slide-active"
                    v-for="manwei in manweis"
                    :key="manwei._id"
                >
                    <img v-lazy="manwei.imgSrcV" alt="">
                    <p class="ft14">{{manwei.name}}</p>
                    <p class="ft13">{{manwei.LONG_NAME}}</p>
                </li>

                
            </ul>
        </div>
       
</template>

<script>
import Swiper from "swiper"
export default {
    data(){
        return {
            manweis:[]
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
        this.$http.get("/api/migu/manwei").then(res=>{ // /api/db/in_theaters
            console.log(res.data.data.object_list)
            this.manweis = res.data.data.object_list
            this.$nextTick(()=>{
                new Swiper(".manwei",{
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