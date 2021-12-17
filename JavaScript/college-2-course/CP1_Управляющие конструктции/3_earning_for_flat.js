console.log("Задание 3");

function getRandomInt(min, max) // min и max - целые числа
{
    // Math.random() - в диапозоне [0;1)
    //Максимум и минимум включаются
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let ageInYears = getRandomInt(0, 15);
const PRICE = 6000000;
let wallet = 0;
let present = 0;
let daily_expenses = 0;

// Детство

while (ageInYears < 18)
{
    for (let month = 0; month < 12; month++)
    {
        wallet += 1000; // ежемесечный доход от Отца
        for (let day = 0; day < 30; day++)
        {
            daily_expenses = getRandomInt(0, 200);
            if (wallet >= daily_expenses)
            {
                wallet -= daily_expenses;
            }
        }
    }
    ageInYears++;
    present += 1000; // Каждый ДР получает на 1000 рублей больше чем в предыдущий ДР
    wallet += present;
}

console.log("К 18 годам у Василия будет = " + wallet);

// Юность

let salary = 30000;
const MPOT = 12792; // мин. оплата труда 

// Изначальная ЗП Василия
salary = getRandomInt(MPOT, salary);

while (wallet < PRICE)
{
    for (let month = 0; month < 12; month++)
    {
        for (let workday = 0; workday < 20; workday++)
        {
            wallet -= 200; // Ежедневные раходы на обеды (Ем, только когда работаю)
        }
        wallet -= 2500; // ежемесечный расход на коммуналку
        wallet += salary;
    }
    ageInYears++;
    // Определение повышения
    salary = salary + (getRandomInt(0, 1)*0.1*salary);

    present += 1000; // Каждый ДР получает на 1000 рублей больше чем в предыдущий ДР
    wallet += present;

    console.log('Зарплата = ' + salary + ', Бюджет = ' + wallet + ', Возраст = ' + ageInYears)
}

console.log('Василий накопил на квартиру к ' + ageInYears);

