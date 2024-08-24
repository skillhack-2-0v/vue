<script setup>
import RegistrationTab from "@/components/header_components/reglog_components/RegistrationTab.vue";
import LoginTab from "@/components/header_components/reglog_components/LoginTab.vue";

import Dialog from "primevue/dialog";
import Button from "primevue/button";
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import { useLoginStore } from "@/stores/useLoginStore";
import { ref, inject } from "vue";
const loginStore = useLoginStore();

const _visible = inject("_visible");
function LoginValidate(username, email, password, remember) {
  const email_pattern = /^[a-zA-Z]+@[a-zA-Z]+$/;
  const valid = true;
  if (username.length < 8) {
    valid = false;
  }
  if (!email_pattern.test(email)) {
    valid = false;
  }
  _visible.value = !valid;
  if (valid) {
    loginStore.username = username;
    loginStore.email = email;
    loginStore.isLogged = true;
  }
}
function RegisterValidate(username, email, password, repeated_password) {
  const email_pattern = /^[a-zA-Z]+@[a-zA-Z]+$/;
  const valid = true;
  if (username.length < 8) {
    valid = false
  }
  if (!email_pattern.test(email)) {
    valid = false
  }
  _visible.value = !valid;
  if (password != repeated_password) {
    valid = false
  }
  if (valid) {
    loginStore.username = username;
    loginStore.email = email;
    loginStore.isLogged = true;
  }
}
</script>
<template>
  <Dialog
    v-model:visible="_visible"
    modal
    class="dialog-reglog bg-dark-grey/80 absolute h-[39rem] rounded-none"
    :style="{ width: '50vw' }"
    :breakpoints="{ '1199px': '90vw', '575px': '90vw' }"
  >
    <Tabs value="0">
      <TabList>
        <Tab
          value="0"
          class="bg-dark-grey/70 text-sm md:text-xl w-full text-red pixel-font"
          >ВХОД</Tab
        >
        <Tab
          value="1"
          class="bg-dark-grey/70 text-sm md:text-xl w-full text-red pixel-font"
        >
          РЕГИСТРАЦИЯ</Tab
        >
      </TabList>
      <TabPanels class="bg-orange/0">
        <RegistrationTab @RegisterValidation="RegisterValidate" />
        <LoginTab @LoginValidation="LoginValidate" @RegisterValidation="RedisterValidation"/>
      </TabPanels>
    </Tabs>
  </Dialog>
</template>
<style lang="scss">
/* .p-tab-active {
  color: #FE5929;
  border-color: #FE5929;
}
.p-dialog-close-button:hover {
  background-color: none;

} */
.dialog-reglog {
  // .p-tablist {
  //   font-family: "Montserrat";
  // }

  .p-tab-active {
    border-color: #8a3037;
  }
  .p-tablist-active-bar {
    background: #8a3037 !important;
  }
  .p-password-input {
    width: 100% !important;
    background: #ffefce !important;
    height: 4rem;
    color: #141625;
    font-size: 1.875rem /* 30px */;
    line-height: 2.25rem;
  }
  .p-password-input:focus {
    border-color: #8a3037;
  }
  .p-password-overlay {
    background: #141625;
    opacity: 0.8;
    width: 1rem;
  }
}
</style>
