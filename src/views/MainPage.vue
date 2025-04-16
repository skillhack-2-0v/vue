<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <main class="min-h-screen gradient-bg overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
      <!-- Hero Section -->
      <div
        class="flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        <!-- Left side content -->
        <div class="lg:w-1/2 space-y-8">
          <h1
            class="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight"
          >
            <span class="text-primary">SkillHack:</span> Код. Прокачка.
            <span class="text-primary">Победа.</span>
          </h1>

          <p class="text-xl text-light-gray">
            Улучшайте свои навыки программирования через эпическое путешествие с
            кодированием и развитием персонажа на SkillHack.
          </p>

          <div class="flex gap-4 pt-4">
            <RouterLink to="/skills" class="btn btn-primary">
              Начать Приключение
            </RouterLink>

            <a
              href="#learn-more"
              class="btn bg-bg-light text-white hover:bg-bg-light/80"
            >
              Узнать Больше
            </a>
          </div>

          <!-- <div class="hidden md:flex items-center gap-6 pt-6">
            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-secondary">50+</span>
              <span class="text-gray">Навыков</span>
            </div>
            <div class="h-10 w-px bg-gray/30"></div>
            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-teal">100+</span>
              <span class="text-gray">Ресурсов</span>
            </div>
            <div class="h-10 w-px bg-gray/30"></div>
            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-primary">5k+</span>
              <span class="text-gray">Героев</span>
            </div>
          </div> -->
        </div>

        <!-- Right side hero image -->
        <div class="lg:w-1/2 flex justify-center">
          <div class="relative">
            <!-- Character container with pixel art styling -->
            <div
              class="bg-bg-medium/50 rounded-2xl p-6 border-4 border-primary/30"
            >
              <img
                src="../assets/gif/knight.webp"
                alt="Персонаж рыцаря"
                class="character h-72 md:h-96"
              />

              <!-- Floating skill badges -->
              <div
                class="absolute -top-4 -left-4 bg-purple text-white text-sm px-3 py-1 rounded-full font-pixel"
              >
                Python +1
              </div>
              <div
                class="absolute top-12 -right-4 bg-success text-bg-dark text-sm px-3 py-1 rounded-full font-pixel"
              >
                HTML +2
              </div>
              <div
                class="absolute bottom-8 -left-4 bg-warning text-bg-dark text-sm px-3 py-1 rounded-full font-pixel"
              >
                JavaScript +3
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div id="learn-more" class="pt-32 pb-16">
        <h2 class="text-3xl font-heading font-bold text-center mb-16">
          Как Работает SkillHack
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="card card-hover">
            <div
              class="rounded-full bg-primary/20 w-16 h-16 flex items-center justify-center mb-4"
            >
              <span class="text-2xl text-primary font-pixel">1</span>
            </div>
            <h3 class="text-xl font-heading font-bold mb-3">Выберите Навыки</h3>
            <p class="text-gray">
              Выберите различные языки программирования и технологии для
              построения своего уникального персонажа.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="card card-hover">
            <div
              class="rounded-full bg-secondary/20 w-16 h-16 flex items-center justify-center mb-4"
            >
              <span class="text-2xl text-secondary font-pixel">2</span>
            </div>
            <h3 class="text-xl font-heading font-bold mb-3">
              Следуйте Дорожным Картам
            </h3>
            <p class="text-gray">
              Используйте проработанные учебные материалы с лучшей документацией
              и курсами для каждого навыка.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="card card-hover">
            <div
              class="rounded-full bg-success/20 w-16 h-16 flex items-center justify-center mb-4"
            >
              <span class="text-2xl text-success font-pixel">3</span>
            </div>
            <h3 class="text-xl font-heading font-bold mb-3">
              Развивайтесь Вместе
            </h3>
            <p class="text-gray">
              По мере вашего прогресса, ваши навыки и ваш персонаж становятся
              сильнее.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
