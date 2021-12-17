let obj = {}; // Пустой объект

// Объект - словарь
let capitals = {
    // Свойства объекта и их значения
    Norway: "Olso",
    France: "Paris",
    Chine: "Beijin",
    "Bosnia and Herzegovina": "Sarajevo",
};

let country = "Bosnia and Herzegovina";

console.log(capitals.Norway);
console.log(capitals["Bosnia and Herzegovina"]);
console.log(capitals[country]);

capitals["Russian Federation"] = "Moscow";

console.log(capitals);

// объект - неупорядоченное последовательность пар ключ-значение

// Проход по ключам объекта
// for (let key in capitals)
// {
//     document.write("");    
// }

let car = {
    speed: 100,
    brand: "Tesla",
    hp: 10,
    model: "X",
    autopilot: true,
    user: {
        name: "Gleb",
        number: "24"
    },
    color: "black",
    // Метод - функция, явл. свойством объекта
    getInfo: function()
    {
        return `${this.brand} ${this.speed} ${this.user.name}`    
    }
};

console.log(car.getInfo());



