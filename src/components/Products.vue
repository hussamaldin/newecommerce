<template>
    <div>
        <div>Filter</div>
        <div>Result</div>
        <div class="flex flex-row justify-start">
    <div v-for="item in show" :key="item.id" class=" border-2 w-[22%] m-4 border-gray-200 rounded-lg flex flex-col">
    <div class="relative w-full h-[70%] group">
    <img :src="img" class="w-full h-full">
                <div class="absolute opacity-0 group-hover:opacity-100 duration-500 bg-gray-700 bg-opacity-70 top-0 left-0 w-full h-full flex justify-center items-center">
        <div class="flex flex-row">
        <div class="w-[40px] hover:bg-yellow-400 duration-500 cursor-pointer h-[40px] flex justify-center items-center mx-2 bg-white rounded-full"><a class=""><img :src="icon" class="w-[30px] text-gray-400"></a></div>
        <div class="w-[40px] hover:bg-yellow-400 duration-500 cursor-pointer h-[40px] flex justify-center items-center mx-2 bg-white rounded-full"><a class=""><span><img :src="search" class="w-[30px] text-gray-400"></span></a></div>
        <div class="w-[40px] hover:bg-yellow-400 duration-500 cursor-pointer h-[40px] flex justify-center items-center  mx-2 bg-white rounded-full"><a class=""><span><img :src="like" class="w-[30px] text-gray-400"></span></a></div>
        </div>
        </div>
    </div>
    <div class="w-full h-[30%] p-4 flex flex-col">
    <vue-stars class="h-[30px] z-50"
:active-color="yellow"
:inactive-color="yellow"
:shadow-color="yellow"
:hover-color="red"
:max="5"
:value="4"
:readonly="false"
:char="'★'"
:inactive-char="4"
/>
    <div><a><span class="text-gray-600 text-xl">{{item.name}}</span></a></div>
    <div><a><span>
    <i class="fa fa-star text-yellow-500"></i>
    <i class="fa fa-star text-yellow-500"></i>
    <i class="fa fa-star text-yellow-500"></i>
    <i class="fa fa-star text-yellow-500"></i>
    <i class="fa fa-star text-yellow-500"></i>
    </span></a></div>
    <div><span>{{item.price}}</span></div>
    </div>
    </div>
        </div>
    </div>
</template>
<script>
import items from "../assets/item.json"
export default {
    data(){
        return{
            item:items,
            id:this.$route.params.id,
            show:[],
            img:require('../assets/a1.jpg'),
            icon:require('../assets/icon.svg'),
            like:require('../assets/like.png'),
            search:require('../assets/search.png')
        }
    },
    created() {
this.show = this.item.filter(product => product.ca_id === this.id)
            console.log(this.show)
    },
    computed:{
    }
}
</script>
<style lang="">
    
</style>