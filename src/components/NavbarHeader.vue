<template>
  <div class="w-full bg-white shadow-xl z-50 h-[100px] fixed top-0 border-b border-gray-200">
      <div class="w-full flex flex-col">
      <div class="flex flex-row justify-between">
          <div class="w-[10%] p-4 flex flex-row justify-between">
              <div><a><i class="fa fa-search text-xl"></i></a></div>
              <div><a><i class="fa fa-heart-o text-xl"></i></a></div>
          </div>
          <div class="flex justify-center  w-[80%]">
              <div class="flex justify-center items-center"><img :src="img"></div>
          </div>
          <div class="w-[10%] p-4 flex items-center flex-row justify-between">
              <div><a><i class="fa fa-user-o text-xl"></i></a></div>
              <div><a><img :src="icon" class="w-[20px]"></a></div>
          </div>
      </div>
                <div class="flex justify-center items-center">
                  <ul class="flex items-center flex-row">
      <li>
        <a href="#" class="block px-4 text-gray-700 text-lg hover:text-blue-500">Home</a>
      </li>
      <li>
        <a href="#" class="block px-4 text-gray-700 text-lg hover:text-blue-500">Shop</a>
      </li>
      <li>
        <a href="#" class="block px-4 text-gray-700 text-lg hover:text-blue-500">Blog</a>
      </li>
            <li>
        <a href="#" class="block px-4 text-gray-700 text-lg hover:text-blue-500">About</a>
      </li>
                  <li>
        <a href="#" class="block px-4 text-gray-700 text-lg hover:text-blue-500">FAQ</a>
      </li>
                  <li>
        <a href="#" class="block px-4 text-gray-700 text-lg hover:text-blue-500">Contact</a>
      </li>
    </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        img:require('../assets/logo.png'),
        icon:require('../assets/icon.svg'),
    }
},
methods: {

},
}
</script>

<style>

</style>