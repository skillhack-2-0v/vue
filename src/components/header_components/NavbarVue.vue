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
    <div class="lg:hidden flex">
      <Button
        type="button"
        class="bg-white/0 border-none text-black"
        @click="toggle"
        aria-haspopup="true"
        aria-controls="overlay_menu"
        ><i class="pi pi-bars" style="font-size: 1.5rem"></i
      ></Button>

      <Menu
        ref="menu"
        id="overlay_menu"
        :model="items"
        :popup="true"
        class="right-0 bg-dark-blue/50 text-black border-none rounded-none"
      />
      <Button
        class="pi pi-user bg-black/0 border-none"
        @click="_visible = true"
        style="font-size: 1.5rem"
      ></Button>
    </div>
    <div class="text-2xl space-x-10 font-body hidden lg:flex items-center">
      <a href="" class="hover:text-red text-dark-grey pixel-font text-base"
        >О Нac</a
      >
      <RouterLink
        class="hover:text-red text-dark-grey pixel-font text-base"
        to="/skills"
        >Навыки</RouterLink
      >

      <!-- <a href="" class="hover:text-orange">Навыки</a> -->
      <Button v-if="!loginStore.isLogged"
        class="hover:text-red text-dark-grey pixel-font text-base"
        unstyled
        @click="_visible = true"
        >Регистрация и вход</Button
      >
      <RouterLink v-if="loginStore.isLogged" class="pixel-font bg-dark-grey text-white text-base px-4 py-2 cursor-pointer hover:text-red border-2 border-dark-grey hover:bg-red/0 hover:border-red" to="profile">
        {{ loginStore.username }}
      </RouterLink>

      <DialogWindow />
    </div>
  </nav>
</template>
<style>
.p-menu-item-label {
  color: #ffefce !important;
}
.p-menu-item-icon {
  color: #ffefce !important;
}

.p-menu-item-content:hover {
  background-color: rgba(0, 0, 0, 0.077) !important;
  color: #fe5929 !important;
}
.p-menu-item-content:focus {
  background-color: rgba(0, 0, 0, 0.077) !important;
  color: #fe5929 !important;
}
</style>
