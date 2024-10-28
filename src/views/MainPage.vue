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
    <div class="w-full bg-gradient-to-l from-dark-grey to-black/10 space-y-20 h-full">
      <div class="main-img h-full flex justify-between w-full items-center">
        <div
          href=""
          class="ml-[17.5rem] pixel-font text-black h-3/5 flex items-center cursor-pointer"
        >
          <RouterLink
            to="/skills"
            href=""
            class="shadow-2xl hover:bg-dark-grey hover:shadow-red  bg-red text-3xl text-white hover:scale-105 rounded-sm p-[1.2rem]"
          >
            К навыкам</RouterLink
          >
        </div>
        <!-- <div class="pixel2"><p class="pixel-font p-4">К навыкам</p></div> -->
        <div class="flex flex-col w-1/2 pr-[4rem] space-y-4">
          <span
            class="text-[4rem] pixel-font text-red text-right leading-[6rem] text-stroke-2"
          >
            Кодируй, прокачивай героев, проходи подземелья
          </span>
          
          <span class="text-right text-white/50 text-stroke-2 font-body text-5xl"> Найдем все нужные тебе документации и курсы </span>
        </div>

        <!-- <img src="../assets/gif/knight.webp" class="w-[60rem] -z-1" alt=""> -->
      </div>
    </div>
  </main>
</template>
<style></style>
