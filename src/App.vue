<template>
<div class="">
<NavbarHeader/>
<div class="mt-[100px]">
<router-view />
</div>
  
</div>
  
</template>
<script>
import NavbarHeader from '../src/components/NavbarHeader.vue'
export default {
  components:{NavbarHeader},
  data(){
    return{

    }
  }
}
</script>
<style>

</style>
