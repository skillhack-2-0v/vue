<script setup>
import ProgressBar from "primevue/progressbar";
import { ref } from "vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="flex-col items-center bg-black w-full h-full pt-[5rem]">
    <p
      class="text-5xl text-red text-center pixel-font w-full "
    >
      Навыки
    </p>
    <div class="w-full -mt-10 flex justify-between">
      <div class="w-full h-full flex items-center gap-x-10 px-10">
        <img
          src="../assets/gif/torch1.gif"
          alt=""
          class="w-[10rem] h-[25rem]"
        />
        <div class="container w-5/6 my-0 mx-auto flex flex-wrap gap-6 pt-40">
          <RouterLink
            v-for="i in 8"
            to="/html"
            class="w-72 h-80 bg-dark-grey shadow-2xl cursor-pointer hover:scale-110"
          >
            <div
              class="w-full h-[3rem] bg-dark-grey shadow-md flex items-center"
            >
              <span class="h-full w-1/2 bg-red/60"></span>
              <span class="pixel-font absolute ml-6">50%</span>
            </div>
            <div class="flex flex-col items-center h-full px-10 space-y-4">
              <span class="mt-10 text-3xl font-body pixel-font">HTML</span>
              <div class="w-full h-1/2 flex items-center justify-center">
                <img
                  src="../assets/gif/knight.webp"
                  alt=""
                  class="w-full"
                  
                />
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
