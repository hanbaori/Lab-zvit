const theme = document.getElementById('theme');
const task1 = document.getElementById('task1');
const task3 = document.getElementById('task3');
const task5 = document.getElementById('task5');
const task7 = document.getElementById('task7');
const task9 = document.getElementById('task9');
const task10 = document.getElementById('task10');
const conclusion = document.getElementById('conclusion');
const show = document.getElementById('show');

theme.addEventListener('click', () => {
    show.innerHTML = `
    Тема: ОБ'ЄКТ. МЕТОДИ ОБ'ЄКТА. МАСИВ ОБ'ЄКТІВ. ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ. CALLBACK. СТРІЛОЧНІ ФУНКЦІЇ. СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ.<br>
    Мета: придбати практичні навички роботи з об'єктами. Методи об'єкта.. Callback. Стрілочні функції. Стрілочні функції як колбеки. Реалізація програм засовами мови JAVASCRIPT  <br> 
    <a href="https://github.com/hanbaori/lab6">https://github.com/hanbaori/lab6</a> - посилання на роботу гітхаб<br>
    <a href="https://hanbaori.github.io/lab6/">https://hanbaori.github.io/lab6/</a> - посилання на роботу<br>
    <a href="https://github.com/hanbaori/Lab-zvit">https://github.com/hanbaori/Lab-zvit</a> - посилання на звіт гітхаб<br>
    <a href="https://hanbaori.github.io/Lab-zvit/">https://hanbaori.github.io/Lab-zvit/</a> - посилання на звіт
    `
})
task1.addEventListener('click', () => {
    show.innerHTML = `
    Завдання<br>
    <img src="images/task6.1Task.jpg" alt=""><br>
    Програмний код<br>
    <img src="images/task6.1Code.jpg" alt="" class="imageShow"><br>
    Результат<br>
    <img src="images/task6.1Result.jpg" alt="" class="imageShow"><br>
    <img src="images/task6.1Console.jpg" alt="" class="imageShow"><br>
    `
})
task3.addEventListener('click', () => {
    show.innerHTML = `
    Завдання<br>
    <img src="images/task6.3Task.jpg" alt=""><br>
    Програмний код<br>
    <img src="images/task6.3Code.jpg" alt="" class="imageShow"><br>
    Результат<br>
    <img src="images/task6.3Result.jpg" alt="" class="imageShow"><br>
    <img src="images/task6.3Console.jpg" alt="" class="imageShow"><br>
    `
})
task5.addEventListener('click', () => {
    show.innerHTML = `
    Завдання<br>
    <img src="images/task6.5Task.jpg" alt=""><br>
    Програмний код<br>
    <img src="images/task6.5Code.jpg" alt="" class="imageShow"><br>
    Результат<br>
    <img src="images/task6.5Result.jpg" alt="" class="imageShow"><br>
    <img src="images/task6.5Console.jpg" alt="" class="imageShow"><br>
    `
})
task7.addEventListener('click', () => {
    show.innerHTML = `
    Завдання<br>
    <img src="images/task6.7Task.jpg" alt="" class="imageShow"><br>
    Програмний код<br>
    <img src="images/task6.7Code.jpg" alt="" class="imageShow"><br>
    Результат<br>
    <img src="images/task6.7Result.jpg" alt="" class="imageShow"><br>
    <img src="images/task6.7Console.jpg" alt="" class="imageShow"><br>
    `
})
task9.addEventListener('click', () => {
    show.innerHTML = `
    Завдання<br>
    <img src="images/task6.9Task.jpg" alt="" class="imageShow"><br>
    Програмний код<br>
    <img src="images/task6.9Code.jpg" alt="" class="imageShow"><br>
    Результат<br>
    <img src="images/task6.9Result.jpg" alt="" class="imageShow"><br>
    <img src="images/task6.9Console.jpg" alt="" class="imageShow"><br>
    `
})
task10.addEventListener('click', () => {
    show.innerHTML = `
    Завдання<br>
    <img src="images/task6.10Task.jpg" alt="" class="imageShow"><br>
    Програмний код<br>
    <img src="images/task6.10Code.jpg" alt="" class="imageShow"><br>
    Результат<br>
    <img src="images/task6.10Result.jpg" alt="" class="imageShow"><br>
    <img src="images/task6.10Console.jpg" alt="" class="imageShow"><br>
    `
})
conclusion.addEventListener('click', () => {
    show.innerHTML = `
    <p style="text-align: center; padding-top: 15%;">
    Під час виконнаня лабораторної роботи я зміг здобути практичні навички роботи з конструкціями мови JS, масивами та об'єктами у JS-сценаріях за допомогою реалізації програм
    засобами мови JAVASCRIPT. Об'єкти є зручним інструментом для зберігання структурованих даних, а їх методи дозволяють ефективно працювати з цими даними. 
    Масиви об'єктів дають змогу опрацьовувати велику кількість однотипних даних, використовуючи такі операції, як пошук, сортування чи фільтрація.
    Вивчення цих концепцій допомагає створювати ефективний, структурований і сучасний код, що відповідає найкращим практикам програмування.</p>
    `
})