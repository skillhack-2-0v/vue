<script setup>
import { ref, onMounted, computed, watch, nextTick } from "vue";
import Button from "primevue/button";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import Tooltip from "primevue/tooltip";
import Dialog from "primevue/dialog";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Menu from "primevue/menu";

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const code = ref("");
const output = ref("");
const loading = ref(false);
const testResults = ref([]);
const passedTests = ref(0);
const toast = useToast();
const editorStyle = "height: 450px; border-radius: 0.5rem; overflow: hidden;";
const expandedView = ref(false);
const showHints = ref(false);
const currentHint = ref(0);
const theme = ref("dark"); // dark or light
const fontSize = ref(14);
const autoIndent = ref(true);
const autoComplete = ref(false);
const autoLineHeight = ref(1.5);
const codeTemplates = ref(null);
const templateMenu = ref(null);

// Установка начального шаблона кода
onMounted(() => {
  code.value = props.task.initialCode || "// Введите свой код здесь";

  // Set up code templates for the current language
  codeTemplates.value = [
    {
      label: "Условные выражения",
      items: [
        {
          label: "if-else блок",
          command: () =>
            insertTemplate("if (condition) {\n  // код\n} else {\n  // код\n}"),
        },
        {
          label: "switch-case блок",
          command: () =>
            insertTemplate(
              "switch (value) {\n  case 1:\n    // код\n    break;\n  case 2:\n    // код\n    break;\n  default:\n    // код\n}"
            ),
        },
      ],
    },
    {
      label: "Циклы",
      items: [
        {
          label: "for цикл",
          command: () =>
            insertTemplate(
              "for (let i = 0; i < array.length; i++) {\n  // код\n}"
            ),
        },
        {
          label: "while цикл",
          command: () => insertTemplate("while (condition) {\n  // код\n}"),
        },
        {
          label: "forEach метод",
          command: () =>
            insertTemplate("array.forEach(item => {\n  // код\n});"),
        },
      ],
    },
    {
      label: "Функции",
      items: [
        {
          label: "Стрелочная функция",
          command: () =>
            insertTemplate(
              "const myFunction = (param) => {\n  // код\n  return result;\n};"
            ),
        },
        {
          label: "Функция-декларация",
          command: () =>
            insertTemplate(
              "function myFunction(param) {\n  // код\n  return result;\n}"
            ),
        },
      ],
    },
  ];
});

// Custom function to insert a template at cursor position
const insertTemplate = (template) => {
  // Get editor element
  const editor = document.querySelector(".code-editor textarea");
  if (!editor) return;

  // Get cursor position
  const start = editor.selectionStart;
  const end = editor.selectionEnd;

  // Insert template
  const currentCode = code.value;
  code.value =
    currentCode.substring(0, start) + template + currentCode.substring(end);

  // Set cursor position
  nextTick(() => {
    editor.focus();
    editor.selectionStart = start + template.length;
    editor.selectionEnd = start + template.length;
  });
};

// Show template menu
const showTemplates = (event) => {
  templateMenu.value.toggle(event);
};

// Процент выполненных тестов
const percentComplete = computed(() => {
  if (!props.task.tests || props.task.tests.length === 0) return 0;
  return Math.round((passedTests.value / props.task.tests.length) * 100);
});

// Experience to gain based on completion and difficulty
const experienceToGain = computed(() => {
  const baseXP =
    {
      Beginner: 10,
      Intermediate: 20,
      Advanced: 30,
    }[props.task.difficulty] || 10;

  return Math.round(baseXP * (percentComplete.value / 100));
});

// Next hint
const showNextHint = () => {
  if (currentHint.value < (props.task.hints?.length || 0) - 1) {
    currentHint.value++;
  }
};

// Reset hints
const resetHints = () => {
  currentHint.value = 0;
};

// Функция для запуска кода и выполнения тестов
const runCode = () => {
  loading.value = true;
  output.value = "";
  testResults.value = [];
  passedTests.value = 0;

  try {
    // Создаем песочницу для безопасного выполнения кода
    const sandbox = createSandbox();

    // Выполняем код пользователя в песочнице
    const userFunction = evaluateCode(code.value, sandbox);

    // Запускаем тесты
    runTests(userFunction, sandbox);

    // Если все тесты пройдены, показываем уведомление
    if (passedTests.value === props.task.tests.length) {
      toast.add({
        severity: "success",
        summary: "Успех!",
        detail: `Все тесты пройдены! Ваш персонаж получает ${experienceToGain.value}XP!`,
        life: 5000,
      });
      // Здесь можно добавить логику для начисления опыта персонажу
    }
  } catch (error) {
    output.value = `Ошибка: ${error.message}`;
    toast.add({
      severity: "error",
      summary: "Ошибка",
      detail: error.message,
      life: 5000,
    });
  } finally {
    loading.value = false;
  }
};

// Auto-indent code (basic implementation)
const indentCode = () => {
  if (!autoIndent.value) return;

  const lines = code.value.split("\n");
  let indentLevel = 0;
  const indentChar = "  "; // 2 spaces

  const indented = lines.map((line) => {
    const trimmedLine = line.trim();

    // Decrease indent level for closing brackets
    if (
      trimmedLine.startsWith("}") ||
      trimmedLine.startsWith(")") ||
      trimmedLine.startsWith("]")
    ) {
      indentLevel = Math.max(0, indentLevel - 1);
    }

    // Apply current indent
    const indentedLine = indentChar.repeat(indentLevel) + trimmedLine;

    // Increase indent level for opening brackets
    if (
      trimmedLine.endsWith("{") ||
      trimmedLine.endsWith("(") ||
      trimmedLine.endsWith("[")
    ) {
      indentLevel++;
    }

    return indentedLine;
  });

  code.value = indented.join("\n");
};

// Change theme
const toggleTheme = () => {
  theme.value = theme.value === "dark" ? "light" : "dark";
};

// Increase font size
const increaseFontSize = () => {
  if (fontSize.value < 24) fontSize.value += 2;
};

// Decrease font size
const decreaseFontSize = () => {
  if (fontSize.value > 10) fontSize.value -= 2;
};

// Создание песочницы для выполнения кода
const createSandbox = () => {
  const sandbox = {};

  // Перехватываем console.log для вывода в наш интерфейс
  sandbox.console = {
    log: (...args) => {
      output.value +=
        args
          .map((arg) =>
            typeof arg === "object" ? JSON.stringify(arg, null, 2) : String(arg)
          )
          .join(" ") + "\n";
    },
    error: (...args) => {
      output.value +=
        "Error: " +
        args
          .map((arg) =>
            typeof arg === "object" ? JSON.stringify(arg, null, 2) : String(arg)
          )
          .join(" ") +
        "\n";
    },
  };

  return sandbox;
};

// Выполнение кода пользователя
const evaluateCode = (userCode, sandbox) => {
  // Создаем обертку для кода, чтобы получить функцию пользователя
  const wrappedCode = `
    "use strict";
    ${userCode}
    // Возвращаем функцию, указанную в задании
    return ${props.task.functionName};
  `;

  // Создаем функцию с песочницей в качестве контекста
  const createFunction = Function.apply(null, [
    ...Object.keys(sandbox),
    wrappedCode,
  ]);

  // Выполняем функцию и получаем пользовательскую функцию
  return createFunction.apply(null, [...Object.values(sandbox)]);
};

// Запуск тестов
const runTests = (userFunction, sandbox) => {
  if (!props.task.tests || !Array.isArray(props.task.tests)) {
    output.value = "Тесты не определены для этого задания";
    return;
  }

  props.task.tests.forEach((test, index) => {
    try {
      // Клонируем входные данные, чтобы избежать изменений в оригинальных данных
      const inputClone = JSON.parse(JSON.stringify(test.input));

      // Запускаем пользовательскую функцию с тестовыми входными данными
      const result = userFunction(...inputClone);

      // Проверяем результат
      const passed = compareResults(result, test.expected);

      // Сохраняем результат теста
      testResults.value.push({
        id: index + 1,
        input: test.input,
        expected: test.expected,
        actual: result,
        passed,
      });

      if (passed) {
        passedTests.value++;
      }
    } catch (error) {
      testResults.value.push({
        id: index + 1,
        input: test.input,
        expected: test.expected,
        actual: "Ошибка: " + error.message,
        passed: false,
      });
    }
  });
};

// Сравнение результатов
const compareResults = (actual, expected) => {
  if (typeof actual !== typeof expected) return false;

  if (typeof actual === "object") {
    if (Array.isArray(actual) !== Array.isArray(expected)) return false;

    if (Array.isArray(actual)) {
      if (actual.length !== expected.length) return false;
      return actual.every((val, i) => compareResults(val, expected[i]));
    }

    const actualKeys = Object.keys(actual).sort();
    const expectedKeys = Object.keys(expected).sort();

    if (actualKeys.length !== expectedKeys.length) return false;
    if (!actualKeys.every((key, i) => key === expectedKeys[i])) return false;

    return actualKeys.every((key) =>
      compareResults(actual[key], expected[key])
    );
  }

  return actual === expected;
};

// Получить класс для строки результата теста
const getTestResultClass = (passed) => {
  return passed ? "bg-success/20 text-success" : "bg-primary/20 text-primary";
};

// Форматирование вывода
const formatValue = (value) => {
  if (typeof value === "object") {
    return JSON.stringify(value);
  }
  return String(value);
};

// Handle keyboard shortcuts
const handleKeyDown = (e) => {
  // Run code with Ctrl+Enter or Cmd+Enter
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
    e.preventDefault();
    runCode();
  }

  // Indent code with Tab
  if (e.key === "Tab") {
    e.preventDefault();

    // Get cursor position
    const start = e.target.selectionStart;
    const end = e.target.selectionEnd;

    // Insert tab
    const newCode =
      code.value.substring(0, start) + "  " + code.value.substring(end);
    code.value = newCode;

    // Set cursor position after tab
    nextTick(() => {
      e.target.selectionStart = start + 2;
      e.target.selectionEnd = start + 2;
    });
  }
};
</script>

<template>
  <div class="code-tester gradient-bg rounded-lg overflow-hidden">
    <!-- Заголовок и описание задания -->
    <div class="p-6 bg-bg-medium border-b border-gray/20">
      <div
        class="flex flex-col lg:flex-row justify-between items-start gap-4 mb-4"
      >
        <div>
          <h2 class="text-2xl font-heading font-bold mb-2 flex items-center">
            {{ task.title }}
            <span
              v-if="task.difficulty"
              class="ml-3 text-xs rounded-full px-3 py-1"
              :class="`bg-${
                task.difficulty === 'Beginner'
                  ? 'success'
                  : task.difficulty === 'Intermediate'
                  ? 'warning'
                  : 'primary'
              }/20 
                      text-${
                        task.difficulty === 'Beginner'
                          ? 'success'
                          : task.difficulty === 'Intermediate'
                          ? 'warning'
                          : 'primary'
                      }`"
            >
              {{
                task.difficulty === "Beginner"
                  ? "Начальный"
                  : task.difficulty === "Intermediate"
                  ? "Средний"
                  : "Продвинутый"
              }}
            </span>
          </h2>
          <div class="text-sm text-gray">
            <span
              >Язык: <span class="text-primary">{{ task.language }}</span></span
            >
            <span class="mx-3">•</span>
            <span
              >Опыт:
              <span class="text-success">+{{ experienceToGain }}XP</span></span
            >
          </div>
        </div>

        <div class="flex gap-2">
          <Button
            v-tooltip="'Подсказки'"
            @click="showHints = !showHints"
            class="p-button-rounded p-button-outlined"
            :class="{
              'p-button-warning': !showHints,
              'p-button-success': showHints,
            }"
            icon="pi pi-lightbulb"
          />
          <Button
            v-tooltip="'Полноэкранный режим'"
            @click="expandedView = !expandedView"
            class="p-button-rounded p-button-outlined"
            :class="{
              'p-button-secondary': !expandedView,
              'p-button-success': expandedView,
            }"
            :icon="
              expandedView ? 'pi pi-window-minimize' : 'pi pi-window-maximize'
            "
          />
        </div>
      </div>

      <div class="text-gray mb-4" v-html="task.description"></div>

      <!-- Hints section -->
      <div
        v-if="showHints && task.hints && task.hints.length > 0"
        class="bg-warning/10 border border-warning/30 p-4 rounded-lg mb-6 animate-fadeIn"
      >
        <div class="flex justify-between items-center mb-2">
          <h3 class="font-heading font-bold text-warning flex items-center">
            <i class="pi pi-lightbulb mr-2"></i>
            Подсказка {{ currentHint + 1 }} из {{ task.hints.length }}
          </h3>
          <div class="flex gap-2">
            <Button
              v-if="currentHint < task.hints.length - 1"
              @click="showNextHint"
              class="p-button-sm p-button-warning p-button-text"
              icon="pi pi-arrow-right"
              label="Следующая"
            />
            <Button
              v-if="currentHint > 0"
              @click="resetHints"
              class="p-button-sm p-button-warning p-button-text"
              icon="pi pi-refresh"
              label="Сначала"
            />
          </div>
        </div>
        <p class="text-gray-300">{{ task.hints[currentHint] }}</p>
      </div>

      <!-- Примеры -->
      <div
        v-if="task.examples && task.examples.length > 0"
        class="bg-bg-light p-4 rounded-lg mb-4"
      >
        <h3 class="font-heading font-bold mb-2">Примеры:</h3>
        <div class="space-y-3">
          <div
            v-for="(example, index) in task.examples"
            :key="index"
            class="font-code"
          >
            <div class="mb-1">
              <span class="text-primary">Входные данные:</span>
              {{ formatValue(example.input) }}
            </div>
            <div>
              <span class="text-success">Ожидаемый результат:</span>
              {{ formatValue(example.expected) }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Редактор кода -->
    <div :class="{ 'p-6': !expandedView, 'fullscreen-editor': expandedView }">
      <div
        :class="{
          'grid grid-cols-1 lg:grid-cols-2 gap-6': !expandedView,
          'fullscreen-content': expandedView,
        }"
      >
        <div class="space-y-4">
          <div class="flex justify-between items-center mb-2">
            <div class="flex items-center">
              <h3 class="font-heading font-bold">Ваше решение:</h3>
              <div class="ml-4 flex items-center space-x-2 text-gray text-sm">
                <Button
                  @click="showTemplates"
                  class="p-button-text p-button-sm"
                  icon="pi pi-code"
                  label="Шаблоны"
                />
                <Menu ref="templateMenu" :model="codeTemplates" :popup="true" />
              </div>
            </div>

            <div class="flex items-center gap-1">
              <!-- Editor controls -->
              <Button
                v-tooltip="'Форматировать код'"
                @click="indentCode"
                icon="pi pi-align-left"
                class="p-button-rounded p-button-text p-button-sm"
              />
              <Button
                v-tooltip="theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'"
                @click="toggleTheme"
                :icon="theme === 'dark' ? 'pi pi-sun' : 'pi pi-moon'"
                class="p-button-rounded p-button-text p-button-sm"
              />
              <Button
                v-tooltip="'Уменьшить шрифт'"
                @click="decreaseFontSize"
                icon="pi pi-minus"
                class="p-button-rounded p-button-text p-button-sm"
              />
              <Button
                v-tooltip="'Увеличить шрифт'"
                @click="increaseFontSize"
                icon="pi pi-plus"
                class="p-button-rounded p-button-text p-button-sm"
              />
              <div class="mx-2"></div>
              <Button
                :loading="loading"
                @click="runCode"
                class="btn btn-primary"
                icon="pi pi-play"
                label="Запустить (Ctrl+Enter)"
              />
            </div>
          </div>

          <!-- Редактор кода -->
          <div
            class="code-editor"
            :class="{ 'theme-light': theme === 'light' }"
          >
            <textarea
              v-model="code"
              class="w-full p-4 text-white font-code"
              :class="{
                'bg-bg-dark': theme === 'dark',
                'bg-light-gray text-black': theme === 'light',
              }"
              :style="{
                height: expandedView ? 'calc(100vh - 240px)' : '450px',
                fontSize: `${fontSize}px`,
                lineHeight: autoLineHeight,
              }"
              spellcheck="false"
              @keydown="handleKeyDown"
              placeholder="// Введите ваш код здесь"
            ></textarea>
          </div>

          <div class="text-xs text-gray flex justify-between items-center">
            <div>
              <span class="mr-3">
                <i class="pi pi-info-circle"></i> Используйте Ctrl+Enter для
                запуска кода
              </span>
            </div>
            <div class="flex items-center">
              <i class="pi pi-code"></i>
              <span class="ml-1">{{ task.language }}</span>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <!-- Табы для переключения между результатами -->
          <TabView>
            <!-- Результаты тестов -->
            <TabPanel>
              <template #header>
                <span class="text-xs">Результаты тестов</span>
              </template>
              <div class="flex justify-between items-center mb-4">
                <h3 class="font-heading font-bold">Прогресс:</h3>
                <div class="flex items-center gap-2">
                  <div class="progress-container w-36 h-4">
                    <div
                      class="progress-bar bg-success"
                      :style="`width: ${percentComplete}%`"
                    ></div>
                  </div>
                  <span class="text-xs font-pixel"
                    >{{ passedTests }} /
                    {{ task.tests ? task.tests.length : 0 }}</span
                  >
                </div>
              </div>

              <div
                class="bg-bg-dark p-4 rounded-lg overflow-auto space-y-2"
                :style="{
                  height: expandedView ? 'calc(100vh - 240px)' : '400px',
                }"
              >
                <div
                  v-if="testResults.length === 0"
                  class="text-gray text-center py-10"
                >
                  Запустите код, чтобы увидеть результаты тестов
                </div>

                <div
                  v-for="result in testResults"
                  :key="result.id"
                  class="p-3 rounded-lg mb-2"
                  :class="getTestResultClass(result.passed)"
                >
                  <div class="flex justify-between">
                    <span class="font-bold">Тест #{{ result.id }}</span>
                    <span v-if="result.passed" class="font-pixel"
                      >Пройден ✓</span
                    >
                    <span v-else class="font-pixel">Не пройден ✗</span>
                  </div>
                  <div>
                    <span class="text-gray-300">Входные данные: </span>
                    <span class="font-code">{{
                      formatValue(result.input)
                    }}</span>
                  </div>
                  <div>
                    <span class="text-gray-300">Ожидаемый результат: </span>
                    <span class="font-code">{{
                      formatValue(result.expected)
                    }}</span>
                  </div>
                  <div>
                    <span class="text-gray-300">Фактический результат: </span>
                    <span class="font-code">{{
                      formatValue(result.actual)
                    }}</span>
                  </div>
                </div>
              </div>
            </TabPanel>

            <!-- Вывод консоли -->
            <TabPanel>
              <template #header>
                <span class="text-xs">Консоль</span>
              </template>
              <div
                class="bg-bg-dark p-4 rounded-lg overflow-auto"
                :style="{
                  height: expandedView ? 'calc(100vh - 240px)' : '400px',
                }"
              >
                <pre class="text-light-gray font-code whitespace-pre-wrap">{{
                  output || "Консольный вывод появится здесь"
                }}</pre>
              </div>
            </TabPanel>

            <!-- Документация -->
            <TabPanel>
              <template #header>
                <span class="text-xs">Справка</span>
              </template>
              <div
                class="bg-bg-dark p-4 rounded-lg overflow-auto"
                :style="{
                  height: expandedView ? 'calc(100vh - 240px)' : '400px',
                }"
              >
                <div
                  v-if="task.documentation"
                  v-html="task.documentation"
                ></div>
                <div v-else>
                  <h3 class="font-heading font-bold mb-4">
                    Документация по {{ task.language }}
                  </h3>
                  <p class="text-gray mb-4">
                    Здесь будет отображаться справочная информация по функциям и
                    методам, которые могут понадобиться для решения этой задачи.
                  </p>

                  <div class="bg-bg-light/50 p-4 rounded-lg mb-4">
                    <h4 class="font-bold mb-2">Полезные ресурсы:</h4>
                    <ul class="list-disc pl-5 space-y-2">
                      <li>
                        <a
                          href="https://developer.mozilla.org/ru/docs/Web/JavaScript"
                          target="_blank"
                          class="text-primary hover:underline"
                          >MDN Web Docs</a
                        >
                        - Документация по JavaScript
                      </li>
                      <li>
                        <a
                          href="https://javascript.info/"
                          target="_blank"
                          class="text-primary hover:underline"
                          >JavaScript.info</a
                        >
                        - Современный учебник по JavaScript
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  </div>

  <!-- Добавляем компонент Toast -->
  <Toast />
</template>

<style lang="scss">
.code-editor textarea {
  resize: none;
  font-family: "JetBrains Mono", monospace;
  tab-size: 2;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(255, 90, 95, 0.2);
  }
}

.font-code {
  font-family: "JetBrains Mono", monospace;
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fullscreen-editor {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: var(--bg-medium);
  padding: 1.5rem;
  overflow-y: auto;
}

.fullscreen-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  height: 100%;
}

.theme-light textarea {
  color: #333;
}

/* Custom styling for tabs */
:deep(.p-tabview-nav) {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
  background: transparent !important;
}

:deep(.p-tabview-nav-link) {
  color: var(--gray-color) !important;
  border: none !important;
  border-radius: 0.5rem 0.5rem 0 0 !important;
  padding: 0.75rem 1.25rem !important;
  transition: all 0.3s ease !important;

  &:hover {
    background: rgba(255, 255, 255, 0.05) !important;
    color: white !important;
  }
}

:deep(.p-tabview-selected .p-tabview-nav-link) {
  color: var(--primary-color) !important;
  background: rgba(255, 90, 95, 0.1) !important;
  font-weight: bold !important;
}

:deep(.p-tabview-nav-container) {
  position: relative !important;
}

:deep(.p-tabview-nav-link:focus) {
  box-shadow: none !important;
}
</style>
