<script setup>
import NavbarVue from "@/components/header_components/NavbarVue.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 bg-bg-dark/95 backdrop-blur-sm shadow-lg z-50"
  >
    <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
      <RouterLink to="/" class="text-2xl font-bold font-heading text-white">
        <span class="text-primary font-pixel">SkillHack</span>
        <span
          class="text-xs ml-1 align-top bg-primary/20 text-primary px-2 py-1 rounded font-bold"
          >BETA</span
        >
      </RouterLink>

      <NavbarVue />
    </div>
  </header>
</template>
