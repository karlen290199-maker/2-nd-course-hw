const header = document.querySelector('.header');
const button = document.querySelector('.button');
const paragraph = document.querySelector("#colorParagraph");
const colorBtn = document.querySelector("#changeColorBtn");


button.addEventListener('click', function() {
    header.classList.toggle('header--hidden');
            
    if (header.classList.contains('header--hidden')) {
        button.textContent = 'Показать';
        button.classList.add('button--active');
    } else {
        button.textContent = 'Скрыть';
        button.classList.remove('button--active');
    }
});

let isBlue = false;
    colorBtn.addEventListener("click", function () {
    isBlue = !isBlue;
    paragraph.style.color = isBlue ? "#1e3a8a" : "#334155"; 
    colorBtn.textContent = isBlue ? "Вернуть цвет" : "Изменить цвет";
});