// Все объекты html должны быть константой.
// Т.к. html - это скелет сайта, который должен быть неизменемым.

const form = document.forms.setCard;

const cardHolderInput = form.elements.user;
const cardNumberInput = form.elements.number;
const paymentSystemLogo = form.elements.system;

// console.log(cardHolderInput);
// console.log(cardNumberInput);
// console.log(paymentSystemLogo);

const userElement = document.querySelector(".user");
const numberElement = document.querySelector(".number");
const systemElement = document.querySelector(".system");

const result = document.querySelector("tbody");

// console.log(userElement);
// console.log(numberElement);
// console.log(systemElement);

function setCardNumber(num) {
    let result = num;
    for (let i = result.length; i < 16; i++)
    {
        result += "_";
    }
    return result;
}

// При изменении полей селекта на шаблон карточки накладываем лого
paymentSystemLogo.addEventListener("change", function(e) {
    systemElement.style.backgroundImage = `url(${this.value})`;
});

// Событие на ввод владельца карты
cardHolderInput.addEventListener("input", function(e) {
    userElement.innerText = this.value;
});

// Событие на ввод номера карты
cardNumberInput.addEventListener("input", function(e) {
    let result = setCardNumber(this.value);
    let html = "<span>";

    // Добавление введённого номера карты с разбиением по 4 цифры
    // каждые 4 цифры помещаются в отдельный div
    for (let i = 0; i < result.length; i++) {
        if (i % 4 === 0 && i !== 0)
        {
            html += "</span><span>";
        }
        html += result[i];
    }

    html += "<span>";
    numberElement.innerHTML = html;
});

// Сохранение карточки по кнопке
form.addEventListener("submit", function(event) {
    event.preventDefault(); // предотвращение обновления страницы

    let cardNumber = setCardNumber(cardNumberInput.value);
    let tableCardNumber = "";
    for (let i = 0; i < cardNumber.length; i++)
    {
        // Каждые 4 цифры разделяются пробелом в таблице
        if (i % 4 === 0 && i !== 0)
        {
            tableCardNumber += " ";
        }        
        tableCardNumber += cardNumber[i];
    }

// Контент для добавления в таблицу
    content = `
    <tr>
      <td>${cardHolderInput.value}</td>
      <td>${tableCardNumber}</td>
      <td><img src="${paymentSystemLogo.value}" alt="payment system logo"</td>
    </tr>
    `;

    result.innerHTML += content;
});



