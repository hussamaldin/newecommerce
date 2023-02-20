<template>
  <div class="h-[1500px] w-full">
    <Header />
    <div class="w-full flex flex-row p-4 justify-around my-[40px] h-[90px]">
      <div class="flex flex-row justify-center p-2 w-[30%]">
        <div class="p-2 flex items-center justify-center"><img :src="img1" class="w-[90px]"></div>
        <div class="flex flex-col items-center justify-center">
          <div>Always available</div>
          <div>24/7 call center available</div>
        </div>
      </div>
            <div class="flex flex-row justify-center p-2 w-[30%] border-x-2 border-yellow-200">
        <div class="p-2 flex items-center justify-center"><img :src="img2" class="w-[90px]"></div>
        <div class="flex flex-col items-center justify-center">
          <div>Always available</div>
          <div>24/7 call center available</div>
        </div>
      </div>
            <div class="flex flex-row justify-center p-2 w-[30%]">
        <div class="p-2 flex items-center justify-center"><img :src="img3" class="w-[90px]"></div>
        <div class="flex flex-col items-center justify-center">
          <div>Always available</div>
          <div>24/7 call center available</div>
        </div>
      </div>
    </div>

<Tabnavbar />

<Slider />



  </div>
</template>

<script>

import Header from '../components/Header.vue'
import Slider from '../components/Slider.vue'
import Tabnavbar from '../components/Tabnavbar.vue'
export default {
      components:{
        
        Header,
        Slider,
        Tabnavbar
    },
    data(){
      return{
        img1:require('../assets/ship.svg'),
        img2:require('../assets/return.svg'),
        img3:require('../assets/support.svg'),
        a1:require('../assets/a1.jpg'),
        a2:require('../assets/a2.jpg'),
      }
    },
    created() {
      console.log('token')
      localStorage.setItem('token', 'true')
      console.log(localStorage.getItem('token'))
    },
};
</script>

<style></style>
