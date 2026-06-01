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