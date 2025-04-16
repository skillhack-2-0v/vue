<script setup>
import DialogWindow from "@/components/header_components/reglog_components/DialogWindow.vue";
import Menu from "primevue/menu";
import Button from "primevue/button";
import { RouterLink } from "vue-router";
import { ref, provide } from "vue";
import { useLoginStore } from "@/stores/useLoginStore";

const loginStore = useLoginStore();
const menu = ref();
const items = ref([
  {
    items: [
      {
        label: "О нас",
        icon: "pi pi-face-smile",
      },
      {
        label: "Навыки",
        icon: "pi pi-star-fill",
      },
    ],
  },
]);

const toggle = (event) => {
  menu.value.toggle(event);
};

const _visible = ref(false);
provide("_visible", _visible);
</script>

<template>
  <nav>
    <!-- Mobile menu -->
    <div class="lg:hidden flex items-center gap-4">
      <Button
        type="button"
        class="p-2 text-white hover:bg-bg-medium rounded-md"
        @click="toggle"
        aria-haspopup="true"
        aria-controls="overlay_menu"
      >
        <i class="pi pi-bars text-xl"></i>
      </Button>

      <Menu
        ref="menu"
        id="overlay_menu"
        :model="items"
        :popup="true"
        class="bg-bg-medium border border-gray/20 rounded-lg overflow-hidden"
      />

      <Button
        class="p-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-md border-none"
        @click="_visible = true"
        unstyled
      >
        <i class="pi pi-user text-xl"></i>
      </Button>
    </div>

    <!-- Desktop menu -->
    <div class="hidden lg:flex items-center gap-6">
      <a href="#" class="header-nav-item font-medium"> О Нас </a>

      <RouterLink to="/skills" class="header-nav-item font-medium">
        Навыки
      </RouterLink>

      <!-- Auth buttons -->
      <div class="pl-4 border-l border-gray/20">
        <Button
          v-if="!loginStore.isLogged"
          class="btn btn-primary"
          unstyled
          @click="_visible = true"
        >
          Регистрация и вход
        </Button>

        <RouterLink
          v-if="loginStore.isLogged"
          to="/profile"
          class="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors duration-200"
        >
          <i class="pi pi-user"></i>
          <span class="font-medium">{{ loginStore.username }}</span>
        </RouterLink>
      </div>

      <DialogWindow />
    </div>
  </nav>
</template>

<style>
.p-menu-list {
  padding: 0.5rem !important;
}

.p-menu-item-label {
  color: white !important;
  font-weight: 500;
}

.p-menu-item-icon {
  color: var(--primary-color) !important;
}

.p-menu-item-content {
  padding: 0.75rem 1rem !important;
  border-radius: 0.375rem !important;
}

.p-menu-item-content:hover {
  background-color: rgba(255, 90, 95, 0.1) !important;
}

.p-menu-item-content:focus {
  background-color: rgba(255, 90, 95, 0.1) !important;
}
</style>
