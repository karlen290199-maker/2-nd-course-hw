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
