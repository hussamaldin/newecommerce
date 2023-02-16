<template>
  <swiper
    :slidesPerView="1"
    :centeredSlides="false"
    :slidesPerGroupSkip="1"
    :grabCursor="true"
    :keyboard="{
      enabled: true,
    }"
    :breakpoints="{
      '769': {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
            '360': {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    }"
  
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper w-[100%] h-[400px] scrollbar-hide"
  >
    <swiper-slide
      ><img :src="img1"
    /></swiper-slide>
    <swiper-slide
      ><img :src="img2"
    /></swiper-slide>
    <swiper-slide
      ><img :src="img3"
    /></swiper-slide>
    <swiper-slide
      ><img :src="img4"
    /></swiper-slide>
    <swiper-slide
      ><img :src="img5"
    /></swiper-slide>
    <swiper-slide
      ><img :src="img1"
    /></swiper-slide>
    <swiper-slide
      ><img :src="img2"
    /></swiper-slide>
    <swiper-slide
      ><img :src="img3"
    /></swiper-slide>
    <swiper-slide
      ><img :src="img4"
    /></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Keyboard, Navigation, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Keyboard, Navigation, Pagination],
    };
  },
  data(){
    return{
      img1:require('../assets/a1.jpg'),
img2:require('../assets/a2.jpg'),
img3:require('../assets/a3.jpg'),
img4:require('../assets/a4.jpg'),
img5:require('../assets/a5.jpg'),
    }
  }
};
</script>
<style>

.swiper-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.swiper-slide img {
  display: block;
  width: 100%;
}


</style>