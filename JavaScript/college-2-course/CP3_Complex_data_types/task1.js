console.log("Задача 1");

let person1 = {
    name: "Глеб",
    gender: "M",

    // Метод - функция, явл. свойством объекта
    say: function(phrase)
    {
        if (this.gender == "M")
        {
            return `${this.name} сказал: ${phrase}`
        }
        else if (this.gender == "W")
        {
            return `${this.name} сказала: ${phrase}`
        }
        else
        {
            return -1
        }
    }
};

let person2 = {
    name: "Саша",
    gender: "W",

    // Метод - функция, явл. свойством объекта
    say: function(phrase)
    {
        if (this.gender == "M")
        {
            return `${this.name} сказал: ${phrase}`
        }
        else if (this.gender == "W")
        {
            return `${this.name} сказала: ${phrase}`
        }
        else
        {
            return -1
        }
    }
};

console.log(person1.say("Привет! Как дела?"));

console.log(person2.say("Привет! Хорошо."));

