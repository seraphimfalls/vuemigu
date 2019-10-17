<template>
    <section 
        class="listbox"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
    >
        <ListBanner></ListBanner>
        <div>
            <div
                class="list_content"
                v-for="good in goods"
                :key="good._id"
            >
                <div class="list_img">
                    <img :src="good.lowResolutionH" alt="">
                </div>
                <mt-cell>
                    <div class="list_sub">
                        <p class="li_sub_dir">导演：{{good.director}}</p>
                        <p class="li_sub_act">演员：{{good.actor}}</p>  
                        <p class="li_sub_store">评分：{{good.score}} 分</p>
                        <p class="li_sub_time">价格：{{good.price}} ￥</p>            
                    </div>
                    <img class="li_small_img" slot="icon" :src="good.lowResolutionV" width="24" height="24">
                </mt-cell>
                <div class="list_tit">
                    <span class="li_sub_tit">{{good.filmName}}</span>
                    <mt-button @click="addGoodsCart(good)" class="li_sub_btn" type="danger" size="small">购票</mt-button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Toast } from 'mint-ui';
import Swiper from "swiper"
import ListBanner from "@/components/List_banner"
import {mapActions, mapState, mapMutations, mapGetters} from "vuex"

export default {
    data(){
        return {
            goods : [],
            page : 1,
            limit : 10,
            loading : false,
            hasMore : true,
        }
    },
    methods : {
        loadMore(){
            if(!this.hasMore){              //无更多数据
                Toast({
                    message: '已到底部',
                    position: 'bottom',         //弹出框
                    duration: 3000,
                    iconClass: 'fa fa-exclamation-circle',
                });

                this.loading = true        //关闭无限滚动
                return false;
            }
            this.getGoods()
        },
        getGoods(){
            let instance = Toast({
                message: '正在加载',
                position: 'bottom',         //弹出框
                duration: 3000,
                iconClass: 'fa fa-spinner fa-pulse',
            });

            let {page, limit} = this;
            this.loading = true;
            this.$http.get("/api/migu/home/cars", {
                params : {
                    page,
                    limit,
                }
            }).then((res) => {
                this.goods = this.goods.concat(res.data.data.object_list)
                this.loading = false 
                instance.close();
                console.log(res.data.data.total)
                if(this.limit * this.page >= res.data.data.total){
                    
                    this.hasMore = false    //无更多数据
                    return false;
                }
                this.page++
            })
        },
        ...mapActions({
            addGoodsCart : 'addGoodsCart'
        }),
    },
    components : {
        ListBanner,
    },
    created(){
        
    },
}
</script>

<style lang="scss">
    .listbox{
        margin-bottom: 56px;
        .list_content{
            padding: 8px 10px;
            border-bottom: 1px solid #ccc;
            .list_img{
                width: 100%;
                height: 100%;
                margin-bottom: 5px;
            }
            .mint-cell-wrapper{
                padding: 0;
                .mint-cell-title{
                    float: left;
                    flex: 0;
                }
                .mint-cell-value{
                    margin-left: 15px;
                    float: left;
                    line-height: 40px;
                    .li_sub_dir{
                        width: 820px;
                        font-size: 14px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .li_sub_act{
                        width: 820px;
                        font-size: 14px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .li_sub_store{
                        color: #faae21
                    }
                    .li_sub_time{
                        color: #f03d3d
                    }
                }
                
            }
            .li_small_img{
                width: 100px;
                height: 140px;
            }
            .list_tit{
                width: 100%;
                height: 40px;
                line-height: 40px;
                .li_sub_tit{
                    font-size: 20px;
                    color: #333;
                    font-weight: bold;
                    float: left;
                }
                .li_sub_btn{
                    float: right;
                    margin-right: 10px;
                }
                .mint-button{
                        padding: 0 30px;
                    }
            }
        }
    }
</style>