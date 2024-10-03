<script setup>
import ProgressBar from "primevue/progressbar";
import { ref } from "vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <!-- <div class="w-full h-full z-10 bg-black/30"></div> -->
  <div
    class="flex-col items-center bg-black w-full h-screen py-32 overflow-hidden"
  >
    <!-- <p class="text-5xl text-grey text-center pixel-font w-full">Навыки</p> -->
    <div class="w-full -mt-10 flex justify-between">
      <div
        class="w-full h-full flex justify-between items-center gap-x-10 px-10"
      >
        <!-- <div class="w-full h-full absolute top-20 -ml-10">

        </div> -->
        <img
          src="../assets/gif/torch1.gif"
          alt=""
          class="w-[10rem] h-[25rem]"
        />
        <div
          class="container w-5/6 my-0 mx-auto flex flex-wrap gap-6 pt-40 relative"
        >
          <RouterLink
            v-for="i in 8"
            to="/html"
            class="w-72 h-80 border-[3px] bg-black border-red/60 hover:border-red  shadow-2xl cursor-pointer hover:scale-[1.18] hover:z-20 hover:shadow-grey"
          >
            <div
              class="w-full h-[3rem] border-b-2 border-red border-dashed shadow-md flex items-center p-2"
            >
              <span class="h-full w-1/2 bg-grey"></span>
              <span class="pixel-font absolute ml-6 text-black">50%</span>
            </div>
            <div class="flex flex-col items-center h-full px-10 space-y-2">
              <span class="mt-10 text-2xl font-body pixel-font text-white">HTML</span>
              <div class="w-full flex items-center justify-center">
                <div class="w-full h-full bg-black relative"></div>
                <img src="../assets/gif/knight.webp" alt="" class="" />
              </div>
            </div>
          </RouterLink>
        </div>
        <img
          src="../assets/gif/torch1.gif"
          alt=""
          class="w-[10rem] h-[25rem]"
        />
      </div>
    </div>
  </div>
</template>
<style></style>
