// Тип данных Number

//Краткая запись чисел с большим количеством нулей

// // let bigNum = 1000000;
// let bigNum = 1e6; // 1 * 1000000
// console.log(bigNum);

// // let smallNum = 0.000001;
// let smallNum = 1e-6; // 1 / 1000000
// console.log(smallNum);


// Перевод из с. с. в с. с.

// let num = 255;
// num = +num.toString(2); // в 2 с. с.
// console.log(num);


// Проблема неточных вычислений
// console.log(Number.EPSILON); Number.EPSILON - очень маленькое число, 
// помогающее решить проблему вычислений с числами с запятой


// isNaN

// console.log(Number(22 + "Ukt,")); // NaN - Ошибка вычисления
// console.log(isNaN(22 + "Ukt,")); // isNaN() - проверка на ошибку

// // функция isNaN() - необходима, т.к.

// if (Number.NaN === Number.NaN || NaN === NaN)
// {
//     console.log("Number.NaN === Number.NaN || NaN === NaN");
// }

// isFinite() - функция для определения конечности (конкретности) числа

// console.log(isFinite("22"));
// console.log(isFinite("Hello!"));
// console.log(isFinite(10 / 0));





