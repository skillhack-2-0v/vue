<script setup>
import TabPanel from "primevue/tabpanel";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
import Password from "primevue/password";
import Divider from "primevue/divider";
import Button from "primevue/button";

import { useLoginStore } from "@/stores/useLoginStore";
import { ref, watch, inject } from "vue";
import { useRouter } from "vue-router";

const loginStore = useLoginStore();
const router = useRouter();
const _visible = inject("_visible");

const _username = ref("");
const _email = ref("");
const _password = ref("");
const _repeated_password = ref("");

const usernameError = ref("");
const emailError = ref("");
const passwordError = ref("");
const repeatedPasswordError = ref("");

watch(_username, (value) => {
  usernameError.value = value.length < 8 ? "Имя пользователя должно содержать не менее 8 символов." : "";
});

watch(_email, (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = emailRegex.test(value) ? "" : "Введите корректный адрес электронной почты.";
});

watch(_password, (value) => {
  passwordError.value = value.length < 8 ? "Пароль должен содержать не менее 8 символов." : "";
  repeatedPasswordError.value = _repeated_password.value === value ? "" : "Пароли не совпадают.";
});

watch(_repeated_password, (value) => {
  repeatedPasswordError.value = value === _password.value ? "" : "Пароли не совпадают.";
});


const handleLogin = () => {
  if (!_username.value) {
    usernameError.value = "Имя пользователя не может быть пустым.";
  } else {
    usernameError.value = ""; 
  }

  if (!_email.value) {
    emailError.value = "Email не может быть пустым.";
  } else {
    emailError.value = ""; 
  }

  if (!_password.value) {
    passwordError.value = "Пароль не может быть пустым.";
  } else {
    passwordError.value = ""; 
  }
  if (!usernameError.value && !emailError.value && !passwordError.value && !repeatedPasswordError.value) {
    loginStore.username = _username.value;
    loginStore.email = _email.value;
    loginStore.isLogged = true;
    _visible.value = false

    router.push("/profile");

    
  } else {
    alert("Заполните все поля корректно.");
  }
};
</script>

<template>
  <TabPanel value="1" class="register-tab flex flex-col space-y-10 pt-4 !font-body">
    <div>
      <FloatLabel>
        <label for="username_log">ИМЯ ПОЛЬЗОВАТЕЛЯ</label>
        <InputText
          id="username_log"
          v-model="_username"
          class="w-full h-12 !bg-white text-2xl text-black rounded-sm"
        />
      </FloatLabel>
      <p v-if="usernameError" class="text-red-500 text-base">{{ usernameError }}</p>
    </div>

    <div>
      <FloatLabel>
        <InputText
          id="email_log"
          v-model="_email"
          class="w-full h-12 !bg-white text-2xl text-black rounded-sm"
        />
        <label for="email_log">EMAIL</label>
      </FloatLabel>
      <p v-if="emailError" class="text-red-500 text-base">{{ emailError }}</p>
    </div>

    <div>
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
          <template #footer>
            <Divider />
            <ul class="pl-2 ml-2 my-0 leading-normal">
              <li>Минимум 8 символов</li>
              <li>Используйте буквы и цифры</li>
              <li>Избегайте простых паролей</li>
            </ul>
          </template>
        </Password>
      </FloatLabel>
      <p v-if="passwordError" class="text-red-500 text-base">{{ passwordError }}</p>
    </div>

    <div>
      <FloatLabel>
        <label for="repeated_password_log">ПОВТОРИТЕ ПАРОЛЬ</label>
        <Password
          v-model="_repeated_password"
          toggleMask
          id="repeated_password_log"
          class="w-full"
          :feedback="false"
        />
      </FloatLabel>
      <p v-if="repeatedPasswordError" class="text-red-500 text-base">{{ repeatedPasswordError }}</p>
    </div>

    <Button
      @click="handleLogin"
      class="bg-red w-1/2 md:w-1/4 my-0 mx-auto text-2xl border-2 border-blue/0 hover:border-red hover:text-white hover:bg-blue/0 rounded-none"
    >
      Войти
    </Button>
  </TabPanel>
</template>

<style lang="scss">
.register-tab {
  .p-password-overlay {
    position: absolute;
    top: 100%;
    left: 0;
  }
  .p-password-input {
    border-radius: 0 !important;
    height: 3rem !important;
    font-size: 1.5rem !important;
  }
}
</style>
