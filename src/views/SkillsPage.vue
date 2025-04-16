<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import { RouterLink } from "vue-router";
import knight from "../assets/gif/knight.webp";

// Демо-данные с иконками языков и описаниями
const _all_skills = {
  Python: {
    skill_name: "Python",
    description:
      "Универсальный язык для веб-разработки, анализа данных, ИИ и автоматизации",
    icon: "pi-code",
    color: "primary",
  },
  JavaScript: {
    skill_name: "JavaScript",
    description:
      "Язык веб-программирования для интерактивных сайтов и современных веб-приложений",
    icon: "pi-desktop",
    color: "warning",
  },
  "HTML/CSS": {
    skill_name: "HTML/CSS",
    description: "Основа веб-разработки для создания и стилизации веб-страниц",
    icon: "pi-palette",
    color: "secondary",
  },
  Java: {
    skill_name: "Java",
    description:
      "Мощный платформонезависимый язык для корпоративных приложений",
    icon: "pi-server",
    color: "purple",
  },
  "C++": {
    skill_name: "C++",
    description:
      "Высокопроизводительный язык для системного программирования, игр и приложений",
    icon: "pi-bolt",
    color: "teal",
  },
  "C#": {
    skill_name: "C#",
    description:
      "Язык Microsoft для создания Windows-приложений, игр и веб-сервисов",
    icon: "pi-play",
    color: "success",
  },
};

const _user_info = {
  user_id: 1,
  username: "кодгерой",
  email: "hero@code.io",
  password: "********",
  skills: {
    Python: {
      skill_name: "Python",
      percent: 65,
    },
    "HTML/CSS": {
      skill_name: "HTML/CSS",
      percent: 42,
    },
    JavaScript: {
      skill_name: "JavaScript",
      percent: 28,
    },
  },
};

// Получить уровень персонажа на основе прогресса навыка
const getCharacterLevel = (skillName) => {
  if (_user_info.skills[skillName]) {
    return Math.floor(_user_info.skills[skillName].percent / 10);
  }
  return 0;
};
</script>

<template>
  <div class="min-h-screen gradient-bg pt-28 pb-20">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Page header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-heading font-bold mb-4">Навыки SkillHack</h1>
        <p class="text-xl text-gray max-w-2xl mx-auto">
          Выберите язык программирования, чтобы начать приключение. По мере
          обучения ваш персонаж будет становиться сильнее.
        </p>
      </div>

      <!-- Skills grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RouterLink
          v-for="(skill, skillName) in _all_skills"
          :key="skillName"
          :to="`/skills/${skillName}`"
          class="skill-card overflow-hidden group"
        >
          <!-- Progress bar based on user progress -->
          <div class="h-2 w-full" :class="`bg-${skill.color}/20`">
            <div
              v-if="_user_info.skills[skillName]"
              class="h-full transition-all duration-500"
              :class="`bg-${skill.color}`"
              :style="`width: ${_user_info.skills[skillName].percent}%`"
            ></div>
            <div v-else class="h-full w-0" :class="`bg-${skill.color}`"></div>
          </div>

          <div class="p-6">
            <!-- Skill content -->
            <div class="flex justify-between items-start mb-6">
              <div>
                <h3 class="text-2xl font-heading font-bold mb-2">
                  {{ skill.skill_name }}
                </h3>
                <p class="text-gray">{{ skill.description }}</p>
              </div>

              <!-- Skill icon -->
              <div
                class="rounded-full w-12 h-12 flex items-center justify-center"
                :class="`bg-${skill.color}/20 text-${skill.color}`"
              >
                <i class="pi" :class="skill.icon"></i>
              </div>
            </div>

            <!-- Character progress -->
            <div class="flex items-center justify-between">
              <div>
                <div class="font-pixel mb-1">
                  <span
                    v-if="_user_info.skills[skillName]"
                    :class="`text-${skill.color}`"
                  >
                    {{ _user_info.skills[skillName].percent }}%
                  </span>
                  <span v-else class="text-gray">0%</span>
                  <span class="text-gray"> Завершено</span>
                </div>

                <div
                  v-if="_user_info.skills[skillName]"
                  class="text-sm text-gray"
                >
                  Уровень персонажа: {{ getCharacterLevel(skillName) }}
                </div>
                <div v-else class="text-sm text-gray">Начните свой путь</div>
              </div>

              <div
                class="relative w-16 h-16 overflow-hidden group-hover:scale-110 transition-transform duration-300"
              >
                <img
                  :src="knight"
                  alt="Персонаж"
                  class="w-full h-full object-contain"
                />

                <!-- Level badge for existing skills -->
                <div
                  v-if="_user_info.skills[skillName]"
                  class="absolute -top-1 -right-1 text-xs font-pixel rounded-full w-5 h-5 flex items-center justify-center"
                  :class="`bg-${skill.color} text-white`"
                >
                  {{ getCharacterLevel(skillName) }}
                </div>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>

      <!-- Start your journey section -->
      <div class="mt-16 text-center">
        <p class="text-gray mb-6">Не нашли нужный язык на SkillHack?</p>
        <button class="btn btn-secondary">Запросить новый навык</button>
      </div>
    </div>
  </div>
</template>
