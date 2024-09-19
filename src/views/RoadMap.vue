<script setup>
import Drawer from "primevue/drawer";
import { ref } from "vue";
import door2 from '../assets/img/door2.png';

import door3 from '../assets/img/door3.png';
import door4 from '../assets/img/door4.png';
import door5 from '../assets/img/door5.png';

const url_img = [door2, door3, door4, door5];
const visible = ref(true);
// const url_img = ['../assets/img/door2.png', '../assets/img/door3.png']
const url = "../assets/img/door2.png"
</script>
<template>
  <div class="h-full w-full bg-dark-grey/10 ">
    <div class="w-full h-full pt-20 flex-col justify-between items-center">
      <div
        class="h-full w-1/6 p-10 flex flex-col items-center justify-start absolute top-10 left-10"
      >
        <div>
          <img src="../assets/gif/knight.webp" alt="" />
        </div>
        <div class="w-full h-[2rem] bg-dark-grey shadow-md flex items-center">
          <span class="h-full w-1/2 bg-red/60"></span>
          <span class="pixel-font absolute ml-6 text-sm">50%</span>
        </div>
      </div>
      <div class="h-full flex flex-col items-center justify-around">
        <span class="text-4xl">HTML</span>
        <div class="w-5/6 border-2 border-red px-20 flex space-x-40 overflow-scroll py-10">
          
          <div v-for="i in 8" class="w-[20rem] flex flex-col items-center">
            <img
              :src="url_img[i % 4]"
              alt=""
              class="!h-[10rem] !w-[8rem] max-w-none  hover:scale-110 cursor-pointer"

            />
            <span class="text-white text-center">DOM дерево</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
