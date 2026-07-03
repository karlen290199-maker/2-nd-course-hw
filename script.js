let a=10;
alert(a);
a=20;
alert(a);

let firstIPhoneYear = 2007;
alert(firstIPhoneYear);

let creatorName = "Brendan Eich";
alert(creatorName);

let x = 10;
let y = 2;

alert(x + y);  
alert(x - y);  
alert(x * y);  
alert(x / y); 

let result = 2 ** 5;
alert(result);

let a6 = 9;
let b6 = 2;
let result6 = a6 % b6;
alert(result6);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt("Сколько вам лет?");
alert(age);

let user = {
    name: "Карлен",     
    age: 27,              
    isAdmin: true,        
};
alert(user.name);     
alert(user.age);      
alert(user.isAdmin);  

alert("Имя: " + user.name + ", возраст: " + user.age + ", администратор: " + user.isAdmin);

let name = prompt("Введите ваше имя:");
alert(`Привет, ${name}!`);

let password = 'пароль';
let userInput = prompt('Введите пароль');

if (userInput === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

let c = 2;

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let d = 150;
let e = 80;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

a = '2';
let b = '3';

alert(Number(a) + Number(b));

let monthNumber = 12;


if (monthNumber > 13 || monthNumber < 1) {
    console.log("Некорректный номер месяца. Программа не выполняется.");
} else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log("Зима");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Весна");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Лето");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Осень");
            break;
        default:
            console.log("Некорректный номер месяца");
    }
}

for (let i = 0; i < 2; i++) {
    console.log("Привет");
}

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

let o = 7;
while (o <= 22) {
    console.log(o);
    o++;
}

let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (let name in obj) {
    console.log(name + " — зарплата " + obj[name] + " долларов");
}

let n = 1000;
num = 0;

while (n >= 50) {
    n = n / 2;
    num++;
}

console.log("Получившееся число: " + n);
console.log("Количество итераций: " + num);

let firstFriday = 5; 

const daysInMonth = 31;

for (let date = firstFriday; date <= daysInMonth; date += 7) {
    console.log(`Сегодня пятница, ${date}-е число. Необходимо подготовить отчет.`);
}

function minOfTwo(a, b) {
    return a < b ? a : b;
}

console.log(minOfTwo(8, 4));   
console.log(minOfTwo(6, 6));   
console.log(minOfTwo(-3, 7));  

function checkEvenOdd(n) {
    if (n % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(checkEvenOdd(4));  
console.log(checkEvenOdd(7));  
console.log(checkEvenOdd(0));  
console.log(checkEvenOdd(-3)); 

function printSquare(n) {
    console.log(n * n);
}

printSquare(5); 
printSquare(8);  
printSquare(-3); 

function getSquare(n) {
    return n * n;
}

console.log(getSquare(5));  
console.log(getSquare(8));  

result = getSquare(5);
console.log(result);  

let sum = getSquare(5) + getSquare(3);
console.log(sum);  

function correctAge(age) {
    age = Number(age);
    
    if (age < 0) {
        return 'Вы ввели неправильное значение';
    } else if (age >= 0 && age <= 12) {
        return 'Привет, друг!';
    } else if (age >= 13) {
        return 'Добро пожаловать!';
    }
}

alert(correctAge(prompt("Сколько вам лет?")));

function multiplyNumbers(a, b) {
    let num1 = Number(a);
    let num2 = Number(b);
    
    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    }
    
    return num1 * num2;
}

console.log(multiplyNumbers(5, 3));      
console.log(multiplyNumbers(2.5, 4));    
console.log(multiplyNumbers('10', 2));   
console.log(multiplyNumbers('abc', 5));  
console.log(multiplyNumbers(7, 'xyz'));  
console.log(multiplyNumbers('hello', 'world')); 

function cubeNumber() {
    let input = prompt('Введите число:');
    let num = Number(input);
    
    if (isNaN(num)) {
        return 'Переданный параметр не является числом';
    }
    
    let cube = num ** 3;
    return `${num} в кубе равняется ${cube}`;
}

alert(cubeNumber());

let circle1 = {
    radius: 5,
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

let circle2 = {
    radius: 10,
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

console.log(circle1.getArea());      
console.log(circle1.getPerimeter()); 
console.log(circle2.getArea());      
console.log(circle2.getPerimeter()); 

const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function startQuiz() {
    let correctCount = 0;
    const totalQuestions = quiz.length;

    for (let i = 0; i < totalQuestions; i++) {
        const q = quiz[i];
        const optionsText = q.options.join('\n');
        const userInput = prompt(
            `Вопрос ${i+1} из ${totalQuestions}:\n${q.question}\n\n${optionsText}\n\nВведите номер правильного варианта (1, 2 или 3):`
        );

        if (userInput === null) {
            alert('Викторина прервана. Вы нажали "Отмена".');
            return;
        }

        const answerNumber = Number(userInput.trim());
        const isValid = Number.isInteger(answerNumber) && answerNumber >= 1 && answerNumber <= 3;

        if (!isValid) {
            alert(`Некорректный ввод: "${userInput}". Ожидался номер 1, 2 или 3. Ответ засчитан как неверный.`);
        } else {
            if (answerNumber === q.correctAnswer) {
                correctCount++;
            }
        }
    }

    let resultMessage = `Вы ответили правильно на ${correctCount} из ${totalQuestions} вопросов.`;
    if (correctCount === totalQuestions) {
        resultMessage += '\nОтлично! Вы великолепны!';
    } else if (correctCount >= totalQuestions / 2) {
        resultMessage += '\nХороший результат!';
    } else {
        resultMessage += '\nПопробуйте ещё раз, у вас получится!';
    }
    alert(resultMessage);
}

const arr1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
    if (arr1[i] === 10) {
        break;
    }
}

const arr2 = [1, 5, 4, 10, 0, 3];
const index = arr2.indexOf(4);
console.log(index); 

const arr3 = [1, 3, 5, 10, 20];
const joinedResult = arr3.join(' ');
console.log(joinedResult); 

const matrix = [];

for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
        row.push(1);
    }
    matrix.push(row);
}

console.log(matrix); 

const arr4 = [1, 1, 1];
arr4.push(2, 2, 2);
console.log(arr4); 

const arr5 = [9, 8, 7, 'a', 6, 5];

const filteredArr = arr5.filter(item => item !== 'a');

filteredArr.sort((a, b) => a - b);

console.log(filteredArr); 

const arr6 = [9, 8, 7, 6, 5];

const userNumber = prompt('Угадайте число из массива:');
const number = Number(userNumber);

if (arr6.includes(number)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

const str1 = 'abcdef';
const reversed = str1.split('').reverse().join('');
console.log(reversed); 

const arr7 = [[1, 2, 3], [4, 5, 6]];
const flatArr = arr7.flat();
console.log(flatArr); 


const arr8 = [];
for (let i = 0; i < 10; i++) {
    arr8.push(Math.floor(Math.random() * 10) + 1);
}

console.log('Массив:', arr8);

for (let i = 0; i < arr8.length - 1; i++) {
    const sum = arr8[i] + arr8[i + 1];
    console.log(`${arr8[i]} + ${arr8[i+1]} = ${sum}`);
}

function squareArray(arr) {
    return arr.map(num => num ** 2);
}

const numbers = [1, 2, 3, 4, 5];
const squares = squareArray(numbers);
console.log(squares); 

function getStringLengths(arr) {
    return arr.map(str => str.length);
}

const strings = ['hello', 'world', 'JavaScript', 'code'];
const lengths = getStringLengths(strings);
console.log(lengths); 

function getNegativeNumbers(arr) {
    return arr.filter(num => num < 0);
}

const numbers2 = [3, -5, 7, -2, 0, -8, 10, -1];
const negatives = getNegativeNumbers(numbers2);
console.log(negatives); 

const arr9 = [];
for (let i = 0; i < 10; i++) {
    arr9.push(Math.floor(Math.random() * 11)); // от 0 до 10 включительно
}

const evenNumbers = arr9.filter(num => num % 2 === 0);

console.log('Исходный массив:', arr9);
console.log('Чётные значения:', evenNumbers);

const arr10 = [];
for (let i = 0; i < 6; i++) {
    arr10.push(Math.floor(Math.random() * 10) + 1);
}

let totalSum = 0;
for (let i = 0; i < arr10.length; i++) {
    totalSum += arr10[i];
}

const average = totalSum / arr10.length;

console.log('Массив:', arr10);
console.log('Сумма элементов:', totalSum);
console.log('Среднее арифметическое:', average);

function askQuestion() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let guessed = false;

    alert('Я загадал число от 1 до 100. Попробуй угадать!');

    while (!guessed) {
        const userInput = prompt('Введите число от 1 до 100:');
        
        if (userInput === null) {
            alert('Игра прервана. Вы нажали "Отмена".');
            return;
        }

        const guess = Number(userInput.trim());
        
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert(`Ошибка: "${userInput}" - это не число от 1 до 100. Попробуйте ещё раз.`);
            continue;
        }

        attempts++;

        if (guess === secretNumber) {
            alert(`Поздравляю! Вы угадали число ${secretNumber} за ${attempts} попыток!`);
            guessed = true;
        } else if (guess < secretNumber) {
            alert('Загаданное число БОЛЬШЕ');
        } else {
            alert('Загаданное число МЕНЬШЕ');
        }
    }
}

function startArithmetic() {
    let correctCount = 0;
    let totalQuestions = 5;
    
    alert('Добро пожаловать в игру "Простая арифметика"!\nВам будет предложено 5 примеров.\nПопробуйте решить их правильно!');
    
    for (let i = 0; i < totalQuestions; i++) {
        const num1 = Math.floor(Math.random() * 20) + 1;
        const num2 = Math.floor(Math.random() * 20) + 1;
        const operations = ['+', '-', '*', '/'];
        const operation = operations[Math.floor(Math.random() * operations.length)];
        
        let question, correctAnswer;
        
        switch(operation) {
            case '+':
                question = `${num1} + ${num2}`;
                correctAnswer = num1 + num2;
                break;
            case '-':
                const bigger = Math.max(num1, num2);
                const smaller = Math.min(num1, num2);
                question = `${bigger} - ${smaller}`;
                correctAnswer = bigger - smaller;
                break;
            case '*':
                const mult1 = Math.floor(Math.random() * 10) + 1;
                const mult2 = Math.floor(Math.random() * 10) + 1;
                question = `${mult1} * ${mult2}`;
                correctAnswer = mult1 * mult2;
                break;
            case '/':
                const divisor = Math.floor(Math.random() * 10) + 1;
                const quotient = Math.floor(Math.random() * 10) + 1;
                const dividend = divisor * quotient;
                question = `${dividend} / ${divisor}`;
                correctAnswer = quotient;
                break;
        }
        
        const userInput = prompt(`Вопрос ${i+1} из ${totalQuestions}:\n${question} = ?`);
        
        if (userInput === null) {
            alert('Игра прервана. Вы нажали "Отмена".');
            return;
        }
        
        const userAnswer = Number(userInput.trim());
        
        if (isNaN(userAnswer)) {
            alert(`Ошибка: "${userInput}" - это не число. Ответ засчитан как неверный.`);
        } else if (userAnswer === correctAnswer) {
            alert(`Правильно! ${question} = ${correctAnswer}`);
            correctCount++;
        } else {
            alert(`Неправильно! ${question} = ${correctAnswer}, а вы ввели ${userAnswer}`);
        }
    }
    
    let resultMessage = `Вы решили правильно ${correctCount} из ${totalQuestions} примеров.`;
    if (correctCount === totalQuestions) {
        resultMessage += '\nОтлично! Вы великолепны!';
    } else if (correctCount >= totalQuestions / 2) {
        resultMessage += '\nХороший результат!';
    } else {
        resultMessage += '\nПопробуйте ещё раз, у вас получится!';
    }
    alert(resultMessage);
}

function reverseText() {
    alert('Добро пожаловать в игру "Переверни текст"!\nВведите любой текст, и я переверну его задом наперёд.');
    
    const userText = prompt('Введите текст для переворота:');
    
    if (userText === null) {
        alert('Игра прервана. Вы нажали "Отмена".');
        return;
    }
    
    if (userText.trim() === '') {
        alert('Вы не ввели текст. Попробуйте ещё раз.');
        return;
    }
    
    const reversedText = userText.split('').reverse().join('');
    
    alert(`Ваш текст: "${userText}"\nПеревёрнутый текст: "${reversedText}"`);
    
    const continueGame = confirm('Хотите перевернуть ещё один текст?');
    if (continueGame) {
        reverseText();
    } else {
        alert('Спасибо за игру! До свидания!');
    }
}

const str2 = 'JS';
const upperStr = str2.toUpperCase();
console.log(upperStr); 

function filterByString(arr, str) {
    const lowerStr = str.toLowerCase();
    return arr.filter(item => String(item).toLowerCase().startsWith(lowerStr));
}

// Обычные повседневные слова
const words = [
    'дом', 'дорога', 'друг',
    'комната', 'кровать', 'компьютер',
    'смена', 'солнце',
    'мама', 'музыка',
    'работа', 'рюкзак', 'радость',
    'телефон', 'телевизор'  
];

console.log('Слова на "д":', filterByString(words, 'д'));
console.log('Слова на "к":', filterByString(words, 'к'));
console.log('Слова на "с":', filterByString(words, 'с'));
console.log('Слова на "м":', filterByString(words, 'м'));
console.log('Слова на "р":', filterByString(words, 'р'));
console.log('Слова на "т":', filterByString(words, 'т'));

const number3 = 32.58884;

console.log(Math.floor(number3)); 
console.log(Math.ceil(number3));  
console.log(Math.round(number3)); 

const numbers3 = [52, 53, 49, 77, 21, 32];

const minValue = Math.min(...numbers3);
const maxValue = Math.max(...numbers3);

console.log(minValue); 
console.log(maxValue); 

function randomNumber() {
    const num = Math.floor(Math.random() * 10) + 1;
    console.log(num);
}

randomNumber(); 

function generateRandomArray(n) {
    const length = Math.floor(n / 2);
    return Array.from({length}, () => Math.floor(Math.random() * (n + 1)));
}

console.log(generateRandomArray(10)); 
console.log(generateRandomArray(20)); 