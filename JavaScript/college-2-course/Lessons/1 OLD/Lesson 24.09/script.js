console.log("Alice" < "alice"); // true
console.log(200 < "20a"); // false

console.log("a" * 2); // NaN - not a number

console.log(typeof "a", "a");

console.log(typeof true, true);
console.log(typeof 5, 5);
console.log(typeof NaN, NaN); //тип NaN - number?!
console.log(typeof null, null);

let n = "5a";

if (isNaN(n))
{
    document.write("<h3>" + n + " - не число </h3>");
}
else
{
    document.write("<h3>" + n + " - число </h3>");
}

console.log("5" == 5); //true
console.log("5" === 5); //Строгое сравнение. Сравнивает типы данных, а затем значения

let age = Math.round(Math.random() * 100);
console.log(age);
if (age < 14)
{
    console.log("Учись давай!");
}
else if (age > 14 && age < 65)
{
    console.log("Работайте!");
}
else
{
    console.log("Передай свой опыт");
}


console.log(+"2" + 8);

