<script setup>
import ProgressBar from "primevue/progressbar";
import { ref, reactive } from "vue";
import { RouterLink } from "vue-router";
import kn3 from "../assets/gif/kn3.png";
import knight from "../assets/gif/knight.webp";
const kn4 = "https://tenor.com/ru/view/knight-pixel-art-game-art-gif-26545777";
const skills = ref({
  1: {
    "skill_name": "html",
    "percent": 50
  },
  2: {
    "skill_name": "python",
    "percent": 60
  },
  3: {
    "skill_name": "с++",
    "percent": 90
  }
})
// const gif = ref([knight, kn3, kn4]);


//  ЗАПРОС НА ПОЛУЧЕНИЕ НАВЫКОВ
// async function getSkills() {
//   axios({
//     method: "get",
//     url: "http://bit.ly/2mTM3nY",
//   }).then(function (response) {
//     skills = response.data;
//   });
// }
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
            v-for="elem in skills"
            :to="`/skills/${elem.skill_name}`"
            class="w-72 h-80 border-[3px] bg-black border-red/60 bg-gradient-to-b from-black to-red/40 hover:border-red shadow-2xl cursor-pointer hover:scale-[1.18] hover:z-20 hover:shadow-dark-grey"
          >
            <div
              class="w-full h-[3rem] border-b-2 border-red border-dashed shadow-md flex items-center p-2"
            >
              <span class="h-full w-1/2 border-2 border-yellow"></span>
              <span class="pixel-font absolute ml-6 text-white">{{ elem.percent }}%</span>
            </div>
            <div class="flex flex-col items-center h-full px-10 space-y-2">
              <span class="mt-10 text-2xl font-body pixel-font text-white"
                >{{ elem.skill_name }}</span
              >
              <div class="w-full flex items-center justify-center">
                <div class="w-full h-full bg-black relative"></div>
                <img :src="knight" alt="" class="" />
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
