<template lang="">
    <div class="my-[100px] bg-gray-200">

    <div class="w-full flex flex-row flex-wrap justify-start p-[20px]">
        <div @click="gotoproduct(ca.id)" v-for="ca in json" :key="ca.id" class="border-1 m-4 w-[22%] h-[400px] border-gray-200 flex flex-col bg-white p-4">
    <div class="w-full h-[10%] flex flex-col">
    <div><a><span class="text-gray-700 text-xl font-bold">{{ca.Categoryname}}</span></a></div>
    </div>
    <div class="w-full h-[80%]"><img :src="img" class="w-full h-full"></div>
    <div class="h-[10%] py-3"><a><span class="hover:text-blue-500 cursor-pointer">Shop now</span></a></div>
    </div>


    </div>

</div>
</template>
<script>
import jison from "../assets/Category.json"
export default {
    data(){
      return{
json:jison,
img:require('../assets/a1.jpg')
      }
    },
    computed:{

    },
    methods :{
      gotoproduct(val){
       this.$router.push({path: `/products/${val}`, params: { id: 1 }});
      },
    }
}
</script>
<style lang="">
    
</style>