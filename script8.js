const theme = document.getElementById('theme');
const task1 = document.getElementById('task1');
const task2 = document.getElementById('task2');
const conclusion = document.getElementById('conclusion');
const show = document.getElementById('show');

theme.addEventListener('click', () => {
    show.innerHTML = `
    Тема: WEB-СХОВИЩЕ. WEB STORAGE API. МОДУЛЬНОСТЬ КОДУ. СТВОРЕННЯ МОДАЛЬНОГО ВІКНА. ДЕЛЕГУВАННЯ ПОДІЙ.<br>
    Мета: придбати практичні навички роботи створення модального вікна; повторити процес створення макету, зокрема створення макету галереї довільних зображень; закріпити навички роботи з делегуванням подій.  <br> 
    <a href="https://github.com/hanbaori/lab7">https://github.com/hanbaori/lab8</a> - посилання на роботу гітхаб<br>
    <a href="https://hanbaori.github.io/lab7/">https://hanbaori.github.io/lab8/</a> - посилання на роботу<br>
    <a href="https://github.com/hanbaori/Lab-zvit">https://github.com/hanbaori/Lab-zvit</a> - посилання на звіт гітхаб<br>
    <a href="https://hanbaori.github.io/Lab-zvit/">https://hanbaori.github.io/Lab-zvit/</a> - посилання на звіт
    `
})
task1.addEventListener('click', () => {
    show.innerHTML = `
    Макет<br>
    <img src="images/task8.1Figma.jpg" alt="" class="imageShow"><br>
    Сторінка<br>
    <img src="images/task8.1Result.jpg" alt="" class="imageShow"><br>
    Програмний код<br>
    <img src="images/task8.1Code.jpg" alt="" class="imageShow"><br>
    <img src="images/task8.1Code2.jpg" alt="" class="imageShow"><br>
    `
})
task2.addEventListener('click', () => {
    show.innerHTML = `
    Макет<br>
    <img src="images/task8.2Figma.jpg" alt="" class="imageShow"><br>
    Сторінка<br>
    <img src="images/task8.2Result.jpg" alt="" class="imageShow"><br>
    Програмний код<br>
    <img src="images/task8.2Code.jpg" alt="" class="imageShow"><br>
    <img src="images/task8.2Code2.jpg" alt="" class="imageShow"><br>
    `
})
conclusion.addEventListener('click', () => {
    show.innerHTML = `
    <p style="text-align: center; padding-top: 15%;">
    Під час лабораторної роботи вивчено можливості Web Storage API, зокрема локального сховища, для зберігання даних у браузері, що зменшує серверні запити. 
    Особливу увагу приділено модульності коду, створенню модального вікна з базовою функціональністю 
    та делегуванню подій для оптимізації роботи з динамічними елементами DOM.</p>
    `
})