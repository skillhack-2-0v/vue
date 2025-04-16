<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import taskService from "@/services/taskService"; // Используем алиас @

const route = useRoute();
const router = useRouter();
const language = ref(route.params.language || "JavaScript");
const tasks = ref([]);
const loading = ref(true);
const difficultyFilter = ref(null);

// Опции для фильтра сложности
const difficultyOptions = [
  { label: "Все уровни", value: null },
  { label: "Начальный", value: "Beginner" },
  { label: "Средний", value: "Intermediate" },
  { label: "Продвинутый", value: "Advanced" },
];

// Опции для выбора языка
const languageOptions = [
  { label: "JavaScript", value: "JavaScript" },
  { label: "Python", value: "Python" },
  { label: "Java", value: "Java" },
  { label: "HTML/CSS", value: "HTML/CSS" },
];

// Загрузка заданий при монтировании компонента
onMounted(() => {
  loadTasks();
});

// Загрузка заданий при изменении языка
watch(language, () => {
  loadTasks();
});

// Функция загрузки заданий
const loadTasks = () => {
  loading.value = true;

  try {
    // Получаем задания по языку
    tasks.value = taskService.getTasksByLanguage(language.value);
  } catch (error) {
    console.error("Ошибка при загрузке заданий:", error);
  } finally {
    loading.value = false;
  }
};

// Отфильтрованные задания
const filteredTasks = () => {
  if (!difficultyFilter.value) return tasks.value;

  return tasks.value.filter(
    (task) => task.difficulty === difficultyFilter.value
  );
};

// Переход к заданию
const goToTask = (taskId) => {
  router.push(`/tasks/task/${taskId}`);
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
</script>

<template>
  <div class="min-h-screen gradient-bg pt-28 pb-20">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Заголовок страницы -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-heading font-bold mb-4">
          Практические Задания
        </h1>
        <p class="text-xl text-gray max-w-2xl mx-auto">
          Решайте задачи, повышайте свои навыки и прокачивайте персонажа. Каждое
          успешно выполненное задание приносит опыт и повышает уровень вашего
          героя.
        </p>
      </div>

      <!-- Фильтры -->
      <div class="bg-bg-medium p-6 rounded-lg mb-8">
        <div class="flex flex-col md:flex-row justify-between gap-4">
          <div class="space-y-2">
            <label class="block text-gray text-sm">Язык программирования</label>
            <Dropdown
              v-model="language"
              :options="languageOptions"
              optionLabel="label"
              optionValue="value"
              class="w-full md:w-56"
            />
          </div>

          <div class="space-y-2">
            <label class="block text-gray text-sm">Уровень сложности</label>
            <Dropdown
              v-model="difficultyFilter"
              :options="difficultyOptions"
              optionLabel="label"
              optionValue="value"
              class="w-full md:w-56"
            />
          </div>
        </div>
      </div>

      <!-- Загрузка -->
      <div v-if="loading" class="flex justify-center items-center py-16">
        <i class="pi pi-spin pi-spinner text-4xl text-primary"></i>
      </div>

      <!-- Список заданий -->
      <div
        v-else-if="filteredTasks().length > 0"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div
          v-for="task in filteredTasks()"
          :key="task.id"
          class="bg-bg-medium rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer group"
          @click="goToTask(task.id)"
        >
          <!-- Заголовок задания -->
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <h2
                class="text-xl font-heading font-bold group-hover:text-primary transition-colors"
              >
                {{ task.title }}
              </h2>
              <div
                class="text-xs rounded-full px-3 py-1"
                :class="`bg-${getDifficultyColor(
                  task.difficulty
                )}/20 text-${getDifficultyColor(task.difficulty)}`"
              >
                {{ translateDifficulty(task.difficulty) }}
              </div>
            </div>

            <!-- Описание (ограниченное) -->
            <div
              class="text-gray text-sm mb-4 line-clamp-3"
              v-html="task.description"
            ></div>

            <!-- Кнопка решения -->
            <div class="mt-4 flex justify-end">
              <Button
                label="Решить задачу"
                class="p-button-sm p-button-outlined"
                :class="`p-button-${getDifficultyColor(task.difficulty)}`"
                icon="pi pi-angle-right"
                iconPos="right"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Нет заданий -->
      <div v-else class="bg-bg-medium p-8 rounded-lg text-center">
        <h2 class="text-2xl font-heading font-bold mb-4">Задания не найдены</h2>
        <p class="text-gray">
          Для выбранного языка и уровня сложности нет доступных заданий.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
