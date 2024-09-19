<script setup>
import NavbarVue from '@/components/header_components/NavbarVue.vue'
import { RouterLink } from "vue-router";

</script>

<template>
  <header
    class="text-black flex justify-between h-24 items-center px-10 w-full absolute "
  >
    <RouterLink
      to="/"
      class="text-2xl font-light pixel-font text-white"
      >SH</RouterLink
    >
    <NavbarVue />

  </header>
</template>
