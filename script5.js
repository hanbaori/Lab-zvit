const theme = document.getElementById('theme');
const task1 = document.getElementById('task1');
const task2 = document.getElementById('task2');
const task3 = document.getElementById('task3');
const task4 = document.getElementById('task4');
const task5 = document.getElementById('task5');
const conclusion = document.getElementById('conclusion');
const show = document.getElementById('show');

theme.addEventListener('click', () => {
    show.innerHTML = `
    Тема: ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ. ВИКОРИСТАННЯ МАСИВІВ У JS-СЦЕНАРІЯХ. РЕАЛІЗАЦІЯ ПРОГРАМ ЗАСОВАМИ МОВИ JAVASCRIPT <br>
    Мета: придбати практичні навички роботи з конструкціями мови JS, масивами та функціями у js-сценаріях. Реалізація програм засовами мови JAVASCRIPT <br> 
    <a href="https://github.com/hanbaori/lab5">https://github.com/hanbaori/lab5</a> - посилання на роботу гітхаб<br>
    <a href="https://hanbaori.github.io/lab5/">https://hanbaori.github.io/lab5/</a> - посилання на роботу<br>
    <a href="https://github.com/hanbaori/Lab-zvit">https://github.com/hanbaori/Lab-zvit</a> - посилання на звіт гітхаб<br>
    <a href="https://hanbaori.github.io/Lab-zvit/">https://hanbaori.github.io/Lab-zvit/</a> - посилання на звіт
    `
})
task1.addEventListener('click', () => {
    show.innerHTML = `
    Завдання<br>
    <img src="images/task5.1Task.jpg" alt=""><br>
    Програмний код<br>
    <img src="images/task5.1Code.jpg" alt="" class="imageShow"><br>
    Результат<br>
    <img src="images/task5.1Result.jpg" alt="" class="imageShow"><br>
    <img src="images/task5.1Console.jpg" alt="" class="imageShow"><br>
    `
})
task2.addEventListener('click', () => {
    show.innerHTML = `
    Завдання<br>
    <img src="images/task5.2Task.jpg" alt=""><br>
    Програмний код<br>
    <img src="images/task5.2Code.jpg" alt="" class="imageShow"><br>
    Результат<br>
    <img src="images/task5.2Result.jpg" alt="" class="imageShow"><br>
    <img src="images/task5.2Console.jpg" alt="" class="imageShow"><br>
    `
})
task3.addEventListener('click', () => {
    show.innerHTML = `
    Завдання<br>
    <img src="images/task5.3Task.jpg" alt=""><br>
    Програмний код<br>
    <img src="images/task5.3Code.jpg" alt="" class="imageShow"><br>
    Результат<br>
    <img src="images/task5.3Result.jpg" alt="" class="imageShow"><br>
    <img src="images/task5.3Console.jpg" alt="" class="imageShow"><br>
    `
})
task4.addEventListener('click', () => {
    show.innerHTML = `
    Завдання<br>
    <img src="images/task5.4Task.jpg" alt="" class="imageShow"><br>
    Програмний код<br>
    <img src="images/task5.4Code.jpg" alt="" class="imageShow"><br>
    Результат<br>
    <img src="images/task5.4Result.jpg" alt="" class="imageShow"><br>
    <img src="images/task5.4Console.jpg" alt="" class="imageShow"><br>
    `
})
task5.addEventListener('click', () => {
    show.innerHTML = `
    Завдання<br>
    <img src="images/task5.5Task.jpg" alt="" class="imageShow"><br>
    Програмний код<br>
    <img src="images/task5.5Code1.jpg" alt="" class="imageShow"><br>
    <img src="images/task5.5Code2.jpg" alt="" class="imageShow"><br>
    Результат<br>
    <img src="images/task5.5Result.jpg" alt="" class="imageShow"><br>
    <img src="images/task5.5Console.jpg" alt="" class="imageShow"><br>
    `
})
conclusion.addEventListener('click', () => {
    show.innerHTML = `
    <p style="text-align: center; padding-top: 15%;">
    Під час виконнаня лабораторної роботи я зміг здобути практичні навички роботи з конструкціями мови JS, масивами та функціями у JS-сценаріях за допомогою реалізації програм
    засобами мови JAVASCRIPT.</p>
    `
})