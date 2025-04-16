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
  usernameError.value =
    value.length < 8
      ? "Имя пользователя должно содержать не менее 8 символов."
      : "";
});

watch(_email, (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = !emailRegex.test(value)
    ? "Введите корректный адрес электронной почты."
    : "";
});

watch(_password, (value) => {
  passwordError.value =
    value.length < 8 ? "Пароль должен содержать не менее 8 символов." : "";
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

    _visible.value = false;
    router.push("/profile");
  } else {
    alert("Заполните все поля корректно.");
  }
};
</script>

<template>
  <TabPanel value="0" class="space-y-6">
    <div>
      <label for="username" class="block mb-2 font-medium"
        >Имя пользователя</label
      >
      <InputText
        id="username"
        v-model="_username"
        class="w-full form-input"
        placeholder="Введите имя пользователя"
      />
      <p v-if="usernameError" class="text-primary text-sm mt-1">
        {{ usernameError }}
      </p>
    </div>

    <div>
      <label for="email" class="block mb-2 font-medium">Email</label>
      <InputText
        id="email"
        v-model="_email"
        class="w-full form-input"
        placeholder="ваш@email.com"
      />
      <p v-if="emailError" class="text-primary text-sm mt-1">
        {{ emailError }}
      </p>
    </div>

    <div>
      <label for="password" class="block mb-2 font-medium">Пароль</label>
      <Password
        v-model="_password"
        toggleMask
        id="password"
        class="w-full"
        placeholder="Введите пароль"
        :feedback="false"
      />
      <p v-if="passwordError" class="text-primary text-sm mt-1">
        {{ passwordError }}
      </p>
    </div>

    <div class="flex items-center gap-2">
      <Checkbox
        v-model="_remember"
        :binary="true"
        name="remember"
        inputId="remember"
      />
      <label for="remember" class="text-sm"> Запомнить меня </label>
    </div>

    <Button @click="handleLogin" class="btn btn-primary w-full mt-4">
      Войти
    </Button>

    <div class="text-center text-gray text-sm">
      <p>Еще нет аккаунта? Нажмите на вкладку "РЕГИСТРАЦИЯ" выше.</p>
    </div>
  </TabPanel>
</template>
