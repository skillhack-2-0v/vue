<script setup>
import { ref } from "vue";
import { useLoginStore } from "@/stores/useLoginStore";
import knight from "../assets/gif/knight.webp";

const loginStore = useLoginStore();
const _lang = ref(["Python", "HTML", "Java", "C++", "C#"]);

// Данные для статистики профиля
const stats = ref([
  { label: "Опыт", value: "1,240 XP" },
  { label: "Уровень", value: "8" },
  { label: "Квесты", value: "12/48" },
]);

// Функция для генерации случайного прогресса для демонстрации
const getRandomProgress = () => {
  return Math.floor(Math.random() * 80) + 10;
};

// Расчет общего среднего прогресса
const totalProgress = ref(
  Math.floor(
    _lang.value.reduce((acc, _, index) => acc + getRandomProgress(), 0) /
      _lang.value.length
  )
);

// Получить цвет навыка на основе прогресса
const getSkillColor = (progress) => {
  if (progress < 30) return "warning";
  if (progress < 70) return "secondary";
  return "success";
};
</script>

<template>
  <div class="min-h-screen gradient-bg pt-28 pb-20">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Заголовок профиля -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <!-- Карточка персонажа -->
        <div class="card flex flex-col items-center p-8">
          <div class="relative mb-6">
            <div class="rounded-full bg-primary/20 p-6">
              <img :src="knight" alt="Персонаж" class="h-32 w-32 character" />
            </div>
            <div
              class="absolute -top-2 -right-2 bg-primary text-white font-pixel px-3 py-1 rounded-full"
            >
              УР. {{ Math.floor(totalProgress / 12) }}
            </div>
          </div>

          <h2 class="text-2xl font-heading font-bold mb-2">
            {{ loginStore.username || "qqqq" }}
          </h2>
          <p class="text-gray mb-6">{{ loginStore.email || "qqq@qqq" }}</p>

          <!-- Круг прогресса -->
          <div class="w-full bg-bg-light rounded-lg p-4 mb-6">
            <div class="flex justify-between items-center mb-2">
              <span class="text-gray">Мастерство</span>
              <span class="text-primary font-pixel">{{ totalProgress }}%</span>
            </div>
            <div class="progress-container">
              <div
                class="progress-bar bg-primary"
                :style="`width: ${totalProgress}%`"
              ></div>
            </div>
          </div>

          <!-- Статистика -->
          <div class="grid grid-cols-2 gap-4 w-full">
            <div
              v-for="(stat, index) in stats"
              :key="index"
              class="bg-bg-light p-3 rounded text-center"
            >
              <div class="text-gray text-sm mb-1">{{ stat.label }}</div>
              <div class="font-heading font-bold">{{ stat.value }}</div>
            </div>
          </div>
        </div>

        <!-- Обзор навыков -->
        <div class="lg:col-span-2">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-heading font-bold">Ваши навыки</h2>
            <RouterLink
              to="/skills"
              class="text-primary flex items-center gap-1 hover:underline"
            >
              <span>Добавить новые навыки</span>
              <i class="pi pi-plus-circle"></i>
            </RouterLink>
          </div>

          <div class="space-y-4">
            <div
              v-for="(skill, index) in _lang"
              :key="index"
              class="card flex items-center gap-6 hover:border-primary/40 transition-colors duration-200"
            >
              <!-- Иконка навыка -->
              <div
                class="w-12 h-12 rounded-full flex items-center justify-center"
                :class="`bg-${getSkillColor(
                  getRandomProgress()
                )}/20 text-${getSkillColor(getRandomProgress())}`"
              >
                <i class="pi pi-code text-xl"></i>
              </div>

              <!-- Информация о навыке -->
              <div class="flex-1">
                <div class="flex justify-between items-center mb-2">
                  <h3 class="font-heading font-bold">{{ skill }}</h3>
                  <span class="font-pixel text-primary"
                    >{{ getRandomProgress() }}%</span
                  >
                </div>
                <div class="progress-container">
                  <div
                    class="progress-bar"
                    :class="`bg-${getSkillColor(getRandomProgress())}`"
                    :style="`width: ${getRandomProgress()}%`"
                  ></div>
                </div>
              </div>

              <!-- Миниатюра персонажа -->
              <div class="relative w-12 h-12 overflow-hidden">
                <img
                  :src="knight"
                  alt="Персонаж"
                  class="w-full h-full object-contain"
                />
                <div
                  class="absolute -top-1 -right-1 text-xs font-pixel rounded-full w-5 h-5 flex items-center justify-center"
                  :class="`bg-${getSkillColor(getRandomProgress())} text-white`"
                >
                  {{ Math.floor(getRandomProgress() / 14) }}
                </div>
              </div>
            </div>
          </div>

          <!-- Раздел достижений -->
          <div class="mt-8">
            <h2 class="text-2xl font-heading font-bold mb-6">
              Недавние достижения
            </h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="card bg-bg-medium/50 flex items-center gap-4">
                <div class="bg-primary/20 text-primary rounded-full p-3">
                  <i class="pi pi-star-fill"></i>
                </div>
                <div>
                  <h4 class="font-heading font-bold">Быстрый ученик</h4>
                  <p class="text-gray text-sm">
                    Завершено 5 уроков за один день
                  </p>
                </div>
              </div>

              <div class="card bg-bg-medium/50 flex items-center gap-4">
                <div class="bg-secondary/20 text-secondary rounded-full p-3">
                  <i class="pi pi-bookmark-fill"></i>
                </div>
                <div>
                  <h4 class="font-heading font-bold">Python Новичок</h4>
                  <p class="text-gray text-sm">
                    Достигнут прогресс 30% в навыке Python
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
