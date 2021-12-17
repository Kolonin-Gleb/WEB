// BOM - Browser Object Model

// this - window

/* *
* history - история браузера
* navigator - инфа о браузере пользователя
* location - адресная строка браузера
* screen - информация об экране пользователя
* */

/*
* screen.width - разрешение экрана пользователя
* window.outerWidth - ширина окна браузера
* window.innerWidth - ширина видимой области окна браузера (viewport = 100vw)
* */

/* *
* .querySelector("..."); - получить первый попавшийся тег
* .querySelectorAll("..."); - получить список из всех совпадений
* */
let capt = document.querySelector("h2");

console.log(capt);
console.log(capt.offsetWidth);

capt.style.marginLeft = (window.innerWidth - capt.offsetWidth) / 2 + "px";

let inupt = document.querySelector("input[name='message']");

let messageBox = inupt.parentElement.nextElementSibling;

// Функция при нажатии на кнопку
function showMsg()
{
    let time = new Date().toLocaleTimeString();
    console.log(time);
    // messageBox.innerText += ` <div> ${time} + " " + ${inupt.value}+ "" </div>`;
    messageBox.innerHTML += ` <div> ${time} : ${inupt.value}</div>`;
}