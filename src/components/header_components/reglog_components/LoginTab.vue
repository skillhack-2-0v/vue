<script setup>
import TabPanel from "primevue/tabpanel";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
import Password from "primevue/password";
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";

import { ref, inject, watch } from "vue";
import { useRouter } from "vue-router";
import { useLoginStore } from "@/stores/useLoginStore";

const _visible = inject("_visible");

const loginStore = useLoginStore();
const router = useRouter();

const _remember = ref(false);
const _username = ref("");
const _email = ref("");
const _password = ref("");

const usernameError = ref("");
const emailError = ref("");
const passwordError = ref("");

watch(_username, (value) => {
  usernameError.value = value.length < 8 ? "Имя пользователя должно содержать не менее 8 символов." : "";
});

watch(_email, (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = !emailRegex.test(value) ? "Введите корректный адрес электронной почты." : "";
});

watch(_password, (value) => {
  passwordError.value = value.length < 8 ? "Пароль должен содержать не менее 8 символов." : "";
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
  if (!usernameError.value && !emailError.value && !passwordError.value) {
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
  <TabPanel value="0" class="login-tab flex flex-col space-y-10 pt-4 !font-body">
    <div>
      <FloatLabel>
        <label for="username">ИМЯ ПОЛЬЗОВАТЕЛЯ</label>
        <InputText
          id="username"
          v-model="_username"
          class="w-full h-12 !bg-white text-2xl text-black rounded-none"
        />
      </FloatLabel>
      <p v-if="usernameError" class="text-red-500 text-base">{{ usernameError }}</p>
    </div>
    
    <div>
      <FloatLabel>
        <InputText
          id="email"
          v-model="_email"
          class="w-full h-12 !bg-white text-2xl text-black rounded-none"
        />
        <label for="email">EMAIL</label>
      </FloatLabel>
      <p v-if="emailError" class="text-red-500 text-base">{{ emailError }}</p>
    </div>
    
    <div>
      <FloatLabel>
        <label for="password">ПАРОЛЬ</label>
        <Password
          v-model="_password"
          toggleMask
          id="password"
          class="w-full"
          :feedback="false"
        />
      </FloatLabel>
      <p v-if="passwordError" class="text-red-500 text-base">{{ passwordError }}</p>
    </div>
    
    <div class="flex space-x-6 items-center">
      <Checkbox
        v-model="_remember"
        :binary="true"
        name="remember"
      />
      <label for="remember" class="text-red text-base md:text-2xl">
        Запомнить меня
      </label>
    </div>

    <Button
      @click="handleLogin"
      class="bg-red w-1/2 md:w-1/4 my-0 mx-auto text-2xl border-2 border-blue/0 hover:text-red hover:border-red hover:bg-blue/0 rounded-none"
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
    font-size: 1.5rem !important;
  }


}
</style>