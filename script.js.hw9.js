const header = document.querySelector('.header');
const button = document.querySelector('.button');
const paragraph = document.querySelector("#colorParagraph");
const colorBtn = document.querySelector("#changeColorBtn");
const changeableHeader = document.querySelector("#changeableHeader");
const changeTextBtn = document.querySelector("#changeTextBtn");
const changeDescBtn = document.querySelector("#changeDescriptionBtn");
const resetDescBtn = document.querySelector("#resetDescriptionBtn");
const changeMixedBtn = document.querySelector("#changeMixedBtn");
const resetMixedBtn = document.querySelector("#resetMixedBtn");


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

const originalHeaderText = changeableHeader.textContent;

    changeTextBtn.addEventListener("click", function () {
    changeableHeader.textContent = "Привет, мир!";
    changeableHeader.classList.add("changed");
    changeTextBtn.textContent = "Изменено!";
            
    setTimeout(() => {
        changeTextBtn.textContent = "Изменить текст";
    }, 2000);
});

const descriptionElements = document.querySelectorAll(".description");
const originalTexts = Array.from(descriptionElements).map(el => el.textContent);

function changeAllDescriptions() {
    const descriptions = document.querySelectorAll(".description");
            
        descriptions.forEach(function(element, index) {
            element.textContent = `Измененный текст ${index + 1}`;
            element.classList.add("changed-text");
        });
            
        changeDescBtn.textContent = "Изменено!";
            setTimeout(() => {
                changeDescBtn.textContent = "Изменить все описания";
        }, 2000);
    }

function resetDescriptions() {
    const descriptions = document.querySelectorAll(".description");
            
        descriptions.forEach(function(element, index) {
            element.textContent = originalTexts[index] || `Элемент описания ${index + 1}`;
            element.classList.remove("changed-text");
        });
            
        resetDescBtn.textContent = "Сброшено!";
            setTimeout(() => {
                resetDescBtn.textContent = "Сбросить описания";
        }, 1500);
    }

    changeDescBtn.addEventListener("click", changeAllDescriptions);
    resetDescBtn.addEventListener("click", resetDescriptions);

const mixedElements = document.querySelectorAll(".mixed-item");
const originalMixedTexts = Array.from(mixedElements).map(el => el.textContent);

    function changeAllDescriptionsMixed() {
        const descriptions = document.querySelectorAll(".mixed-item.description");
            
            descriptions.forEach(function(element, index) {
                element.textContent = `Новый текст ${index + 1}`;
                element.classList.add("changed-text-new");
            });
            
            changeMixedBtn.textContent = "Изменено!";
            setTimeout(() => {
                changeMixedBtn.textContent = "Изменить все description";
            }, 2000);
        }

    function resetMixedDescriptions() {
        const allElements = document.querySelectorAll(".mixed-item");
            
            allElements.forEach(function(element, index) {
                element.textContent = originalMixedTexts[index] || `Элемент ${index + 1}`;
                element.classList.remove("changed-text-new");
            });
            
            resetMixedBtn.textContent = "Сброшено!";
            setTimeout(() => {
                resetMixedBtn.textContent = "Сбросить";
            }, 1500);
        }

    changeMixedBtn.addEventListener("click", changeAllDescriptionsMixed);
    resetMixedBtn.addEventListener("click", resetMixedDescriptions);