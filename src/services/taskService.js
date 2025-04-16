// @/services/taskService.js

// Демо-задания для различных языков программирования
const tasks = {
  JavaScript: [
    {
      id: "js1",
      title: "Сумма двух чисел",
      description:
        "Напишите функцию <code>sum</code>, которая принимает два числа и возвращает их сумму.",
      difficulty: "Beginner",
      language: "JavaScript",
      functionName: "sum",
      initialCode: "function sum(a, b) {\n  // Ваш код здесь\n  \n}",
      examples: [
        { input: [1, 2], expected: 3 },
        { input: [5, 5], expected: 10 },
      ],
      tests: [
        { input: [1, 2], expected: 3 },
        { input: [5, 5], expected: 10 },
        { input: [-1, 1], expected: 0 },
        { input: [0, 0], expected: 0 },
      ],
      hints: [
        "Используйте оператор + для сложения двух чисел",
        "Не забудьте о возвращении результата с помощью return",
      ],
    },
    {
      id: "js2",
      title: "Реверс строки",
      description:
        "Напишите функцию <code>reverseString</code>, которая принимает строку и возвращает ее в обратном порядке.",
      difficulty: "Beginner",
      language: "JavaScript",
      functionName: "reverseString",
      initialCode: "function reverseString(str) {\n  // Ваш код здесь\n  \n}",
      examples: [
        { input: ["hello"], expected: "olleh" },
        { input: ["JavaScript"], expected: "tpircSavaJ" },
      ],
      tests: [
        { input: ["hello"], expected: "olleh" },
        { input: ["JavaScript"], expected: "tpircSavaJ" },
        { input: [""], expected: "" },
        { input: ["a"], expected: "a" },
      ],
      hints: [
        "Строки можно преобразовать в массив символов с помощью split('')",
        "Массивы имеют метод reverse()",
        "Массив можно соединить обратно в строку с помощью join('')",
      ],
    },
    {
      id: "js3",
      title: "Подсчет гласных",
      description:
        "Напишите функцию <code>countVowels</code>, которая принимает строку и возвращает количество гласных букв в ней. Учитывайте только латинские гласные: a, e, i, o, u.",
      difficulty: "Intermediate",
      language: "JavaScript",
      functionName: "countVowels",
      initialCode: "function countVowels(str) {\n  // Ваш код здесь\n  \n}",
      examples: [
        { input: ["hello"], expected: 2 },
        { input: ["JavaScript"], expected: 3 },
      ],
      tests: [
        { input: ["hello"], expected: 2 },
        { input: ["JavaScript"], expected: 3 },
        { input: ["aeiou"], expected: 5 },
        { input: ["bcdfghjklmnpqrstvwxyz"], expected: 0 },
      ],
      hints: [
        "Создайте массив или строку с гласными буквами",
        "Преобразуйте входную строку в нижний регистр для упрощения проверки",
        "Используйте цикл для перебора символов строки и проверки, является ли каждый символ гласной",
      ],
    },
  ],
  Python: [
    {
      id: "py1",
      title: "Факториал числа",
      description:
        "Напишите функцию <code>factorial</code>, которая вычисляет факториал числа n.",
      difficulty: "Beginner",
      language: "Python",
      functionName: "factorial",
      initialCode: "def factorial(n):\n  # Ваш код здесь\n  \n  return 0",
      examples: [
        { input: [5], expected: 120 },
        { input: [0], expected: 1 },
      ],
      tests: [
        { input: [0], expected: 1 },
        { input: [1], expected: 1 },
        { input: [5], expected: 120 },
        { input: [10], expected: 3628800 },
      ],
      hints: [
        "Факториал 0 равен 1",
        "Для вычисления факториала можно использовать рекурсию или цикл",
      ],
    },
  ],
  "HTML/CSS": [
    {
      id: "html1",
      title: "Создание кнопки",
      description: "Создайте HTML-кнопку с классом 'btn' и текстом 'Click me'.",
      difficulty: "Beginner",
      language: "HTML/CSS",
      functionName: "createButton",
      initialCode:
        "function createButton() {\n  // Верните строку с HTML-кодом кнопки\n  \n}",
      examples: [
        { input: [], expected: '<button class="btn">Click me</button>' },
      ],
      tests: [{ input: [], expected: '<button class="btn">Click me</button>' }],
      hints: [
        "Используйте тег <button> для создания кнопки",
        "Добавьте атрибут class со значением 'btn'",
      ],
    },
  ],
  Java: [
    {
      id: "java1",
      title: "Фибоначчи",
      description:
        "Напишите функцию <code>fibonacci</code>, которая возвращает n-ое число Фибоначчи.",
      difficulty: "Intermediate",
      language: "Java",
      functionName: "fibonacci",
      initialCode:
        "public static int fibonacci(int n) {\n  // Ваш код здесь\n  \n  return 0;\n}",
      examples: [
        { input: [6], expected: 8 },
        { input: [10], expected: 55 },
      ],
      tests: [
        { input: [0], expected: 0 },
        { input: [1], expected: 1 },
        { input: [6], expected: 8 },
        { input: [10], expected: 55 },
      ],
      hints: [
        "Последовательность Фибоначчи: 0, 1, 1, 2, 3, 5, 8, 13, 21...",
        "Каждое число является суммой двух предыдущих",
        "Можно использовать рекурсию или итеративный подход",
      ],
    },
  ],
};

// Сервис для работы с заданиями
const taskService = {
  // Получить все задания
  getAllTasks() {
    return Object.values(tasks).flat();
  },

  // Получить задания по языку
  getTasksByLanguage(language) {
    return tasks[language] || [];
  },

  // Получить задание по ID
  getTaskById(id) {
    const allTasks = this.getAllTasks();
    return allTasks.find((task) => task.id === id);
  },
};

export default taskService;
