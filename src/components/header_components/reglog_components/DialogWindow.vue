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
          class="bg-dark-grey/70 !text-4xl md:text-2xl w-full text-stroke-2 text-red !font-body"
          >ВХОД</Tab
        >
        <Tab
          value="1"
          class="bg-dark-grey/70 !text-4xl md:text-2xl w-full text-stroke-2 text-red !font-body"
        >
          РЕГИСТРАЦИЯ</Tab
        >
      </TabList>
      <TabPanels class="bg-orange/0">
        <RegistrationTab/>
        <LoginTab />
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
