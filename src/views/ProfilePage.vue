<template>
  <div
    class="w-full h-screen bg-gradient-to-b from-red to-dark-grey bg-cover bg-center overflow-scroll"
  >
    <div
      class="w-full h-full pt-32 flex flex-col justify-around items-center gap-20 bg-black/80 overflow-scroll pb-20"
    >
      <div
        class="py-6 px-16 border border-dark-grey flex items-center bg-black gap-20 w-1/2"
      >
        <div class="space-y-2">
          <p class="text-sm text-dark-grey">Имя пользователя</p>
          <p class="text-xs text-white">rwerrx</p>
        </div>
        <div class="space-y-2">
          <p class="text-sm text-dark-grey">email</p>
          <p class="text-xs text-white">sdjhfdsjfdsu@djfnehiehr</p>
        </div>
        <img src="../assets/img/user.png" class="w-[3rem]" alt="" />
      </div>
      <div class="gap-x-20 gap-y-10 flex flex-wrap my-0 mx-auto w-11/12">
        <div
          v-for="(item, index) in _langs"
          class="w-[45rem] bg-dark-grey/80 shadow-2xl shadow-black px-10 py-2 gap-10 items-center flex border-4 border-black hover:shadow-grey/30 hover:bg-black/30 hover:border-dark-grey cursor-pointer"
        >
          <span class="text-white">{{ item }}</span>
          <div
            class="w-full h-[1rem] bg-grey flex items-center border-4 border-grey"
          >
            <div class="w-1/2 h-full bg-red"></div>
          </div>
          <span class="text-white">50%</span>

          <img src="../assets/gif/knight.webp" class="w-[10rem]" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const l = ref([]);
// [x] _lang -> _langs/skills
const _langs = ref(["python", "html", "java", "c++", "c#"]);
</script>
