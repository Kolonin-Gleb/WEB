console.log("Задача 1");

// Функциональное выражение. Его можно использовать только после объявления
function getRandomInt(min, max) // min и max - целые числа
{
    // Math.random() - в диапозоне [0;1)
    
    //Максимум и минимум включаются
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateHexString(len)
{
    const HEX = '0123456789ABCDEF'; // числа 16 с.с.
    let hexString = '';
    for (let i = 0; i < len; ++i)
    {
        hexString += HEX[getRandomInt(0, (HEX.length - 1))];
    }
    return hexString;
}

function getRGB(colorModel)
{
    if (colorModel != "hex")
    {
        return `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
    }
    else
    {
        return `#${generateHexString(6)}`
    }
    /*
    HEX формат - 
    Представление цвета в виде трёх пар шестнадцатеричных цифр (всего 6 цифр),
    где каждая пара отвечает за свой цвет:
    Две первые цифры — красный
    Две в середине — зелёный
    Две последние цифры — синий
    */
}

console.log(getRGB());
console.log(getRGB("hex"));

