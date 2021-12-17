// // Функция-конструктор

// function Point(x=0, y=0)
// {
//     this.x = x;
//     this.y = y;
//     this.getInfo = function ()
//     {
//         return `x: ${this.x}, y: ${this.y}`;
//     }
//     this.distanceFrom = function (x, y)
//     {
//         return `x distance = ${Math.abs(x - this.x)}, y distance = ${Math.abs(y - this.y)}`    
//     }
// }

// // Обращение к конструктуру (Object по умолчанию)
// // Переопределение метода toString()
// Point.prototype.toString = function ()
// {
//     return JSON.stringify(this); // Преобразование в JSON формат
// }

// let a = new Point(-1, -4);

// console.log(a);
// console.log(a.getInfo());
// console.log(a.distanceFrom(10, 20));

// console.log(a.toString());



class Point
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }
    getInfo()
    {
        return `x: ${this.x}, y: ${this.y}`;
    }
    toString()
    {
        return JSON.stringify(this); // Преобразование в JSON формат
    }
};

class Point3D extends Point
{
    constructor(x, y, z)
    {
        super(x, y); // Использование конструктора род. класса
        this.z = z;
        this._f = "for what?";
    }
    getF()
    {
        return this._f;
    }
    setF(f)
    {
        this._f = f;
    }
}

// Добавление метода из вне класса
Point3D.prototype.sayHi = function ()
{
    return "Hi";    
}

let a = new Point(-1, -4);
console.log(a.toString());

let b = new Point3D(1, 2, 3);
console.log(b.toString());
console.log(b.sayHi());

console.log(b._f);

