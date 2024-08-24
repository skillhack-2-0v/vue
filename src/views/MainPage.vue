<script setup>
import { RouterLink } from "vue-router";

</script>
<template>
  <main
    class="text-white font-bold h-screen flex flex-col md:flex-row items-center justify-center bg-[url('../assets/img/main_bg.png')] overflow-hidden"
  >
    <!-- <div class="text-xl sm:text-3xl lg:text-4xl pl-10 flex items-center rounded-4xl">
      <span class=" pixel-font leading-relaxed text-wrap text-orange/90"
        >КАЧАЙ СВОЕГО ГЕРОЯ - КАЧАЙ СВОИ СИЛЫ</span
      >
    </div> -->
    <!-- <img src="@/assets/img/image.png" alt="" class=" md:w-1/2" style="opacity: 0.7;" /> -->
    <div class=" space-y-20 bg-black/40 h-full">
      <div class="main-img  h-full flex justify-between w-full items-center ">
        <div
        href=""
        class="door ml-[15rem] text-4xl pixel-font text-black  h-3/5 flex items-center cursor-pointer"
      > 
        <RouterLink to="/skills" href="" class="shadow-2xl hover:scale-110 bg-red p-6 border-4 border-black"> К навыкам</RouterLink>

      </div>
      <!-- <div class="pixel2"><p class="pixel-font p-4">К навыкам</p></div> -->

      <span class="text-8xl font-light pixel-font w-1/2  text-red/20 text-right">
        Кодируй, прокачивай героев, проходи подземелья!
      </span>
      </div>
      
      
    </div>
  </main>
</template>
<style>


</style>