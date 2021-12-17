"use strict";

console.log("Задание 4");

function getRandomInt(min, max) // min и max - целые числа
{
    // Math.random() - в диапозоне [0;1)
    
    //Максимум и минимум включаются
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.toLowerCase();
let shift = getRandomInt(-1 * alphabet.length, alphabet.length); // от -33 до 33

// Формирование сдвинутого алфавита
let shiftedAlphabet = '';
shiftedAlphabet = alphabet.slice(shift); // 1 часть алфавита = оригинальный алфавит начиная с позиции сдвига
shiftedAlphabet += alphabet.slice(0, shift) // 2 асть алфавита = оригинальный алфавит до позиции сдвига

let phrase = 'я буду учиться на отлично'.toLowerCase();

console.log("Предложение до применения шифра цезаря:");
console.log(phrase);

phrase = phrase.split(''); // Перевод в массив для применения сдвига

// Применение сдвига к предложению
let letterIndexInAlphabet = 0;
for (let letter = 0; letter < phrase.length; letter++) // Проход по всем буквам предложения
{
    letterIndexInAlphabet = alphabet.indexOf(phrase[letter]);
    // Сдвиг букв
    if (letterIndexInAlphabet != -1)
    {
        phrase[letter] = shiftedAlphabet[letterIndexInAlphabet];
    }
}

phrase = phrase.join(''); // Перевод в строку

console.log("Предложение после применения шифра цезаря:");
console.log(phrase);
