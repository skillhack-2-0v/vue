<script setup>
import RegistrationTab from "@/components/header_components/reglog_components/RegistrationTab.vue";
import LoginTab from "@/components/header_components/reglog_components/LoginTab.vue";

import Dialog from "primevue/dialog";
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
    class="custom-dialog auth-dialog"
    :style="{ width: '90vw', maxWidth: '500px' }"
    :breakpoints="{ '768px': '95vw' }"
    :showHeader="false"
  >
    <div class="bg-bg-medium rounded-lg overflow-hidden">
      <Tabs value="0">
        <TabList class="flex bg-bg-light">
          <Tab
            value="0"
            class="custom-tab flex-1 py-4 text-center font-heading font-bold"
          >
            ВХОД
          </Tab>
          <Tab
            value="1"
            class="custom-tab flex-1 py-4 text-center font-heading font-bold"
          >
            РЕГИСТРАЦИЯ
          </Tab>
        </TabList>

        <div class="p-6">
          <TabPanels>
            <LoginTab />
            <RegistrationTab />
          </TabPanels>
        </div>
      </Tabs>
    </div>
  </Dialog>
</template>

<style lang="scss">
.auth-dialog {
  .p-dialog-content {
    padding: 0 !important;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .p-tabview-nav {
    border: none !important;
  }

  .p-dialog-mask {
    backdrop-filter: blur(8px);
  }

  .p-tablist-active-bar {
    background: var(--primary-color) !important;
    height: 3px !important;
  }

  .p-password-input,
  .p-inputtext {
    background: var(--bg-light) !important;
    color: white !important;
    border-radius: 0.5rem !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;

    &:focus {
      border-color: var(--primary-color) !important;
      box-shadow: 0 0 0 2px rgba(255, 90, 95, 0.2) !important;
    }
  }

  .p-password-input {
    width: 100% !important;
  }

  .p-password-panel {
    background: var(--bg-medium) !important;
    color: white !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
  }

  .p-checkbox .p-checkbox-box {
    background: var(--bg-light) !important;
    border-color: rgba(255, 255, 255, 0.1) !important;

    &.p-highlight {
      background: var(--primary-color) !important;
      border-color: var(--primary-color) !important;
    }
  }
}
</style>
