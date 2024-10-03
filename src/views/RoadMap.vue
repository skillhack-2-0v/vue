<script setup>
import Drawer from "primevue/drawer";
import { ref } from "vue";
// import dor2 from '../assets/img/dor2.png';

import dor3 from "../assets/img/dor3.png";
// import door4 from '../assets/img/door4.png';
// import door5 from '../assets/img/door5.png';
// import door6 from '../assets/img/door6.png';
// import dor from '../assets/img/dor.png'
const url_img = [dor3];
const visible = ref(true);
const visibleRight = ref(false);

// const url_img = ['../assets/img/door2.png', '../assets/img/door3.png']
// const url = "../assets/img/door2.png"
</script>
<template>
  <div
    class="h-full w-full bg-[url('../assets/img/bg_roadmap.png')] bg-center bg-cover"
  >
    <div class="w-full h-full pt-20 flex items-center bg-black/50">
      <div  class="h-3/4  -ml-40 -mr-40 flex items-center">
        <img src="../assets/gif/knight.webp" alt=""  class="h-full" />

      </div>

      <!-- <div
        class=" h-1/2 flex flex-col ml-10 items-center justify-center bg-dark-grey/50 "
      >

        
      </div> -->
      <div
        class="h-full w-3/4 flex flex-col items-center justify-center space-y-10"
      >
        <span class="text-4xl text-white">HTML</span>
        <div class="w-5/6 h-[2.5rem] bg-dark-grey shadow-md flex items-center p-[.3rem]">
            <span class=" w-1/2 bg-red/80 h-[2rem]"></span>
            <span class="pixel-font absolute ml-6 text-sm">50%</span>
          </div>
        <div
          class="w-5/6 border-2 border-red bg-black/40 px-20 flex space-x-4 overflow-scroll py-10"
        >
          
          <div
            v-for="i in 8"
            class="w-[40rem] flex flex-col gap-y-10 items-center"
            @click="visibleRight = true"
          >
            <img
              :src="url_img[i % 1]"
              alt=""
              class="!h-[15rem] !w-[18rem] max-w-none hover:scale-110 cursor-pointer"
            />
            <span class="text-white text-center">DOM дерево</span>
          </div>
        </div>
      </div>
    </div>
    <Drawer
      v-model:visible="visibleRight"
      position="right"
      class="bg-dark-grey/80 w-2/5 border-none"
    >
      <p class="text-white text-2xl mb-4 text-center">DOM дерево</p>
      <p class="text-white/80 text-base mb-10">
        - объектная модель документа, которую браузер создает в памяти
        компьютера на основании HTML-кода, полученного им от сервера.
      </p>
      <div class="space-y-10">
        <div class="bg-dark-grey p-10 space-y-4 shadow-2xl">
          <p class="text-white text-xl">Ссылки на документации</p>
          <div class="flex flex-col">
            <a
              class="text-white/80 text-base border border-grey/20 p-4 shadow-lg hover:shadow-red/20"
              href="#"
              v-for="i in 4"
              >Дльыьыылвллвлв</a
            >
          </div>
        </div>
        <div class="bg-dark-grey shadow-2xl">
          <div class="p-10 space-y-4 bg-red/40">
            <p class="text-white text-xl">Ссылки на курсы</p>
            <div class="flex flex-col">
              <a
                class="text-white/80 text-base border border-grey/20 p-4 shadow-lg hover:shadow-red/20"
                href="#"
                v-for="i in 4"
                >Дльыьыылвллвлв</a
              >
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  </div>
</template>
<style>
.p-drawer-close-button {
  border-color: rgba(255, 0, 0, 0) !important;
}
.p-drawer-close-button:hover {
  background-color: rgba(255, 0, 0, 0) !important;
}
.p-button {
  outline-color: rgba(240, 248, 255, 0);
}
</style>
