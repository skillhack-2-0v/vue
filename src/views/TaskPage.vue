<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Button from "primevue/button";
import CodeTester from "@/components/CodeTester.vue"; // Используем алиас @
import taskService from "@/services/taskService"; // Используем алиас @
import knight from "@/assets/gif/knight.webp"; // Используем алиас @

const route = useRoute();
const router = useRouter();
const taskId = route.params.taskId;
const task = ref(null);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    // Получаем задание по ID
    const foundTask = taskService.getTaskById(taskId);

    if (!foundTask) {
      error.value = "Задание не найдено";
    } else {
      task.value = foundTask;
    }
  } catch (err) {
    error.value = "Произошла ошибка при загрузке задания";
    console.error(err);
  } finally {
    loading.value = false;
  }
});

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

const goBack = () => {
  router.go(-1);
};
</script>

<template>
  <div class="min-h-screen gradient-bg pt-28 pb-20">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Загрузка -->
      <div v-if="loading" class="flex justify-center items-center py-16">
        <i class="pi pi-spin pi-spinner text-4xl text-primary"></i>
      </div>

      <!-- Ошибка -->
      <div
        v-else-if="error"
        class="bg-primary/20 text-primary p-6 rounded-lg text-center"
      >
        <h2 class="text-2xl font-heading font-bold mb-4">{{ error }}</h2>
        <Button @click="goBack" class="btn" label="Вернуться назад" />
      </div>

      <!-- Содержимое задания -->
      <div v-else-if="task" class="space-y-8">
        <!-- Заголовок и информация о задании -->
        <div class="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <Button
              @click="goBack"
              class="p-button-text mb-4"
              icon="pi pi-arrow-left"
            >
              <span class="ml-2">Назад к списку заданий</span>
            </Button>
            <h1 class="text-3xl md:text-4xl font-heading font-bold mb-2">
              {{ task.title }}
            </h1>
            <div class="flex items-center gap-3">
              <div
                class="text-sm rounded-full px-3 py-1"
                :class="`bg-${getDifficultyColor(
                  task.difficulty
                )}/20 text-${getDifficultyColor(task.difficulty)}`"
              >
                {{ translateDifficulty(task.difficulty) }}
              </div>
              <div class="text-sm bg-bg-light px-3 py-1 rounded-full">
                {{ task.language }}
              </div>
            </div>
          </div>

          <!-- Персонаж и опыт -->
          <div class="bg-bg-medium p-4 rounded-lg flex items-center gap-4">
            <img :src="knight" alt="Персонаж" class="h-16 character" />
            <div>
              <p class="text-gray text-sm">За выполнение задания:</p>
              <p class="font-pixel text-primary text-xl">
                +{{
                  task.difficulty === "Beginner"
                    ? 10
                    : task.difficulty === "Intermediate"
                    ? 20
                    : 30
                }}
                XP
              </p>
            </div>
          </div>
        </div>

        <!-- Контестер для задания -->
        <CodeTester :task="task" />
      </div>
    </div>
  </div>
</template>
