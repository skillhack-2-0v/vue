<script setup>
import Drawer from "primevue/drawer";
import { ref, onMounted, computed } from "vue";
import Checkbox from "primevue/checkbox";
import Button from "primevue/button"; // Добавлен импорт Button
import { useRoute, useRouter } from "vue-router"; // Добавлен импорт useRouter
import knight from "../assets/gif/knight.webp";
import roadmaps from "@/services/roadmapService";

const visible = ref(true);
const _done = ref(false);

const route = useRoute();
const router = useRouter(); // Инициализируем router
const skill_name = route.params.name_skill;
const visibleRight = ref(false);
const curr_topic = ref("");

// Получить дорожную карту для текущего навыка
const currentRoadmap = computed(() => {
  // По умолчанию используем JavaScript, если навык не существует
  return roadmaps[skill_name] || roadmaps["JavaScript"];
});

// Метод для открытия панели
const openDrawer = (topicName) => {
  curr_topic.value = topicName;
  visibleRight.value = true;
};

// Получить цвет сложности
const getDifficultyColor = (difficulty) => {
  const colors = {
    Beginner: "success",
    Intermediate: "warning",
    Advanced: "primary",
  };
  return colors[difficulty] || "gray";
};

// Перевод уровней сложности
const translateDifficulty = (difficulty) => {
  const translations = {
    Beginner: "Начальный",
    Intermediate: "Средний",
    Advanced: "Продвинутый",
  };
  return translations[difficulty] || difficulty;
};

// Отслеживание прогресса
const calculateProgress = () => {
  const totalTopics = Object.keys(currentRoadmap.value).length;
  const completedTopics = Object.values(currentRoadmap.value).filter(
    (topic) => topic.completed
  ).length;
  return Math.round((completedTopics / totalTopics) * 100) || 0;
};

const progress = computed(() => calculateProgress());

// Отметить тему как завершенную
const markAsCompleted = (topicName) => {
  if (currentRoadmap.value[topicName]) {
    currentRoadmap.value[topicName].completed = _done.value;
  }
};

// Сортировка тем по сложности
const sortedTopics = computed(() => {
  const difficultyOrder = {
    Beginner: 1,
    Intermediate: 2,
    Advanced: 3,
  };

  return Object.entries(currentRoadmap.value).sort((a, b) => {
    return difficultyOrder[a[1].difficulty] - difficultyOrder[b[1].difficulty];
  });
});

// Переход на страницу с заданиями
const goToTasks = () => {
  router.push(`/tasks/${skill_name}`);
};
</script>

<template>
  <div class="min-h-screen gradient-bg pt-28 pb-20">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Заголовок страницы с прогрессом -->
      <div
        class="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16"
      >
        <div>
          <h1 class="text-4xl font-heading font-bold mb-4">
            Дорожная карта {{ skill_name }}
          </h1>
          <p class="text-xl text-gray">
            Следуйте этой дорожной карте, чтобы освоить {{ skill_name }} и
            повысить уровень своего персонажа
          </p>
        </div>

        <!-- Индикатор прогресса -->
        <div
          class="bg-bg-medium p-6 rounded-lg border border-primary/20 flex items-center gap-6 w-full lg:w-auto"
        >
          <div class="flex-1 lg:w-56">
            <div class="flex justify-between mb-2">
              <span class="text-gray font-medium">Общий прогресс</span>
              <span class="font-pixel text-primary">{{ progress }}%</span>
            </div>
            <div class="progress-container">
              <div
                class="progress-bar bg-primary"
                :style="`width: ${progress}%`"
              ></div>
            </div>
          </div>

          <!-- Отображение персонажа -->
          <div class="relative hidden sm:block">
            <img :src="knight" class="h-20 character" alt="Ваш персонаж" />
            <div
              class="absolute -top-2 -right-2 bg-primary/20 text-primary px-2 py-1 rounded font-pixel text-sm"
            >
              Уровень {{ Math.floor(progress / 10) }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16"
      >
        <!-- Добавьте эту кнопку -->
        <Button
          @click="goToTasks"
          class="btn btn-primary w-full"
          icon="pi pi-code"
          iconPos="left"
        >
          Практические задания
        </Button>
      </div>
      <!-- Легенда сложности -->
      <div class="flex flex-wrap gap-4 mb-8">
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-success"></div>
          <span class="text-sm text-gray">Начальный</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-warning"></div>
          <span class="text-sm text-gray">Средний</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-primary"></div>
          <span class="text-sm text-gray">Продвинутый</span>
        </div>
      </div>

      <!-- Сетка дорожной карты -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="[topicName, topic] in sortedTopics"
          :key="topicName"
          @click="openDrawer(topicName)"
          class="card card-hover group cursor-pointer"
          :class="{ 'border-l-4 border-l-success': topic.completed }"
        >
          <!-- Заголовок темы -->
          <div class="flex justify-between items-start mb-6">
            <h3 class="text-xl font-heading font-bold">{{ topicName }}</h3>
            <div
              class="rounded-full w-10 h-10 flex items-center justify-center"
              :class="`bg-${getDifficultyColor(
                topic.difficulty
              )}/20 text-${getDifficultyColor(topic.difficulty)}`"
            >
              <i class="pi" :class="topic.icon"></i>
            </div>
          </div>

          <!-- Описание темы -->
          <p class="text-gray mb-4">{{ topic.description }}</p>

          <!-- Метка сложности -->
          <div class="flex items-center gap-3 mb-4">
            <div
              class="text-xs rounded-full px-3 py-1"
              :class="`bg-${getDifficultyColor(
                topic.difficulty
              )}/20 text-${getDifficultyColor(topic.difficulty)}`"
            >
              {{ translateDifficulty(topic.difficulty) }}
            </div>

            <!-- Статус завершения -->
            <div
              v-if="topic.completed"
              class="text-xs bg-success/20 text-success rounded-full px-3 py-1 flex items-center gap-1"
            >
              <i class="pi pi-check-circle"></i>
              <span>Завершено</span>
            </div>
          </div>

          <!-- Счетчик ресурсов -->
          <div class="flex items-center gap-6 text-gray text-sm mt-4">
            <div class="flex items-center gap-1">
              <i class="pi pi-book"></i>
              <span>{{ Object.keys(topic.src).length }} ресурсов</span>
            </div>
            <div class="flex items-center gap-1">
              <i class="pi pi-desktop"></i>
              <span>{{ Object.keys(topic.courses).length }} курсов</span>
            </div>
          </div>

          <!-- Кнопка просмотра деталей -->
          <div
            class="mt-6 text-center py-2 rounded bg-bg-light group-hover:bg-primary/10 text-sm text-primary transition-colors duration-200"
          >
            Просмотреть детали
          </div>
        </div>
      </div>
    </div>

    <!-- Боковая панель с деталями темы -->
    <Drawer
      v-model:visible="visibleRight"
      position="right"
      class="custom-dialog w-full max-w-md"
    >
      <template #header>
        <div class="flex items-center justify-between w-full">
          <h2 class="text-2xl font-heading font-bold">{{ curr_topic }}</h2>
          <div
            v-if="currentRoadmap[curr_topic]?.difficulty"
            class="text-sm rounded-full px-3 py-1"
            :class="`bg-${getDifficultyColor(
              currentRoadmap[curr_topic].difficulty
            )}/20 text-${getDifficultyColor(
              currentRoadmap[curr_topic].difficulty
            )}`"
          >
            {{ translateDifficulty(currentRoadmap[curr_topic]?.difficulty) }}
          </div>
        </div>
      </template>

      <div class="space-y-8 p-4">
        <!-- Описание темы -->
        <div
          v-if="currentRoadmap[curr_topic]?.description"
          class="bg-bg-light/30 p-4 rounded-lg"
        >
          <p>{{ currentRoadmap[curr_topic].description }}</p>
        </div>

        <!-- Раздел документации -->
        <div class="card">
          <h3
            class="text-xl font-heading font-bold mb-4 flex items-center gap-2"
          >
            <i class="pi pi-book text-primary"></i>
            Документация и ресурсы
          </h3>
          <div class="space-y-3">
            <a
              v-for="(link, label) in currentRoadmap[curr_topic]?.src"
              :href="link"
              target="_blank"
              :key="label"
              class="block p-3 rounded bg-bg-light hover:bg-primary/10 transition-colors duration-200 flex items-center justify-between group"
            >
              <span>{{ label }}</span>
              <i
                class="pi pi-external-link text-primary opacity-0 group-hover:opacity-100 transition-opacity"
              ></i>
            </a>
          </div>
        </div>

        <!-- Раздел курсов -->
        <div class="card">
          <h3
            class="text-xl font-heading font-bold mb-4 flex items-center gap-2"
          >
            <i class="pi pi-desktop text-secondary"></i>
            Курсы и руководства
          </h3>
          <div class="space-y-3">
            <a
              v-for="(link, label) in currentRoadmap[curr_topic]?.courses"
              :href="link"
              target="_blank"
              :key="label"
              class="block p-3 rounded bg-bg-light hover:bg-secondary/10 transition-colors duration-200 flex items-center justify-between group"
            >
              <span>{{ label }}</span>
              <i
                class="pi pi-external-link text-secondary opacity-0 group-hover:opacity-100 transition-opacity"
              ></i>
            </a>
          </div>
        </div>

        <!-- Отслеживание прогресса -->
        <div class="card">
          <div class="flex items-center gap-3">
            <Checkbox
              v-model="_done"
              :binary="true"
              class="custom-checkbox"
              @change="markAsCompleted(curr_topic)"
            />
            <label class="text-lg">Отметить как завершенное</label>
          </div>

          <!-- Показать прогресс завершения -->
          <div v-if="_done" class="mt-4 text-success text-sm">
            Отлично! Вы завершили эту тему. Ваш персонаж стал сильнее!
          </div>
        </div>
      </div>
    </Drawer>
  </div>
</template>

<style>
.custom-checkbox .p-checkbox-box {
  @apply bg-bg-light border-gray;
}

.custom-checkbox .p-checkbox-box.p-highlight {
  @apply bg-success border-success;
}

.p-drawer-header {
  @apply bg-bg-medium border-b border-gray/20 p-4;
}

.p-drawer-content {
  @apply bg-bg-medium p-0;
}

.p-drawer-mask {
  @apply bg-black/60 backdrop-blur-sm;
}
</style>
