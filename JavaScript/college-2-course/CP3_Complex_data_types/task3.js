console.log("Задача 3");


let car1 = {
    // Основные свойства
    color: "black",
    country: "USA",
    pdroductionYear: 2021,
    // Дополнительные свойства
    brand: "Tesla",
    model: "X",
    getInfo: function()
    {
        return `${this.brand} ${this.country} ${this.pdroductionYear} ${this.brand} ${this.model}`;
    }
};

let car2 = {
    // Основные свойства
    color: "white",
    country: "Europe",
    pdroductionYear: 2017,
    // Дополнительные свойства
    brand: "Taggert T",
    model: "777",
    getInfo: function()
    {
        return `${this.brand} ${this.country} ${this.pdroductionYear} ${this.brand} ${this.model}`;
    }
};

let car3 = {
    // Основные свойства
    color: "yellow",
    country: "Lotoran",
    pdroductionYear: 2003,
    // Дополнительные свойства
    brand: "Star",
    model: "T",
    getInfo: function()
    {
        return `${this.brand} ${this.country} ${this.pdroductionYear} ${this.brand} ${this.model}`;
    }
};

let car4 = {
    // Основные свойства
    color: "blue",
    country: "Canada",
    pdroductionYear: 2019,
    // Дополнительные свойства
    brand: "TesKOLOla",
    model: "numvol",
    getInfo: function()
    {
        return `${this.brand} ${this.country} ${this.pdroductionYear} ${this.brand} ${this.model}`;
    }
};

let car5 = {
    // Основные свойства
    color: "green",
    country: "Brasil",
    pdroductionYear: 2016,
    // Дополнительные свойства
    brand: "conto",
    model: "poster",
    getInfo: function()
    {
        return `${this.brand} ${this.country} ${this.pdroductionYear} ${this.brand} ${this.model}`;
    }
};

let car6 = {
    // Основные свойства
    color: "red",
    country: "France",
    pdroductionYear: 2004,
    // Дополнительные свойства
    brand: "Petro",
    model: "pro",
    getInfo: function()
    {
        return `${this.brand} ${this.country} ${this.pdroductionYear} ${this.brand} ${this.model}`;
    }
};

let car7 = {
    // Основные свойства
    color: "grey",
    country: "China",
    pdroductionYear: 2009,
    // Дополнительные свойства
    brand: "PonPon",
    model: "NotNok",
    getInfo: function()
    {
        return `${this.brand} ${this.country} ${this.pdroductionYear} ${this.brand} ${this.model}`;
    }
};

let car8 = {
    // Основные свойства
    color: "pink",
    country: "USA",
    pdroductionYear: 2016,
    // Дополнительные свойства
    brand: "Tesla",
    model: "X",
    getInfo: function()
    {
        return `${this.brand} ${this.country} ${this.pdroductionYear} ${this.brand} ${this.model}`;
    }
};

let car9 = {
    // Основные свойства
    color: "maroon",
    country: "Germany",
    pdroductionYear: 2017,
    // Дополнительные свойства
    brand: "BMW",
    model: "234158",
    getInfo: function()
    {
        return `${this.brand} ${this.country} ${this.pdroductionYear} ${this.brand} ${this.model}`;
    }
};

let car10 = {
    // Основные свойства
    color: "white",
    country: "Russia",
    pdroductionYear: 2000,
    // Дополнительные свойства
    brand: "Tank",
    model: "Putin",
    getInfo: function()
    {
        return `${this.brand} ${this.country} ${this.pdroductionYear} ${this.brand} ${this.model}`;
    }
};

// Создать массив cars, состоящий из 10 автомобилей. 
let cars = [];
cars.push(car1);
cars.push(car2);
cars.push(car3);
cars.push(car4);
cars.push(car5);
cars.push(car6);
cars.push(car7);
cars.push(car8);
cars.push(car9);
cars.push(car10);

// Индексы годов производства автомобилей соответствуют индексам автомобилей в их массиве
let carsProdutionYears = [];

for (let i = 0; i < cars.length; i += 1)
{
    carsProdutionYears.push(cars[i].pdroductionYear);
}

function getMaxOfArray(numArray)
{
    return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray)
{
    return Math.min.apply(null, numArray);
}


indexOfYoungestCar = 0;
console.log("3 Самых молодых автомобиля");
for (let i = 0; i < 3; i++)
{
    indexOfYoungestCar = carsProdutionYears.indexOf(getMinOfArray(carsProdutionYears));
    // Вывод информации
    console.log(cars[indexOfYoungestCar].getInfo());
    // Удаление информации о машине из 2х массивов
    cars.splice(indexOfYoungestCar, 1); // Удаление 1 эл. начиная с индекса
    carsProdutionYears.splice(indexOfYoungestCar, 1);
}

indexOfOldestCar = 0;
console.log("3 Самых старых автомобиля");
for (let i = 0; i < 3; i++)
{
    indexOfOldestCar = carsProdutionYears.indexOf(getMaxOfArray(carsProdutionYears));
    // Вывод информации
    console.log(cars[indexOfOldestCar].getInfo());
    // Удаление информации о машине из 2х массивов
    cars.splice(indexOfOldestCar, 1); // Удаление 1 эл. начиная с индекса
    carsProdutionYears.splice(indexOfOldestCar, 1);
}

// Такой ужасный спаггети код я пишу только на JS...