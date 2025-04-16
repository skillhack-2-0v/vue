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
  usernameError.value =
    value.length < 8
      ? "Имя пользователя должно содержать не менее 8 символов."
      : "";
});

watch(_email, (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = emailRegex.test(value)
    ? ""
    : "Введите корректный адрес электронной почты.";
});

watch(_password, (value) => {
  passwordError.value =
    value.length < 8 ? "Пароль должен содержать не менее 8 символов." : "";
  repeatedPasswordError.value =
    _repeated_password.value === value ? "" : "Пароли не совпадают.";
});

watch(_repeated_password, (value) => {
  repeatedPasswordError.value =
    value === _password.value ? "" : "Пароли не совпадают.";
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

  if (
    !usernameError.value &&
    !emailError.value &&
    !passwordError.value &&
    !repeatedPasswordError.value
  ) {
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
  <TabPanel value="1" class="space-y-6">
    <div>
      <label for="username_log" class="block mb-2 font-medium"
        >Имя пользователя</label
      >
      <InputText
        id="username_log"
        v-model="_username"
        class="w-full form-input"
        placeholder="Придумайте имя пользователя"
      />
      <p v-if="usernameError" class="text-primary text-sm mt-1">
        {{ usernameError }}
      </p>
    </div>

    <div>
      <label for="email_log" class="block mb-2 font-medium">Email</label>
      <InputText
        id="email_log"
        v-model="_email"
        class="w-full form-input"
        placeholder="ваш@email.com"
      />
      <p v-if="emailError" class="text-primary text-sm mt-1">
        {{ emailError }}
      </p>
    </div>

    <div>
      <label for="password_log" class="block mb-2 font-medium">Пароль</label>
      <Password
        v-model="_password"
        toggleMask
        id="password_log"
        class="w-full"
        placeholder="Придумайте пароль"
      >
        <template #header>
          <div class="mb-2 p-2 bg-bg-light rounded">
            <h5 class="font-medium mb-1">Требования к паролю:</h5>
            <ul class="text-sm text-gray">
              <li>Минимум 8 символов</li>
              <li>Включите цифры и буквы</li>
              <li>Используйте специальные символы для надежности</li>
            </ul>
          </div>
        </template>
      </Password>
      <p v-if="passwordError" class="text-primary text-sm mt-1">
        {{ passwordError }}
      </p>
    </div>

    <div>
      <label for="repeated_password_log" class="block mb-2 font-medium"
        >Повторите пароль</label
      >
      <Password
        v-model="_repeated_password"
        toggleMask
        id="repeated_password_log"
        class="w-full"
        placeholder="Повторите пароль"
        :feedback="false"
      />
      <p v-if="repeatedPasswordError" class="text-primary text-sm mt-1">
        {{ repeatedPasswordError }}
      </p>
    </div>

    <Button @click="handleLogin" class="btn btn-primary w-full mt-4">
      Создать аккаунт
    </Button>

    <div class="text-center text-gray text-sm">
      <p>Уже есть аккаунт? Нажмите на вкладку "ВХОД" выше.</p>
    </div>
  </TabPanel>
</template>
