// Функции для заполнения случайными значениями поля класса

function getRandomElement(arr)
{
    return arr[Math.floor(Math.random()*arr.length)];
}

function getRandomInt(min, max) // min и max - целые числа
{
    // Math.random() - в диапозоне [0;1)
    // Максимум и минимум включаются
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomRGB()
{
    rgbColor = [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
    return rgbColor;
}

function getMaxOfArray(numArray)
{
    return Math.max.apply(null, numArray);
}

// Функция-конструктор
function Car(brand, productionYear, mileage, transmission, rgbColor)
{
    this.brand = brand;
    this.productionYear = productionYear;
    this.mileage = mileage;
    this.transmission = transmission;
    this.rgbColor = rgbColor;

    this.getInfo = function()
    {
        return `${this.brand} ${this.productionYear} ${this.mileage} ${this.transmission} ${this.rgbColor}`;
    }
    this.getMileage = function()
    {
        return `${this.mileage}`;
    }
    this.getProductionYear = function()
    {
        return `${this.productionYear}`;
    }
    this.setMileage = function(mileage)
    {
        this.mileage = mileage;
    }
    this.setProductionYear = function(productionYear)
    {
        this.productionYear = productionYear;
    }
}

transmissions = ["auto", "mechanic"];
brands = ["Tesla", "Jeep", "Tayota", "Land Rover", "Ford", "Bugatti", "Bentley", "Mini",
"Volvo", "Lotus", "Lancia", "Hyundai",
"Daewoo", "Dodge", "Mercedes", "Buick",
"Renaut", "Gondo", "Cross", "Tantoo"
];
carsOfBrands = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const AMMOUNT_OF_CARS = 200;

let cars = [];
let brands_of_cars = [];
let mileages_of_cars = [];
let colors_of_cars = [];
for (let car = 0; car < AMMOUNT_OF_CARS; car++)
{
    cars[car] = new Car(getRandomElement(brands), getRandomInt(2000, 2021), getRandomInt(0, 200000), getRandomElement(transmissions), getRandomRGB());
    brands_of_cars.push(cars[car].brand);
    mileages_of_cars.push(cars[car].mileage);
    colors_of_cars.push(cars[car].rgbColor);
}

// Для проверки "Самой заезжанной машины"
// Для проверки применить до заполнения массивов (brands_of_cars, mileages_of_cars, colors_of_cars)
// cars[199].setMileage(999999999);
// cars[199].setProductionYear(1);
// console.log(cars[199].getInfo());

// console.log(cars); // Вывод автопарка

// Подсчёт автомобилей каждой марки
for (let i = 0; i < brands_of_cars.length; i++)
{
    switch (brands_of_cars[i])
    {
        case "Tesla":
            carsOfBrands[0] += 1;
            break;
        case "Jeep":
            carsOfBrands[1] += 1;
            break;
        case "Tayota":
            carsOfBrands[2] += 1;
            break;
        case "Land Rover":
            carsOfBrands[3] += 1;
            break;
        case "Ford":
            carsOfBrands[4] += 1;
            break;
        case "Bugatti":
            carsOfBrands[5] += 1;
            break;
        case "Bentley":
            carsOfBrands[6] += 1;
            break;
        case "Mini":
            carsOfBrands[7] += 1;
            break;
        case "Volvo":
            carsOfBrands[8] += 1;
            break;
        case "Lotus":
            carsOfBrands[9] += 1;
            break;
        case "Lancia":
            carsOfBrands[10] += 1;
            break;
        case "Hyundai":
            carsOfBrands[11] += 1;
            break;
        case "Daewoo":
            carsOfBrands[12] += 1;
            break;
        case "Dodge":
            carsOfBrands[13] += 1;
            break;
        case "Mercedes":
            carsOfBrands[14] += 1;
            break;
        case "Buick":
            carsOfBrands[15] += 1;
            break;
        case "Renaut":
            carsOfBrands[16] += 1;
            break;
        case "Gondo":
            carsOfBrands[17] += 1;
            break;
        case "Cross":
            carsOfBrands[18] += 1;
            break;
        case "Tantoo":
            carsOfBrands[19] += 1;
            break;
    }
}

mostPopularBrandCars = 0;
mostPopularBrand = '';
for (let i = 0; i < brands.length; i++) // Проход по всем существующим брендам
{
    if (carsOfBrands[i] > mostPopularBrandCars)
    {
        mostPopularBrandCars = carsOfBrands[i];
        mostPopularBrand = brands[i];
    }
    // Для проверки
    // console.log("Марка автомобиля\n" + brands[i]);
    // console.log("Кол. автомобилей этой марки\n" + carsOfBrands[i]);
}

// Самая популярная марка автомобиля
console.log("Самая популярная марка автомобиля в автопарке = " + mostPopularBrand);

// Самая заезжанная машина и старая машина

indexesOfCarsWithMaxMileages = [];
indexOfCarWithMaxMileage = 0;
maxMileage = 0;

console.log("10 Автомобилей с максимальным пробегом");

// Получение индексов 10 машин с максимальным пробегом
for (let i = 0; i < 10; i++)
{
    indexOfCarWithMaxMileage = mileages_of_cars.indexOf(getMaxOfArray(mileages_of_cars));

    // Запись отрицательного значения, чтобы не учитывать 
    // эту машину при поиске следующих машин
    mileages_of_cars[indexOfCarWithMaxMileage] = -1; 

    indexesOfCarsWithMaxMileages.push(indexOfCarWithMaxMileage);
}

let minProductionYear = 9999999;
let indexOfCarWithMinProductionYearAndMaxMileage = 0;
for (let i = 0; i < 10; i++)
{
    if (minProductionYear > cars[indexesOfCarsWithMaxMileages[i]].getProductionYear())
    {
        minProductionYear = cars[indexesOfCarsWithMaxMileages[i]].getProductionYear();
        indexOfCarWithMinProductionYearAndMaxMileage = indexesOfCarsWithMaxMileages[i];
    }
}
console.log("Информация о самой старой машине с максимальным пробегом:");
console.log(cars[indexOfCarWithMinProductionYearAndMaxMileage].getInfo());

// Вывод всех машин с цветом близким к красному
// RGB цвета, которые близки к красному имеюют значения в диапозонах:
// R = [220; 255]
// G = [0;   45]
// B = [0;   45]

console.log("Все машины с цветом близким к красному:");
carIndex = 0;
for (let color of colors_of_cars)
{
  if (220 < color[0] && color[1] < 45 && color[2] < 45)
  {
    console.log(cars[carIndex].getInfo());
  }
  carIndex += 1;
}