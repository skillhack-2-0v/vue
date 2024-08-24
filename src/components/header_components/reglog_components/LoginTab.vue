<script setup>
import TabPanel from "primevue/tabpanel";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
import Password from "primevue/password";
import Divider from "primevue/divider";
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";
import { useLoginStore } from "@/stores/useLoginStore";
import { ref, inject } from "vue";

const _visible = inject("_visible");

const _remember = ref(false);

const _username = ref("");
const _email = ref("");
const _password = ref("");
</script>

<template>
  <TabPanel value="0" class="login-tab flex flex-col space-y-10 pt-4">
    <FloatLabel>
      <label for="username">ИМЯ ПОЛЬЗОВАТЕЛЯ</label>

      <InputText
        id="username"
        v-model="_username"
        class="w-full h-12 !bg-white text-xl text-black rounded-none"
      />
    </FloatLabel>
    <FloatLabel>
      <InputText
        id="email"
        v-model="_email"
        class="w-full h-12 !bg-white text-xl text-black rounded-none"
      />
      <label for="email">EMAIL</label>
    </FloatLabel>
    <FloatLabel>
      <label for="password">ПАРОЛЬ</label>

      <Password
        v-model="_password"
        toggleMask
        id="password"
        class="w-full"
        :feedback="false"
      >
        <template #header>
          <div class="font-semibold text-xs mb-4">ВВЕДИТЕ ПАРОЛЬ</div>
        </template>
        <template #footer class="w-1/2">
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
    <div class="flex space-x-6 items-center">
      <Checkbox
        v-model="_remember"
        :binary="true"
        name="remember w-20 !rounded-none"
      />
      <label for="remember" class="text-red text-base md:text-xl"
        >Запомнить меня</label
      >
    </div>

    <Button @click="$emit('LoginValidation', _username, _email, _password, _remember)" 
      class="bg-red w-1/2 md:w-1/4 my-0 mx-auto text-lg border-2 border-blue/0 hover:text-red hover:border-red hover:bg-blue/0 rounded-none"
    >
      Войти
    </Button>
  </TabPanel>
</template>
<style lang="scss">
.login-tab {
  .p-checkbox-box {
    background-color: #ffefce;
  }
  .p-checkbox-icon {
    color: #f2b40a;
    font-size: 3rem;
  }
  .p-password-input {
    border-radius: 0 !important;
    height: 3rem !important;
  }
  .p-checkbox-input {
    border-radius: 0 !important;
  }
  .p-checkbox-box {
    border-radius: 0 !important;
  }
  .p-password-input {
    font-size: 1.25rem !important;
  }
}
</style>
