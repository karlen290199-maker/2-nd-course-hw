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

const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 10) {
        break;
    }
}