
//Работу выполнил студ. 3ИСИП-621 Еникеев Евгений//

"use strict";
//142.#1//
let month = 6; 

if (month >= 1 && month <= 2 || month === 12) {
  console.log("Зима");
} else if (month >= 3 && month <= 5) {
  console.log("Весна");
} else if (month >= 6 && month <= 8) {
  console.log("Лето");
} else if (month >= 9 && month <= 11) {
  console.log("Осень");
} else {
  console.log("Некорректное число месяца");
}

//142.#2//
let str = 'abcde'; 

if (str.charAt(0) === 'a') {
  console.log('да');
} else {
  console.log('нет');
}

//142.#3//
let number = 12345; // Пример числа

let firstDigit = number.toString().charAt(0); // Преобразуем число в строку и получаем первый символ

if (firstDigit === '1' || firstDigit === '2' || firstDigit === '3') {
  console.log('да');
} else {
  console.log('нет');
}

//142.#4//
let number = 123; 
let sum = 0; 
while(number > 0) { 
    sum += number % 10; number = Math.floor(number / 10); } 
    console.log(sum);

//142.#5//
let number = 123456; 
let firstSum = 0; 
let secondSum = 0;
for(let i = 0; i < 3; i++) {
  firstSum += Number(String(number)[i]); 
}
for(let i = 3; i < 6; i++) { 
  secondSum += Number(String(number)[i]); 
}
if(firstSum === secondSum) { 
  console.log('да'); 
} 
else { console.log('нет'); 
}








