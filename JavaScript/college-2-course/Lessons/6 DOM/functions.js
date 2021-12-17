// BOM - Browser Object Model

// this = Window в браузере
// Window - глобальный объект являющийся самой html страницой

// Самые важные вложенные объекты объекта Window

// history   - история браузера
// navigator - инфа о браузере пользователя
// location  - адресная строка браузера
// screen    - экран
// 
// Чтобы узнать свойства вложенных объектов достаточно ввести их в консоль браузера


/*
.querySelector("...") - получить 1 попавшийся тег
.querySelectorAll("...") - получить список из всех совпадений
*/

let capt = document.querySelector("h1"); // Забрать 1 тег h2

console.log(capt);

