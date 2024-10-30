<script setup>
import Drawer from "primevue/drawer";
import { ref } from "vue";
import Checkbox from "primevue/checkbox";
import dor3 from "../assets/img/dor3.png";
import { useRoute } from "vue-router";

const url_img = [dor3];
const visible = ref(true);
const _done = ref(false);

const route = useRoute(); // получаем объект route
const skill_name = route.params.name_skill; // читаем параметр skill_name
console.log(skill_name);
const visibleRight = ref(false);
const curr_topic = ref("");

// Объект с темами и курсами
// [x] нарушение нейминга topics -> _topics, ключи на русском
const _topics = ref({
  "DOM дерево": {
    src: {
      Документация: "https://learn.javascript.ru/dom-nodes",
      "Руководство по DOM mozilla":
        "https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model",
    },
    courses: {
      Stepik: "https://stepik.org/course/18644/promo",
    },
  },
  "DOM дерево2": {
    src: {
      Документация: "https://learn.javascript.ru/dom-nodes",
      "Руководство по DOM mozilla":
        "https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model",
    },
    courses: {
      Stepik: "https://stepik.org/course/18644/promo",
    },
  },
  "DOM дерево3": {
    src: {
      Документация: "https://learn.javascript.ru/dom-nodes",
      "Руководство по DOM mozilla":
        "https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model",
    },
    courses: {
      Stepik: "https://stepik.org/course/18644/promo",
    },
  },
});

// Метод для открытия Drawer
const openDrawer = (topicName) => {
  curr_topic.value = topicName;
  visibleRight.value = true;
};
</script>
<template>
  <div
    class="h-full w-full bg-gradient-to-b from-red/50 to-black bg-center bg-cover roadmap"
  >
    <div class="w-full h-full pt-20 flex items-center bg-black/50">
      <div class="h-3/4 -ml-40 -mr-40 flex items-center">
        <img src="../assets/gif/knight.webp" alt="" class="h-full" />
      </div>

      <div
        class="h-full w-3/4 flex flex-col items-center justify-center space-y-10"
      >
        <span class="text-4xl text-white">{{ skill_name }}</span>
        <div
          class="w-5/6 h-[2.5rem] bg-dark-grey shadow-md flex items-center p-[.3rem]"
        >
          <span class="w-1/2 bg-red/80 h-[2rem]"></span>
          <span class="pixel-font absolute ml-6 text-sm">50%</span>
        </div>
        <div
          class="w-5/6 border-2 border-red bg-black/40 px-20 flex space-x-4 overflow-scroll py-10"
        >
          <div
            v-for="(topicName, index) in Object.keys(_topics)"
            :key="index"
            class="w-[40rem] flex flex-col gap-y-10 items-center"
            @click="openDrawer(topicName)"
          >
            <img
              :src="url_img[index % url_img.length]"
              alt=""
              class="!h-[15rem] !w-[18rem] max-w-none hover:scale-110 cursor-pointer"
            />
            <span class="text-white text-center">{{ topicName }}</span>
          </div>
        </div>
      </div>
    </div>
    <Drawer
      v-model:visible="visibleRight"
      position="right"
      class="bg-dark-grey/80 w-2/5 border-none"
    >
      <p class="text-white text-2xl mb-4 text-center">{{ curr_topic }}</p>
      <div class="space-y-10">
        <div class="bg-dark-grey p-10 space-y-4 shadow-2xl">
          <p class="text-white text-2xl">Ссылки на документации</p>
          <div class="flex flex-col !font-body">
            <a
              class="text-white/80 text-xl border border-grey/20 p-[.7rem] shadow-lg hover:shadow-red/20"
              v-for="(link, label) in _topics[curr_topic]?.src"
              :href="link"
              :key="label"
            >
              {{ label }}
            </a>
          </div>
        </div>
        <div class="bg-dark-grey shadow-2xl">
          <div class="p-10 space-y-4 bg-red/40">
            <p class="text-white text-2xl">Ссылки на курсы</p>
            <div class="flex flex-col font-body">
              <a
                class="text-white/80 text-xl border border-grey/20 p-[.7rem] shadow-lg hover:shadow-red/20"
                v-for="(link, label) in _topics[curr_topic]?.courses"
                :href="link"
                :key="label"
              >
                {{ label }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  </div>
</template>
