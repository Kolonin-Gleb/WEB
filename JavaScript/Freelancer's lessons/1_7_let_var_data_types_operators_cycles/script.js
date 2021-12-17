// 'use strict' - Включение строгого режима должно происходить в самом начале файла

// let myAge = 16;
// const MY_NAME = "Gleb";

// myAge = 18;
//// myName = "Spy"; Impossible

// console.log("JS text");
// console.log("My age = " + myAge);
// console.log("My age = " + MY_NAME);

// console.log(typeof myAge);

            // 4 Типы данных \\

// Переменная типа number 
// может хранить значения + и - бесконечности

// let negInfinity = -58 / 0;
// console.log(negInfinity);
// console.log(typeof negInfinity);

// let posInfinity = 58 / 0;
// console.log(posInfinity);
// console.log(typeof posInfinity);

// // Тип данных bigint

// let bigInt = 1414513245n;
// console.log(bigInt);
// console.log(typeof bigInt);

// // Тип данных object

// let user = {
//     name: "user1",
//     age: 24
// }

// console.log(user);
// console.log(typeof user);

// // Тип данных Symbol
// // Он служит для присвоения своего типа данных объекту
// let id = Symbol("id");
// console.log(typeof id);

            // 5 Операторы \\

// let str = "24";

// console.log(16 + +str); // Использование унарного оператора для сложения

// // Операторы строгого сравнения проверяют значения без приведения типов данных
// // Строгое равно ===
// // Строгое не равно !==

// console.log(0 === false);
// console.log('007' === 7);
// console.log('58' !== 58);

// С обычными операторами сравнения происходит приведение типов

// console.log(0 == false);
// console.log(24 == '24');

// // Оператор ?

// let message = "Привет, ";

// let messageEnd = (0 > 1) ? "Глеб" : "Егор";

// message += messageEnd;

// console.log(message);

            // 7 Циклы \\

// firstFor: for (let num = 0; num < 2; num++) {
//     for (let size = 0; size < 3; size++) {
//         if (size == 2) {
//             break firstFor; // Использование метки цикла.
//             // break применится к двум циклам сразу
//         }
//         console.log(size);
//     }
// }

