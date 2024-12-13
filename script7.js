const theme = document.getElementById('theme');
const task1 = document.getElementById('task1');
const task3 = document.getElementById('task3');
const task5 = document.getElementById('task5');
const task7 = document.getElementById('task7');
const task8 = document.getElementById('task8');
const task9 = document.getElementById('task9');
const task10 = document.getElementById('task10');
const conclusion = document.getElementById('conclusion');
const show = document.getElementById('show');

theme.addEventListener('click', () => {
    show.innerHTML = `
    Тема: КЛАСИ. ОБ'ЄКТНА МОДЕЛЬ ДОКУМЕНТА (DOM). ПОДІЇ. ОБ'ЄКТ ПОДІЇ. ДЕЛЕГУВАННЯ ПОДІЙ. <br>
    Мета: придбати практичні навички роботи з об'єктами. Методи об'єкта.. Callback. Стрілочні функції. Стрілочні функції як колбеки. Реалізація програм засовами мови JAVASCRIPT  <br> 
    <a href="https://github.com/hanbaori/lab7">https://github.com/hanbaori/lab7</a> - посилання на роботу гітхаб<br>
    <a href="https://hanbaori.github.io/lab7/">https://hanbaori.github.io/lab7/</a> - посилання на роботу<br>
    <a href="https://github.com/hanbaori/Lab-zvit">https://github.com/hanbaori/Lab-zvit</a> - посилання на звіт гітхаб<br>
    <a href="https://hanbaori.github.io/Lab-zvit/">https://hanbaori.github.io/Lab-zvit/</a> - посилання на звіт
    `
})
task1.addEventListener('click', () => {
    show.innerHTML = `
    Завдання<br>
    <img src="images/task7.1Task.jpg" alt=""><br>
    Програмний код<br>
    <img src="images/task7.1Code.jpg" alt="" class="imageShow"><br>
    Результат<br>
    <img src="images/task7.1Result.jpg" alt="" class="imageShow"><br>
    <img src="images/task7.1Console.jpg" alt="" class="imageShow"><br>
    `
})
task3.addEventListener('click', () => {
    show.innerHTML = `
    Завдання<br>
    <img src="images/task7.3Task.jpg" alt=""><br>
    Програмний код<br>
    <img src="images/task7.3Code.jpg" alt="" class="imageShow"><br>
    Результат<br>
    <img src="images/task7.3Result.jpg" alt="" class="imageShow"><br>
    <img src="images/task7.3Console.jpg" alt="" class="imageShow"><br>
    `
})
task5.addEventListener('click', () => {
    show.innerHTML = `
    Завдання<br>
    <img src="images/task7.5Task.jpg" alt=""><br>
    Програмний код<br>
    <img src="images/task7.5Code.jpg" alt="" class="imageShow"><br>
    Результат<br>
    <img src="images/task7.5Result.jpg" alt="" class="imageShow"><br>
    <img src="images/task7.5Console.jpg" alt="" class="imageShow"><br>
    `
})
task7.addEventListener('click', () => {
    show.innerHTML = `
    Завдання<br>
    <img src="images/task7.7Task.jpg" alt="" class="imageShow"><br>
    Програмний код<br>
    <img src="images/task7.7Code.jpg" alt="" class="imageShow"><br>
    Результат<br>
    <img src="images/task7.7Result.jpg" alt="" class="imageShow"><br>
    <img src="images/task7.7Console.jpg" alt="" class="imageShow"><br>
    `
})
task8.addEventListener('click', () => {
    show.innerHTML = `
    Завдання<br>
    <img src="images/task7.8Task.jpg" alt="" class="imageShow"><br>
    Програмний код<br>
    <img src="images/task7.8Code.jpg" alt="" class="imageShow"><br>
    Результат<br>
    <img src="images/task7.8Result.jpg" alt="" class="imageShow"><br>
    <img src="images/task7.8Console.jpg" alt="" class="imageShow"><br>
    `
})
task9.addEventListener('click', () => {
    show.innerHTML = `
    Завдання<br>
    <img src="images/task7.9Task.jpg" alt="" class="imageShow"><br>
    Програмний код<br>
    <img src="images/task7.9Code.jpg" alt="" class="imageShow"><br>
    Результат<br>
    <img src="images/task7.9Result.jpg" alt="" class="imageShow"><br>
    <img src="images/task7.9Console.jpg" alt="" class="imageShow"><br>
    `
})
task10.addEventListener('click', () => {
    show.innerHTML = `
    Завдання<br>
    <img src="images/task7.10Task.jpg" alt="" class="imageShow"><br>
    Програмний код<br>
    <img src="images/task7.10Code.jpg" alt="" class="imageShow"><br>
    Результат<br>
    <img src="images/task7.10Result.jpg" alt="" class="imageShow"><br>
    <img src="images/task7.10Console.jpg" alt="" class="imageShow"><br>
    `
})
conclusion.addEventListener('click', () => {
    show.innerHTML = `
    <p style="text-align: center; padding-top: 15%;">
    Під час виконання лабораторної роботи були здобуті практичні навички в роботі з з об'єктами, методами об'єкта, Callback, стрілочними функціями, 
    стрілочними функціями як колбеки та реалізацією програм засобами мови JavaScript</p>
    `
})