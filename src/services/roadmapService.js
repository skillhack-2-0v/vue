// This file stores all roadmap data for different programming languages

// Python Roadmap
const pythonRoadmap = {
  "Python Basics": {
    src: {
      "Official Python Documentation":
        "https://docs.python.org/3/tutorial/index.html",
      "Python for Beginners": "https://www.python.org/about/gettingstarted/",
      "Real Python - Basics": "https://realpython.com/python-basics/",
    },
    courses: {
      "Codecademy - Learn Python":
        "https://www.codecademy.com/learn/learn-python-3",
      "Coursera - Python for Everybody":
        "https://www.coursera.org/specializations/python",
      "freeCodeCamp - Python Tutorial":
        "https://www.freecodecamp.org/news/python-curriculum/",
    },
    difficulty: "Beginner",
    completed: false,
    icon: "pi-code",
    description:
      "Learn Python syntax, variables, data types, conditionals, and loops",
  },
  "Data Structures": {
    src: {
      "Python Data Structures":
        "https://docs.python.org/3/tutorial/datastructures.html",
      "Real Python - Data Structures":
        "https://realpython.com/python-data-structures/",
    },
    courses: {
      "Udemy - Python Data Structures":
        "https://www.udemy.com/course/python-data-structures-a-to-z/",
      "Coursera - Data Structures with Python":
        "https://www.coursera.org/learn/python-data-structures",
    },
    difficulty: "Beginner",
    completed: false,
    icon: "pi-list",
    description:
      "Learn about lists, tuples, dictionaries, sets and when to use each",
  },
  "Functions & Modules": {
    src: {
      "Python Functions":
        "https://docs.python.org/3/tutorial/controlflow.html#defining-functions",
      "Python Modules": "https://docs.python.org/3/tutorial/modules.html",
    },
    courses: {
      "Real Python - Python Modules":
        "https://realpython.com/python-modules-packages/",
    },
    difficulty: "Beginner",
    completed: false,
    icon: "pi-cog",
    description:
      "Master functions, arguments, return values, modules and packages",
  },
  "File I/O": {
    src: {
      "Python File I/O":
        "https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files",
      "Working with Files":
        "https://realpython.com/working-with-files-in-python/",
    },
    courses: {
      "Codecademy - Python File Handling":
        "https://www.codecademy.com/learn/learn-python-3/modules/learn-python3-files",
    },
    difficulty: "Beginner",
    completed: false,
    icon: "pi-file",
    description:
      "Learn to read from and write to files, handle different file formats",
  },
  "Object-Oriented Programming": {
    src: {
      "Python Classes": "https://docs.python.org/3/tutorial/classes.html",
      "Real Python - OOP":
        "https://realpython.com/python3-object-oriented-programming/",
    },
    courses: {
      "Coursera - OOP in Python":
        "https://www.coursera.org/learn/python-object-oriented-programming",
      "Udemy - Object-Oriented Python":
        "https://www.udemy.com/course/object-oriented-python-programming/",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-sitemap",
    description:
      "Understand classes, objects, inheritance, encapsulation, and polymorphism",
  },
  "Error Handling": {
    src: {
      "Python Exceptions": "https://docs.python.org/3/tutorial/errors.html",
      "Real Python - Exception Handling":
        "https://realpython.com/python-exceptions/",
    },
    courses: {
      "Programiz - Python Exception Handling":
        "https://www.programiz.com/python-programming/exception-handling",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-exclamation-triangle",
    description:
      "Learn about exceptions, try/except blocks, and custom exceptions",
  },
  "Libraries & Frameworks": {
    src: {
      "Python Package Index (PyPI)": "https://pypi.org/",
      "Awesome Python": "https://github.com/vinta/awesome-python",
    },
    courses: {
      "Real Python - Python Libraries":
        "https://realpython.com/tutorials/libraries/",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-book",
    description:
      "Explore standard library and third-party packages for different applications",
  },
  "Web Development": {
    src: {
      "Flask Documentation": "https://flask.palletsprojects.com/",
      "Django Documentation": "https://docs.djangoproject.com/",
    },
    courses: {
      "Flask Mega-Tutorial":
        "https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world",
      "Django for Beginners": "https://djangoforbeginners.com/",
      "Real Python - Django": "https://realpython.com/tutorials/django/",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-globe",
    description: "Build web applications using Flask or Django frameworks",
  },
  "Data Science": {
    src: {
      "NumPy Documentation": "https://numpy.org/doc/",
      "Pandas Documentation": "https://pandas.pydata.org/docs/",
      "Matplotlib Documentation": "https://matplotlib.org/stable/contents.html",
    },
    courses: {
      "Kaggle - Python for Data Science": "https://www.kaggle.com/learn/python",
      "DataCamp - Python for Data Science":
        "https://www.datacamp.com/tracks/data-scientist-with-python",
      "Coursera - Data Science in Python":
        "https://www.coursera.org/specializations/data-science-python",
    },
    difficulty: "Advanced",
    completed: false,
    icon: "pi-chart-bar",
    description:
      "Analyze and visualize data with NumPy, Pandas, and Matplotlib",
  },
  "Machine Learning": {
    src: {
      "Scikit-Learn Documentation":
        "https://scikit-learn.org/stable/documentation.html",
      "TensorFlow Documentation": "https://www.tensorflow.org/api_docs",
      "PyTorch Documentation": "https://pytorch.org/docs/stable/index.html",
    },
    courses: {
      "Coursera - Machine Learning with Python":
        "https://www.coursera.org/learn/machine-learning-with-python",
      "Fast.ai - Practical Deep Learning": "https://course.fast.ai/",
      "Udacity - Machine Learning":
        "https://www.udacity.com/course/machine-learning--ud262",
    },
    difficulty: "Advanced",
    completed: false,
    icon: "pi-server",
    description: "Build ML models with scikit-learn, TensorFlow, and PyTorch",
  },
  "Automation & Scripting": {
    src: {
      "Automate the Boring Stuff": "https://automatetheboringstuff.com/",
      "Python Scripting Tutorial": "https://realpython.com/python-scripting/",
    },
    courses: {
      "Udemy - Python Automation": "https://www.udemy.com/course/automate/",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-cog",
    description: "Create scripts to automate tasks and processes",
  },
  Testing: {
    src: {
      "Python unittest": "https://docs.python.org/3/library/unittest.html",
      "pytest Documentation": "https://docs.pytest.org/",
    },
    courses: {
      "Real Python - Python Testing": "https://realpython.com/python-testing/",
      "Test-Driven Development with Python":
        "https://testdriven.io/courses/tdd-python/",
    },
    difficulty: "Advanced",
    completed: false,
    icon: "pi-check-circle",
    description:
      "Write tests for your code using unittest, pytest, and mock objects",
  },
};

// JavaScript Roadmap
const javascriptRoadmap = {
  "JavaScript Basics": {
    src: {
      "MDN JavaScript Guide":
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
      "JavaScript.info": "https://javascript.info/",
      "W3Schools JavaScript": "https://www.w3schools.com/js/",
    },
    courses: {
      "Codecademy - Learn JavaScript":
        "https://www.codecademy.com/learn/introduction-to-javascript",
      "freeCodeCamp - JavaScript Algorithms and Data Structures":
        "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
      "Udemy - Modern JavaScript from the Beginning":
        "https://www.udemy.com/course/modern-javascript-from-the-beginning/",
    },
    difficulty: "Beginner",
    completed: false,
    icon: "pi-code",
    description:
      "Learn syntax, variables, data types, operators, and control structures",
  },
  "DOM Manipulation": {
    src: {
      "MDN DOM Introduction":
        "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
      "JavaScript.info DOM": "https://javascript.info/document",
    },
    courses: {
      "Traversy Media - DOM Crash Course":
        "https://www.youtube.com/watch?v=0ik6X4DJKCc",
      "Udemy - DOM Manipulation":
        "https://www.udemy.com/course/javascript-dom-manipulation/",
    },
    difficulty: "Beginner",
    completed: false,
    icon: "pi-sitemap",
    description:
      "Learn to interact with and modify HTML elements using JavaScript",
  },
  "Events & Event Handling": {
    src: {
      "MDN Introduction to Events":
        "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events",
      "JavaScript.info Events": "https://javascript.info/events",
    },
    courses: {
      "Frontend Masters - DOM Events":
        "https://frontendmasters.com/courses/javascript-dom-events/",
    },
    difficulty: "Beginner",
    completed: false,
    icon: "pi-bell",
    description: "Handle user interactions through events and event listeners",
  },
  "Functions & Scope": {
    src: {
      "MDN Functions":
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
      "JavaScript.info Functions": "https://javascript.info/function-basics",
    },
    courses: {
      "Udemy - JavaScript Functions":
        "https://www.udemy.com/course/understand-javascript-functions/",
    },
    difficulty: "Beginner",
    completed: false,
    icon: "pi-cog",
    description: "Master function types, closures, and scoping in JavaScript",
  },
  "Asynchronous JavaScript": {
    src: {
      "MDN Asynchronous JavaScript":
        "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous",
      "JavaScript.info Promises & Async/Await": "https://javascript.info/async",
    },
    courses: {
      "Udemy - Asynchronous JavaScript":
        "https://www.udemy.com/course/asynchronous-javascript/",
      "frontendmasters - Asynchronous Programming":
        "https://frontendmasters.com/courses/asynchronous-javascript/",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-spinner",
    description: "Work with callbacks, promises, async/await, and fetch API",
  },
  "ES6+ Features": {
    src: {
      "MDN JavaScript Reference":
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference",
      "ES6 Features Overview": "https://es6-features.org/",
    },
    courses: {
      "Udemy - JavaScript ES6+":
        "https://www.udemy.com/course/javascript-es6-tutorial/",
      "ES6 for Everyone": "https://es6.io/",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-star",
    description:
      "Learn modern JavaScript features like arrow functions, destructuring, and modules",
  },
  "Object-Oriented JavaScript": {
    src: {
      "MDN Object-Oriented JavaScript":
        "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS",
      "JavaScript.info Classes": "https://javascript.info/classes",
    },
    courses: {
      "Pluralsight - Object-Oriented Programming in JavaScript":
        "https://www.pluralsight.com/courses/javascript-objects-prototypes",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-th-large",
    description: "Understand prototypes, classes, inheritance and OOP patterns",
  },
  "Functional Programming": {
    src: {
      "MDN Functional Programming":
        "https://developer.mozilla.org/en-US/docs/Glossary/Functional_programming",
      "JavaScript.info Array Methods": "https://javascript.info/array-methods",
    },
    courses: {
      "Frontend Masters - Functional JavaScript":
        "https://frontendmasters.com/courses/functional-javascript-v3/",
      "Udemy - JavaScript Functional Programming":
        "https://www.udemy.com/course/functional-programming-for-beginners-with-javascript/",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-calculator",
    description:
      "Apply functional programming concepts with map, filter, reduce, and more",
  },
  "Front-End Frameworks": {
    src: {
      "React Documentation": "https://reactjs.org/docs/getting-started.html",
      "Vue.js Documentation": "https://vuejs.org/guide/introduction.html",
      "Angular Documentation": "https://angular.io/docs",
    },
    courses: {
      "React - Official Tutorial": "https://reactjs.org/tutorial/tutorial.html",
      "Vue Mastery": "https://www.vuemastery.com/",
      "Angular - Getting Started": "https://angular.io/start",
    },
    difficulty: "Advanced",
    completed: false,
    icon: "pi-desktop",
    description: "Build applications with React, Vue, or Angular",
  },
  "State Management": {
    src: {
      "Redux Documentation": "https://redux.js.org/",
      "Vuex Documentation": "https://vuex.vuejs.org/",
      "Context API": "https://reactjs.org/docs/context.html",
    },
    courses: {
      "Egghead - Redux Course":
        "https://egghead.io/courses/fundamentals-of-redux-course-from-dan-abramov-bd5cc867",
      "Vuex for Everyone": "https://vueschool.io/courses/vuex-for-everyone",
    },
    difficulty: "Advanced",
    completed: false,
    icon: "pi-database",
    description: "Manage application state with libraries like Redux or Vuex",
  },
  "Testing JavaScript": {
    src: {
      "Jest Documentation": "https://jestjs.io/docs/getting-started",
      "Testing Library": "https://testing-library.com/docs/",
      "Cypress Documentation": "https://docs.cypress.io/",
    },
    courses: {
      "Udemy - JavaScript Unit Testing":
        "https://www.udemy.com/course/javascript-unit-testing-the-practical-guide/",
      "Testing JavaScript": "https://testingjavascript.com/",
    },
    difficulty: "Advanced",
    completed: false,
    icon: "pi-check-circle",
    description:
      "Write unit, integration, and end-to-end tests for JavaScript applications",
  },
  "Node.js & Backend": {
    src: {
      "Node.js Documentation": "https://nodejs.org/en/docs/",
      "Express.js Documentation": "https://expressjs.com/",
    },
    courses: {
      "Udemy - Node.js Complete Guide":
        "https://www.udemy.com/course/nodejs-the-complete-guide/",
      "Node.js Crash Course": "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
    },
    difficulty: "Advanced",
    completed: false,
    icon: "pi-server",
    description: "Build server-side applications with Node.js and Express",
  },
};

// HTML/CSS Roadmap
const htmlcssRoadmap = {
  "HTML Basics": {
    src: {
      "MDN HTML Basics":
        "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML",
      "W3Schools HTML Tutorial": "https://www.w3schools.com/html/",
      "HTML Living Standard": "https://html.spec.whatwg.org/",
    },
    courses: {
      "Codecademy - Learn HTML": "https://www.codecademy.com/learn/learn-html",
      "freeCodeCamp - Responsive Web Design":
        "https://www.freecodecamp.org/learn/responsive-web-design/",
      "Udemy - HTML & CSS Bootcamp":
        "https://www.udemy.com/course/html-and-css-bootcamp/",
    },
    difficulty: "Beginner",
    completed: false,
    icon: "pi-tag",
    description: "Learn HTML elements, attributes, and document structure",
  },
  "CSS Fundamentals": {
    src: {
      "MDN CSS Basics":
        "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps",
      "W3Schools CSS Tutorial": "https://www.w3schools.com/css/",
      "CSS-Tricks": "https://css-tricks.com/",
    },
    courses: {
      "Codecademy - Learn CSS": "https://www.codecademy.com/learn/learn-css",
      "LinkedIn Learning - CSS Essential Training":
        "https://www.linkedin.com/learning/css-essential-training-3",
    },
    difficulty: "Beginner",
    completed: false,
    icon: "pi-palette",
    description: "Style web pages with selectors, properties, and values",
  },
  "Page Layout & Box Model": {
    src: {
      "MDN Box Model":
        "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model",
      "CSS-Tricks Box Model": "https://css-tricks.com/the-css-box-model/",
    },
    courses: {
      "Wes Bos - What The Flexbox": "https://flexbox.io/",
      "CSS Grid by Wes Bos": "https://cssgrid.io/",
    },
    difficulty: "Beginner",
    completed: false,
    icon: "pi-th-large",
    description:
      "Create layouts using the box model, positioning, and display properties",
  },
  "Responsive Design": {
    src: {
      "MDN Responsive Design":
        "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
      "Google Responsive Web Design Basics":
        "https://developers.google.com/web/fundamentals/design-and-ux/responsive",
    },
    courses: {
      "Udemy - Responsive Web Design":
        "https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/",
      "freeCodeCamp - Responsive Web Design":
        "https://www.freecodecamp.org/learn/responsive-web-design/",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-mobile",
    description: "Build websites that work on all devices with media queries",
  },
  "Flexbox & Grid": {
    src: {
      "MDN Flexbox":
        "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox",
      "MDN Grid":
        "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids",
      "CSS-Tricks Flexbox Guide":
        "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
      "CSS-Tricks Grid Guide":
        "https://css-tricks.com/snippets/css/complete-guide-grid/",
    },
    courses: {
      "Wes Bos - What The Flexbox": "https://flexbox.io/",
      "CSS Grid by Wes Bos": "https://cssgrid.io/",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-table",
    description: "Create advanced layouts with Flexbox and CSS Grid",
  },
  "CSS Animations & Transitions": {
    src: {
      "MDN Using CSS animations":
        "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations",
      "MDN Using CSS transitions":
        "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions",
    },
    courses: {
      "Udemy - CSS Animations":
        "https://www.udemy.com/course/css-animation-transitions-and-transforms-creativity-course/",
      "CSS Animation Rocks": "https://cssanimation.rocks/",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-sliders-v",
    description:
      "Add movement and transitions to create engaging user experiences",
  },
  "CSS Preprocessors": {
    src: {
      "Sass Documentation": "https://sass-lang.com/documentation",
      "Less Documentation": "https://lesscss.org/",
    },
    courses: {
      "Udemy - Advanced CSS and Sass":
        "https://www.udemy.com/course/advanced-css-and-sass/",
      "LinkedIn Learning - Sass Essential Training":
        "https://www.linkedin.com/learning/sass-essential-training",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-code",
    description: "Use Sass or Less to write more maintainable CSS",
  },
  "CSS Frameworks": {
    src: {
      "Bootstrap Documentation": "https://getbootstrap.com/docs/",
      "Tailwind CSS Documentation": "https://tailwindcss.com/docs",
      "Bulma Documentation": "https://bulma.io/documentation/",
    },
    courses: {
      "Udemy - Bootstrap 5 Course":
        "https://www.udemy.com/course/bootstrap-5-from-scratch-build-5-websites/",
      "Scrimba - Learn Tailwind CSS": "https://scrimba.com/learn/tailwind",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-th",
    description:
      "Speed up development with Bootstrap, Tailwind CSS, or other frameworks",
  },
  "CSS Architecture": {
    src: {
      "BEM Methodology": "http://getbem.com/",
      SMACSS: "http://smacss.com/",
      "CSS-Tricks - CSS Architecture":
        "https://css-tricks.com/css-architecture-for-modern-web-applications/",
    },
    courses: {
      "Frontend Masters - CSS In-Depth":
        "https://frontendmasters.com/courses/css-in-depth-v2/",
    },
    difficulty: "Advanced",
    completed: false,
    icon: "pi-sitemap",
    description: "Organize CSS with methodologies like BEM, SMACSS, or OOCSS",
  },
  "CSS Custom Properties & Variables": {
    src: {
      "MDN Custom Properties":
        "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
      "CSS-Tricks CSS Variables":
        "https://css-tricks.com/a-complete-guide-to-custom-properties/",
    },
    courses: {
      "Level Up Tutorials - Custom Properties":
        "https://www.leveluptutorials.com/tutorials/css-variables",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-sliders-h",
    description:
      "Use custom properties to create more dynamic and maintainable CSS",
  },
  "Modern CSS Features": {
    src: {
      "MDN CSS Reference":
        "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",
      "CSS-Tricks - Latest Articles": "https://css-tricks.com/archives/",
    },
    courses: {
      "Frontend Masters - CSS In-Depth v2":
        "https://frontendmasters.com/courses/css-in-depth-v2/",
    },
    difficulty: "Advanced",
    completed: false,
    icon: "pi-star",
    description:
      "Explore CSS Grid, Custom Properties, Subgrid, and other modern features",
  },
  "Web Performance Optimization": {
    src: {
      "MDN Performance":
        "https://developer.mozilla.org/en-US/docs/Learn/Performance",
      "Web.dev - Fast load times": "https://web.dev/fast/",
    },
    courses: {
      "Udemy - Web Performance Optimization":
        "https://www.udemy.com/course/website-performance/",
    },
    difficulty: "Advanced",
    completed: false,
    icon: "pi-bolt",
    description: "Optimize websites for speed and performance",
  },
};

// Java Roadmap
const javaRoadmap = {
  "Java Basics": {
    src: {
      "Oracle Java Tutorials": "https://docs.oracle.com/javase/tutorial/",
      "Java Documentation": "https://docs.oracle.com/en/java/",
      "W3Schools Java Tutorial": "https://www.w3schools.com/java/",
    },
    courses: {
      "Codecademy - Learn Java": "https://www.codecademy.com/learn/learn-java",
      "Udemy - Java Programming Masterclass":
        "https://www.udemy.com/course/java-the-complete-java-developer-course/",
      "Coursera - Java Programming":
        "https://www.coursera.org/specializations/java-programming",
    },
    difficulty: "Beginner",
    completed: false,
    icon: "pi-code",
    description:
      "Learn Java syntax, variables, data types, operators, and control flow",
  },
  "Object-Oriented Programming": {
    src: {
      "Oracle OOP Concepts":
        "https://docs.oracle.com/javase/tutorial/java/concepts/",
      "Java OOP Tutorial": "https://www.javatpoint.com/java-oops-concepts",
    },
    courses: {
      "Udemy - Java OOP":
        "https://www.udemy.com/course/object-oriented-programming-with-java-for-beginners/",
      "Educative - Java for Programmers":
        "https://www.educative.io/courses/learn-java-from-scratch",
    },
    difficulty: "Beginner",
    completed: false,
    icon: "pi-sitemap",
    description:
      "Master classes, objects, inheritance, polymorphism, and encapsulation",
  },
  "Java Collections": {
    src: {
      "Oracle Collections Framework":
        "https://docs.oracle.com/javase/tutorial/collections/",
      "Baeldung Collections": "https://www.baeldung.com/java-collections",
    },
    courses: {
      "Pluralsight - Java Collections":
        "https://www.pluralsight.com/courses/java-collections-fundamentals",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-list",
    description: "Work with lists, sets, maps, and other collection types",
  },
  "Exception Handling": {
    src: {
      "Oracle Exceptions Tutorial":
        "https://docs.oracle.com/javase/tutorial/essential/exceptions/",
      "Java Exception Handling Guide":
        "https://www.baeldung.com/java-exceptions",
    },
    courses: {
      "Udemy - Java Exception Handling":
        "https://www.udemy.com/course/java-exception-handling-best-practices/",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-exclamation-triangle",
    description:
      "Handle runtime errors with try-catch blocks and custom exceptions",
  },
  "Java I/O & Files": {
    src: {
      "Oracle I/O Streams":
        "https://docs.oracle.com/javase/tutorial/essential/io/",
      "Baeldung Java IO": "https://www.baeldung.com/java-io",
    },
    courses: {
      "Udemy - Working with Files in Java":
        "https://www.udemy.com/course/java-input-output/",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-file",
    description:
      "Read and write files, work with streams, and handle file operations",
  },
  "Java Generics": {
    src: {
      "Oracle Generics Tutorial":
        "https://docs.oracle.com/javase/tutorial/java/generics/",
      "Baeldung Java Generics": "https://www.baeldung.com/java-generics",
    },
    courses: {
      "Pluralsight - Java Generics":
        "https://www.pluralsight.com/courses/java-generics",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-box",
    description: "Create type-safe classes and methods with generics",
  },
  "Multithreading & Concurrency": {
    src: {
      "Oracle Concurrency Tutorial":
        "https://docs.oracle.com/javase/tutorial/essential/concurrency/",
      "Baeldung Java Concurrency": "https://www.baeldung.com/java-concurrency",
    },
    courses: {
      "Udemy - Java Multithreading":
        "https://www.udemy.com/course/java-multithreading/",
      "Pluralsight - Java Concurrency":
        "https://www.pluralsight.com/courses/java-concurrency-fundamentals",
    },
    difficulty: "Advanced",
    completed: false,
    icon: "pi-spinner",
    description:
      "Create multithreaded applications and manage concurrency issues",
  },
  "JDBC & Databases": {
    src: {
      "Oracle JDBC Basics":
        "https://docs.oracle.com/javase/tutorial/jdbc/basics/",
      "Baeldung JDBC Guide": "https://www.baeldung.com/java-jdbc",
    },
    courses: {
      "Udemy - Java Database Connection":
        "https://www.udemy.com/course/jdbc-tutorial-learn-java-jdbc-connection-examples/",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-database",
    description: "Connect to databases and perform CRUD operations with JDBC",
  },
  "Java 8+ Features": {
    src: {
      "Oracle Java 8 Features":
        "https://www.oracle.com/technical-resources/articles/java/java8-lambdas.html",
      "Baeldung Java 8": "https://www.baeldung.com/java-8-new-features",
    },
    courses: {
      "Pluralsight - What's New in Java":
        "https://www.pluralsight.com/courses/java-8-whats-new",
      "Udemy - Modern Java":
        "https://www.udemy.com/course/modern-java-learn-java-8-features-by-coding-it/",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-star",
    description:
      "Use lambdas, streams, functional interfaces, and other modern Java features",
  },
  "Build Tools": {
    src: {
      "Maven Documentation": "https://maven.apache.org/guides/",
      "Gradle User Guide":
        "https://docs.gradle.org/current/userguide/userguide.html",
    },
    courses: {
      "Udemy - Apache Maven":
        "https://www.udemy.com/course/apache-maven-beginner-to-guru/",
      "Pluralsight - Gradle Fundamentals":
        "https://www.pluralsight.com/courses/gradle-fundamentals",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-cog",
    description: "Manage dependencies and build projects with Maven or Gradle",
  },
  "Spring Framework": {
    src: {
      "Spring Documentation": "https://spring.io/guides",
      "Baeldung Spring": "https://www.baeldung.com/spring-tutorial",
    },
    courses: {
      "Udemy - Spring Framework":
        "https://www.udemy.com/course/spring-framework-5-beginner-to-guru/",
      "Coursera - Spring Boot":
        "https://www.coursera.org/learn/googlecloud-platforming-spring-framework-applications",
    },
    difficulty: "Advanced",
    completed: false,
    icon: "pi-server",
    description:
      "Build enterprise applications with Spring Framework and Spring Boot",
  },
  "Testing Java Applications": {
    src: {
      "JUnit Documentation":
        "https://junit.org/junit5/docs/current/user-guide/",
      "Mockito Documentation":
        "https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html",
    },
    courses: {
      "Udemy - Java Unit Testing":
        "https://www.udemy.com/course/junit5-for-beginners/",
      "Pluralsight - Java Testing":
        "https://www.pluralsight.com/courses/java-testing-introduction",
    },
    difficulty: "Advanced",
    completed: false,
    icon: "pi-check-circle",
    description:
      "Test Java applications with JUnit, Mockito, and other testing frameworks",
  },
  "Microservices & APIs": {
    src: {
      "Spring Cloud Documentation": "https://spring.io/projects/spring-cloud",
      "Microservices with Spring Boot":
        "https://www.baeldung.com/spring-boot-microservices-building",
    },
    courses: {
      "Udemy - Java Microservices":
        "https://www.udemy.com/course/spring-boot-microservices-and-spring-cloud/",
    },
    difficulty: "Advanced",
    completed: false,
    icon: "pi-cloud",
    description:
      "Build microservices and RESTful APIs with Spring Boot and Spring Cloud",
  },
};

// C++ Roadmap
const cppRoadmap = {
  "C++ Basics": {
    src: {
      "CPlusPlus.com Tutorial": "https://cplusplus.com/doc/tutorial/",
      "LearnCpp.com": "https://www.learncpp.com/",
      "C++ Reference": "https://en.cppreference.com/w/",
    },
    courses: {
      "Codecademy - Learn C++":
        "https://www.codecademy.com/learn/learn-c-plus-plus",
      "Udemy - Beginning C++ Programming":
        "https://www.udemy.com/course/beginning-c-plus-plus-programming/",
      "Coursera - C++ For C Programmers":
        "https://www.coursera.org/learn/c-plus-plus-a",
    },
    difficulty: "Beginner",
    completed: false,
    icon: "pi-code",
    description:
      "Learn C++ syntax, variables, data types, operators, and control flow",
  },
  "Functions & Program Structure": {
    src: {
      "LearnCpp - Functions":
        "https://www.learncpp.com/cpp-tutorial/introduction-to-functions/",
      "CPlusPlus.com - Functions":
        "https://cplusplus.com/doc/tutorial/functions/",
    },
    courses: {
      "Pluralsight - C++ Fundamentals":
        "https://www.pluralsight.com/courses/cplusplus-fundamentals-c17",
    },
    difficulty: "Beginner",
    completed: false,
    icon: "pi-cog",
    description:
      "Master functions, parameters, return values, and program organization",
  },
  "Object-Oriented Programming": {
    src: {
      "LearnCpp - OOP":
        "https://www.learncpp.com/cpp-tutorial/welcome-to-object-oriented-programming/",
      "CPlusPlus.com - Classes": "https://cplusplus.com/doc/tutorial/classes/",
    },
    courses: {
      "Udemy - C++ OOP":
        "https://www.udemy.com/course/object-oriented-programming-using-c-plus-plus/",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-sitemap",
    description:
      "Implement classes, objects, inheritance, polymorphism, and encapsulation",
  },
  "Memory Management": {
    src: {
      "LearnCpp - Dynamic Memory":
        "https://www.learncpp.com/cpp-tutorial/dynamic-memory-allocation-with-new-and-delete/",
      "C++ Reference - Memory Management":
        "https://en.cppreference.com/w/cpp/memory",
    },
    courses: {
      "Udemy - C++ Memory Management":
        "https://www.udemy.com/course/cpp-memory-management/",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-database",
    description:
      "Work with pointers, references, dynamic memory allocation, and smart pointers",
  },
  "STL (Standard Template Library)": {
    src: {
      "C++ Reference - STL": "https://en.cppreference.com/w/cpp/container",
      "CPlusPlus.com - STL": "https://cplusplus.com/reference/stl/",
    },
    courses: {
      "Pluralsight - C++ STL":
        "https://www.pluralsight.com/courses/cplusplus-stl",
      "Udemy - C++ STL":
        "https://www.udemy.com/course/cpp-standard-template-library-in-depth/",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-list",
    description:
      "Use containers, iterators, algorithms, and other STL components",
  },
  "Templates & Generic Programming": {
    src: {
      "LearnCpp - Templates":
        "https://www.learncpp.com/cpp-tutorial/function-templates/",
      "C++ Reference - Templates":
        "https://en.cppreference.com/w/cpp/language/templates",
    },
    courses: {
      "Udemy - C++ Templates": "https://www.udemy.com/course/cpp-templates/",
    },
    difficulty: "Advanced",
    completed: false,
    icon: "pi-box",
    description:
      "Create generic code with templates and metaprogramming techniques",
  },
  "Exception Handling": {
    src: {
      "LearnCpp - Exceptions":
        "https://www.learncpp.com/cpp-tutorial/14-1-the-need-for-exceptions/",
      "C++ Reference - Exceptions":
        "https://en.cppreference.com/w/cpp/error/exception",
    },
    courses: {
      "Pluralsight - C++ Error Handling":
        "https://www.pluralsight.com/courses/cplusplus-error-handling",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-exclamation-triangle",
    description:
      "Handle runtime errors with try-catch blocks and exception safety",
  },
  "File I/O & Streams": {
    src: {
      "CPlusPlus.com - I/O Streams":
        "https://cplusplus.com/doc/tutorial/files/",
      "C++ Reference - I/O Streams": "https://en.cppreference.com/w/cpp/io",
    },
    courses: {
      "Udemy - C++ File Handling":
        "https://www.udemy.com/course/c-plus-plus-programming-step-by-step/",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-file",
    description: "Read and write files, format output, and work with streams",
  },
  "Modern C++ (C++11/14/17/20)": {
    src: {
      "C++ Reference - C++11": "https://en.cppreference.com/w/cpp/11",
      "C++14/17/20 Features":
        "https://en.cppreference.com/w/cpp/compiler_support",
    },
    courses: {
      "Udemy - Modern C++":
        "https://www.udemy.com/course/modern-cpp-concurrency-in-depth/",
      "Pluralsight - Modern C++":
        "https://www.pluralsight.com/courses/cplusplus-11-fundamentals-2",
    },
    difficulty: "Advanced",
    completed: false,
    icon: "pi-star",
    description:
      "Use modern C++ features like lambda expressions, move semantics, and auto",
  },
  "Concurrency & Multithreading": {
    src: {
      "C++ Reference - Thread Support":
        "https://en.cppreference.com/w/cpp/thread",
      "CPlusPlus.com - Multithreading":
        "https://cplusplus.com/reference/thread/thread/",
    },
    courses: {
      "Udemy - C++ Concurrency":
        "https://www.udemy.com/course/cpp-concurrency/",
      "Pluralsight - C++ Concurrency":
        "https://www.pluralsight.com/courses/cplusplus-concurrent-programming",
    },
    difficulty: "Advanced",
    completed: false,
    icon: "pi-spinner",
    description: "Create multithreaded applications and manage concurrency",
  },
  "Build Systems & Tools": {
    src: {
      "CMake Documentation": "https://cmake.org/documentation/",
      "Make Documentation":
        "https://www.gnu.org/software/make/manual/make.html",
    },
    courses: {
      "Udemy - CMake": "https://www.udemy.com/course/cmake-for-beginners/",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-cog",
    description: "Build projects with CMake, Make, or other build systems",
  },
  "Testing C++ Code": {
    src: {
      "Google Test Documentation": "https://google.github.io/googletest/",
      "Catch2 Documentation":
        "https://github.com/catchorg/Catch2/blob/devel/docs/Readme.md",
    },
    courses: {
      "Pluralsight - Testing C++ Code":
        "https://www.pluralsight.com/courses/test-driven-development-modern-cpp",
    },
    difficulty: "Advanced",
    completed: false,
    icon: "pi-check-circle",
    description:
      "Test C++ applications with Google Test, Catch2, or other frameworks",
  },
  "Game Development with C++": {
    src: {
      "SDL Documentation": "https://wiki.libsdl.org/",
      "SFML Documentation": "https://www.sfml-dev.org/documentation/",
      "Unreal Engine Documentation": "https://docs.unrealengine.com/",
    },
    courses: {
      "Udemy - C++ Game Development":
        "https://www.udemy.com/course/unrealcourse/",
      "Coursera - Game Design and Development":
        "https://www.coursera.org/specializations/game-design-and-development",
    },
    difficulty: "Advanced",
    completed: false,
    icon: "pi-desktop",
    description:
      "Create games with C++ using libraries and engines like SDL, SFML, or Unreal",
  },
};

// C# Roadmap
const csharpRoadmap = {
  "C# Basics": {
    src: {
      "Microsoft C# Guide": "https://docs.microsoft.com/en-us/dotnet/csharp/",
      "C# Programming Guide":
        "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/",
      "W3Schools C# Tutorial": "https://www.w3schools.com/cs/index.php",
    },
    courses: {
      "Codecademy - Learn C#": "https://www.codecademy.com/learn/learn-c-sharp",
      "Udemy - C# Basics for Beginners":
        "https://www.udemy.com/course/csharp-tutorial-for-beginners/",
      "Microsoft - Introduction to C#":
        "https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/",
    },
    difficulty: "Beginner",
    completed: false,
    icon: "pi-code",
    description:
      "Learn C# syntax, variables, data types, operators, and control flow",
  },
  "Object-Oriented Programming": {
    src: {
      "Microsoft - OOP in C#":
        "https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/tutorials/oop",
      "C# OOP Concepts":
        "https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/object-oriented/",
    },
    courses: {
      "Udemy - C# OOP Fundamentals":
        "https://www.udemy.com/course/object-oriented-programming-fundamentals-csharp/",
      "Pluralsight - C# OOP":
        "https://www.pluralsight.com/courses/csharp-oop-fundamentals",
    },
    difficulty: "Beginner",
    completed: false,
    icon: "pi-sitemap",
    description:
      "Master classes, objects, inheritance, polymorphism, and encapsulation",
  },
  "Collections & LINQ": {
    src: {
      "Microsoft - Collections":
        "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/collections",
      "Microsoft - LINQ":
        "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/",
    },
    courses: {
      "Pluralsight - C# Collections":
        "https://www.pluralsight.com/courses/csharp-collections",
      "Udemy - LINQ in C#": "https://www.udemy.com/course/linq-in-csharp/",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-list",
    description: "Work with lists, dictionaries, and query data using LINQ",
  },
  "Exception Handling": {
    src: {
      "Microsoft - Exceptions":
        "https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/exceptions/",
      "C# Exception Handling":
        "https://docs.microsoft.com/en-us/dotnet/standard/exceptions/",
    },
    courses: {
      "Pluralsight - Error Handling in C#":
        "https://www.pluralsight.com/courses/defensive-coding-csharp",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-exclamation-triangle",
    description:
      "Handle runtime errors with try-catch blocks and exception handling",
  },
  "Files & I/O": {
    src: {
      "Microsoft - File and Stream I/O":
        "https://docs.microsoft.com/en-us/dotnet/standard/io/",
      "C# File Handling":
        "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/file-system/",
    },
    courses: {
      "Udemy - C# File Operations":
        "https://www.udemy.com/course/csharp-intermediate-programming/",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-file",
    description:
      "Read and write files, work with streams, and handle file operations",
  },
  "Asynchronous Programming": {
    src: {
      "Microsoft - Async Programming":
        "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/",
      "Async and Await":
        "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/async",
    },
    courses: {
      "Pluralsight - Async C#":
        "https://www.pluralsight.com/courses/getting-started-with-asynchronous-programming-dotnet",
      "Udemy - Async in C#":
        "https://www.udemy.com/course/asynchronous-programming-with-c-sharp-and-net/",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-spinner",
    description: "Write non-blocking code with async/await patterns",
  },
  ".NET Framework & .NET Core": {
    src: {
      "Microsoft - .NET Documentation":
        "https://docs.microsoft.com/en-us/dotnet/",
      ".NET Core Guide": "https://docs.microsoft.com/en-us/dotnet/core/",
    },
    courses: {
      "Pluralsight - .NET Core Fundamentals":
        "https://www.pluralsight.com/courses/aspnet-core-fundamentals",
      "Udemy - Complete .NET Core":
        "https://www.udemy.com/course/complete-aspnet-core-31-and-entity-framework-development/",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-box",
    description: "Understand .NET platforms and frameworks",
  },
  "Entity Framework": {
    src: {
      "Microsoft - Entity Framework": "https://docs.microsoft.com/en-us/ef/",
      "EF Core Documentation": "https://docs.microsoft.com/en-us/ef/core/",
    },
    courses: {
      "Pluralsight - Entity Framework Core":
        "https://www.pluralsight.com/courses/entity-framework-core-get-started",
      "Udemy - Entity Framework in Depth":
        "https://www.udemy.com/course/entity-framework-tutorial/",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-database",
    description: "Access databases with Microsoft's ORM framework",
  },
  "ASP.NET Core": {
    src: {
      "Microsoft - ASP.NET Core":
        "https://docs.microsoft.com/en-us/aspnet/core/",
      "ASP.NET Documentation": "https://docs.microsoft.com/en-us/aspnet/",
    },
    courses: {
      "Pluralsight - ASP.NET Core Path":
        "https://www.pluralsight.com/paths/aspnet-core",
      "Udemy - ASP.NET Core MVC":
        "https://www.udemy.com/course/complete-aspnet-core-21-course/",
    },
    difficulty: "Advanced",
    completed: false,
    icon: "pi-server",
    description: "Build web applications and APIs with ASP.NET Core",
  },
  "Dependency Injection": {
    src: {
      "Microsoft - Dependency Injection":
        "https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection",
      "DI in .NET Core":
        "https://docs.microsoft.com/en-us/dotnet/core/extensions/dependency-injection",
    },
    courses: {
      "Pluralsight - Dependency Injection in ASP.NET Core":
        "https://www.pluralsight.com/courses/aspdotnet-core-dependency-injection",
    },
    difficulty: "Intermediate",
    completed: false,
    icon: "pi-sitemap",
    description: "Implement DI patterns for more maintainable applications",
  },
  "Unit Testing": {
    src: {
      "Microsoft - .NET Testing":
        "https://docs.microsoft.com/en-us/dotnet/core/testing/",
      "xUnit Documentation":
        "https://xunit.net/docs/getting-started/netcore/cmdline",
    },
    courses: {
      "Pluralsight - Testing .NET Core Code":
        "https://www.pluralsight.com/courses/dotnet-core-testing-code-xunit-dotnet-getting-started",
      "Udemy - Unit Testing for C# Developers":
        "https://www.udemy.com/course/unit-testing-csharp/",
    },
    difficulty: "Advanced",
    completed: false,
    icon: "pi-check-circle",
    description: "Test C# applications with xUnit, NUnit, or MSTest",
  },
  "Desktop Applications": {
    src: {
      "Windows Forms Documentation":
        "https://docs.microsoft.com/en-us/dotnet/desktop/winforms/",
      "WPF Documentation":
        "https://docs.microsoft.com/en-us/dotnet/desktop/wpf/",
      "UWP Documentation": "https://docs.microsoft.com/en-us/windows/uwp/",
    },
    courses: {
      "Udemy - WPF Course":
        "https://www.udemy.com/course/windows-presentation-foundation-masterclass/",
      "Pluralsight - WPF Path":
        "https://www.pluralsight.com/paths/building-applications-with-wpf",
    },
    difficulty: "Advanced",
    completed: false,
    icon: "pi-desktop",
    description: "Create desktop applications with WPF, Windows Forms, or UWP",
  },
  "Game Development with Unity": {
    src: {
      "Unity Documentation": "https://docs.unity3d.com/Manual/index.html",
      "Unity C# Reference":
        "https://docs.unity3d.com/ScriptReference/index.html",
    },
    courses: {
      "Udemy - Complete C# Unity Game Developer":
        "https://www.udemy.com/course/unitycourse/",
      "Coursera - Unity Certified Programmer":
        "https://www.coursera.org/specializations/unity-certified-programmer",
    },
    difficulty: "Advanced",
    completed: false,
    icon: "pi-play",
    description: "Create games with C# using the Unity engine",
  },
};

// Map skill names to their respective roadmaps
const roadmaps = {
  Python: pythonRoadmap,
  JavaScript: javascriptRoadmap,
  "HTML/CSS": htmlcssRoadmap,
  Java: javaRoadmap,
  "C++": cppRoadmap,
  "C#": csharpRoadmap,
};

// Export the roadmaps object for use in components
export default roadmaps;
