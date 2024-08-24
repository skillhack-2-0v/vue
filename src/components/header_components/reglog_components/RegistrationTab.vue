<script setup>
import TabPanel from "primevue/tabpanel";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
import Password from "primevue/password";
import Divider from "primevue/divider";
import Button from "primevue/button";
import { useLoginStore } from "@/stores/useLoginStore";

import { ref } from "vue";

const loginStore = useLoginStore();

const _username = ref("");
const _email = ref("");
const _password = ref("");
const _repeated_password = ref("");
</script>

<template>
  <TabPanel value="1" class="register-tab flex flex-col space-y-10 pt-4">
    <FloatLabel>
      <label for="username_log">ИМЯ ПОЛЬЗОВАТЕЛЯ</label>

      <InputText
        id="username_log"
        v-model="_username"
        class="w-full h-12 !bg-white text-xl text-black rounded-none"
      />
    </FloatLabel>
    <FloatLabel>
      <InputText
        id="email_log"
        v-model="_email"
        class="w-full h-12 !bg-white text-xl text-black rounded-none"
      />
      <label for="email_log">EMAIL</label>
    </FloatLabel>
    <FloatLabel>
      <label for="password_log">ПАРОЛЬ</label>

      <Password
        v-model="_password"
        id="password_log"
        toggleMask
        class="w-full"
        :feedback="false"
      >
        <template #header>
          <div class="font-semibold text-xs mb-4">ВВЕДИТЕ ПАРОЛЬ</div>
        </template>
        <template #footer class="">
          <Divider />
          <ul class="pl-2 ml-2 my-0 leading-normal">
            <li>длавтвыатщуотаущцаот</li>
            <li>длавтвыатщуотаущцаот</li>
            <li>длавтвыатщуотаущцаот</li>
            <li>длавтвыатщуотаущцаот</li>
          </ul>
        </template>
      </Password>
    </FloatLabel>

    <FloatLabel>
      <label for="repeated_password_log">ПОВТОРИТЕ ПАРОЛЬ</label>
      <Password
        toggleMask
        id="repeated_password_log"
        class="w-full"
        v-model="_repeated_password"
        :feedback="false"
      ></Password>
    </FloatLabel>
    <Button
      @click="$emit('RegisterValidation', _username, _email, _password, _repeated_password)"
      class="bg-red w-1/2 md:w-1/4 my-0 mx-auto text-lg border-2 border-blue/0 hover:border-red hover:text-white hover:bg-blue/0 rounded-none"

      >
      Войти
    </Button>
  </TabPanel>
</template>
<style lang="scss">
/* .p-password-input {
  border-radius: 0 !important;
} */
.register-tab {
  .p-password-overlay {
    position: absolute;
    top: 100%;
    left: 0;
  }
  .p-password-input {
    border-radius: 0 !important;
    height: 3rem !important;
    font-size: 1.25rem !important;
  }
}
</style>
