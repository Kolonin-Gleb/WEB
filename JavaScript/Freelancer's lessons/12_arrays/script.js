// Arrays

// Различные данные в массиве и обращение к ним
let arr1 = [
    "Pete",
    {
        city: "Moscow",
        age: 36
    },
    true,
    function () {
        console.log("Hello! I am Pete.");
    }
];

console.log(arr1); // Вывод всего массива
console.log(arr1[0]); // Вывод элемента массива
console.log(arr1[1].city); // Вывод значения свойства объекта, что лежит в массиве.
arr1[3](); // Вызов функции, хранящейся в массиве


// Многомерный массив или матрица

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matrix); // Вывод всей матрицы
console.log(matrix[0][2]); // Вывод элемента матрицы




