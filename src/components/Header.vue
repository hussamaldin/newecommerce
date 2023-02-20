<template>
<div class="w-full my-[100px]">
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"

    :modules="modules"
    class="mySwiper w-[100%] h-[400px]"
  >
    <swiper-slide><img :src="img1"/></swiper-slide>
    <swiper-slide><img :src="img2"/></swiper-slide><swiper-slide><img :src="img3"/></swiper-slide>
    <swiper-slide><img :src="img4"/></swiper-slide><swiper-slide><img :src="img5"/></swiper-slide>
    <swiper-slide><img :src="img1"/></swiper-slide><swiper-slide><img :src="img2"/></swiper-slide>
    <swiper-slide><img :src="img3"/></swiper-slide><swiper-slide><img :src="img4"/></swiper-slide>
  </swiper>
  </div>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';


  // import required modules
  import { Autoplay, Pagination,  } from 'swiper';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, ],
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
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
