console.log("Задание 2");

class Point
{
    constructor(x, y, title)
    {
        this.x = x;
        this.y = y;
        this.title = title;
    }
    getInfo()
    {
        return `title: ${title}, x: ${this.x}, y: ${this.y}`;
    }
};

class Segment
{
    constructor(length, title)
    {
        this.length = length;
        this.title = title;
    }
    getInfo()
    {
        return `title: ${this.title}, length: ${this.length}`;
    }
};

function getRandomFloat(min, max, digitsAfterComma) // min и max - целые числа
{
    // Максимум и минимум невключаются
    // Math.random() - в диапозоне [0;1)

    randNum = Math.random() * (max - min) + min;
    return randNum.toFixed(digitsAfterComma);
}

function distance(p1, p2, accuracy)
{
    len = Math.sqrt(((p2.x - p1.x) ** 2) + ((p2.y - p1.y) ** 2)); // Теорема Пифагора. Нахожждение гипотенузы
    return len.toFixed(accuracy);
}

let a = new Point(getRandomFloat(-10, 10, 2), getRandomFloat(-10, 10, 2), 'a');
let b = new Point(getRandomFloat(-10, 10, 2), getRandomFloat(-10, 10, 2), 'b');
let c = new Point(getRandomFloat(-10, 10, 2), getRandomFloat(-10, 10, 2), 'c');

// console.log("Точки и их координаты:");
// console.log(a.getInfo());
// console.log(b.getInfo());
// console.log(c.getInfo());

// Расчёт длин отрезков
let abLen = distance(a, b, 2);
let bcLen = distance(b, c, 2);
let acLen = distance(a, c, 2);
// Создание отрезков
let ab = new Segment(abLen, a.title + b.title);
let bc = new Segment(bcLen, b.title + c.title);
let ac = new Segment(acLen, a.title + c.title);

console.log("Длины отрезков:");
console.log(ab.getInfo());
console.log(bc.getInfo());
console.log(ac.getInfo());

let segmentsTitles = [ab.title, bc.title, ac.title];
let segmentsLengths = [ab.length, bc.length, ac.length];

maxSegmentLen = Math.max.apply(null, segmentsLengths);
maxSegmentTitle = '';

// Получить индекс макс. эл. массива
for (let index = 0; index < segmentsLengths.length; index++)
{
    if (segmentsLengths[index] == maxSegmentLen)
    {
        maxSegmentTitle = segmentsTitles[index];
    }
}

console.log("Длина максимального отрезка = " + maxSegmentLen);
console.log("Его название = " + maxSegmentTitle);
