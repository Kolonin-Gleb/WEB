    // 8 Стрелочные функции, рекурсия, планирование: setTimeout и setInterval \\

// Примеры объявления 2 функций


// function showMessage() {
//     console.log("Сообщение");
// }
// showMessage();

// function calcSum(num1 = 0, num2 = 0) // Значения по умолчанию
// {
//     console.log(`Переменная num1 = ${num1}`);
//     console.log(`Переменная num2 = ${num2}`);
    
//     console.log(`Сумма этих переменных = ${num1 + num2}`);

//     return num1 + num2;
// }
// alert(calcSum(5, 3));


// Пример объявления функции через функциональное выражение

// let showMessage = function() {
//     console.log("Сообщение");
// }
// showMessage(); // Вызов функционального выражения, хранящегося в переменной


// Пример объявления 1 строчной стрелочной функции

// В пер. getMessage запишется результат операции после => в зависимости от полученных аргументов 
// let getMessage = (text, name) => text + ", " + name + "!";

// console.log(getMessage('Привет', 'Вася')); // Выведет результат стрелочной функции, т.к. даны аргументы
// console.log(getMessage); // вернет структуру стрелочной функции

// Пример объявления многострочной стрелочной функции

let getMessage = (text, name) => {
    let message = text + ", " + name + "!";
    return message; // У многострочной стрелочной функции return - обязателен
}

console.log(getMessage('Привет', 'Вася'));
