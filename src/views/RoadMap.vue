<script setup>
import Drawer from "primevue/drawer";
import { ref } from "vue";

const visible = ref(true);
</script>
<template>
  <div class="h-full w-full bg-dark-grey/10">
    <div class="w-full h-full pt-20 flex justify-between">
      <div class="h-full w-1/6 p-10 flex flex-col items-center justify-start absolute">
        <span class="pixel-font text-3xl text-grey"> HTML </span>
        <div>
          <img src="../assets/gif/knight.webp" alt="" />
        </div>
        <div class="w-full h-[2rem] bg-dark-grey shadow-md flex items-center">
          <span class="h-full w-1/2 bg-red/60"></span>
          <span class="pixel-font absolute ml-6 text-sm">50%</span>
        </div>
      </div>
      <div class=""></div>
    </div>
  </div>
</template>
<style scoped></style>
