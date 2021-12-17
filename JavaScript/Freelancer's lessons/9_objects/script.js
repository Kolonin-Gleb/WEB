    // 9 Объекты \\

// Создание объекта

// // Синтаксис "Конструктор объекта"
// let user = new Object();

// // Синтаксис "Литерал объекта"
// let admin = {};


// Создание заполненного объекта

// let userInfo = {
//     // Свойство: Значение
//     name: "Вася",
//     age: 30,
//     "favorite language": "C++", // Свойство состоящее из нескольких слов берётся в ""
//     1: true // Именем свойства может быть символ и число
// }

// console.log(userInfo);
// console.log(userInfo.name);
// console.log(userInfo["favorite language"]); // Вывод значения свойства, состоящего из нескольких слов
// console.log(userInfo[1]);


// Создание вложенного объекта

// let userInfo = {
//     name: "Gleb",
//     age: 16,
//     address: {
//         city: "Moscow",
//         metro: "Leninskiy District"
//     }
// }

// console.log(userInfo);
// console.log(userInfo.address);
// console.log(userInfo.address.city);


// Функция создающая объект
// Не путать с конструктором!
// function makeUserInfo(name, age)
// {
//     return {
//         name: name,
//         age: age
//     };
// }

// let user = makeUserInfo("John", 18);
// console.log(user);


// Работа с объектами

// let userInfo = {
//     name: "Bob",
// }

// console.log(userInfo);
// userInfo.age = 30; // Добавление свойства сущ. объекту

// // Добавление объекта в существующий объект
// userInfo.address = {
//     city: "Moscow",
//     metro: "Leninskiy District"
// }
// console.log(userInfo);

// userInfo.address.house = 52; // Добавление свойства внутрь объекта в объекте
// console.log(userInfo);

// delete userInfo.address.house; // Удаление свойства из объекта

// userInfo.name = "Taivin"; // Изменение значения свойства объекта
// console.log(userInfo);


// Создание ссылки на объект

// let userInfo = {
//     name: "Gleb",
//     age: 16,
// }
// // console.log(userInfo);

// // let userReference = userInfo; // Записали ссылку на объект. user не является дубликатом объекта.
// // console.log(userReference);

// // userReference.age = 18; // Изменение значения свойства объекта userInfo по ссылке user
// // console.log(userInfo);

// Создание дубликата объекта

// let userDuplicate = Object.assign({}, userInfo); // Синтаксис дублирования объекта

// userDuplicate.age = 20;

// console.log(userInfo);
// console.log(userDuplicate);


// Проверка существования свойства объекта

// let userInfo = {
//     name: "Gleb",
//     age: 16,
//     // address: {
//     //     city: "Moscow",
//     //     street: "Peace",
//     // }
// }

// // Проверка опциональной цепочкой

// console.log(userInfo?.address?.city); // Если одного из свойств не будет существовать внутри объекта,
// // то вернет undefined, а не ошибку

// // Проверка оператором in

// if ("name" in userInfo) {
//     console.log(userInfo.name);
// }


// Цикл for in

// let userInfo = {
//     name: "Gleb",
//     age: 16,
//     address: {
//         city: "Moscow",
//         street: "Peace",
//     }
// }

// for (let key in userInfo)
// {
//     //Вывод свойств
//     console.log(key);
//     //Вывод значений свойств
//     console.log(userInfo[key]);
// }


// Методы

// let userInfo = {
//     name: "Gleb",
//     age: 16,
//     address: {
//         city: "Moscow",
//         street: "Peace",
//     },
//     showInfo()
//     {
//         console.log(`${this.name}, ${this.age} лет`);
//     }
// }

// userInfo.showInfo();


// Функции-конструкторы

function UserInfo(name)
{
    this.name = name;
    this.age = 30;
}

console.log(new UserInfo("Lena"));
console.log(new UserInfo("Diana"));

