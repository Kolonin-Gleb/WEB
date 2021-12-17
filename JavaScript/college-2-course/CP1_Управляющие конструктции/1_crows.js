console.log("Задание 1");

function getRandomInt(min, max) // min и max - целые числа
{
    // Math.random() - в диапозоне [0;1)
    //Максимум и минимум включаются
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1 ворона
// 2 вороны
// 5 ворон
// ...21 ворона

crowsNum = getRandomInt(0, 1000);

shortenCrowsNum = crowsNum;
shortenCrowsNum %= 100;

while (true)
{
    if (shortenCrowsNum >= 5 && shortenCrowsNum <= 20)
    {
        console.log("На ветке сидело " + crowsNum + " ворон");
        break;
    }
    else
    {
        shortenCrowsNum %= 10;
        if (shortenCrowsNum == 1) // Особый случай для 1
        {
            console.log("На ветке сидела " + crowsNum + " ворона");
            break;
        }
        if (shortenCrowsNum >= 2 && shortenCrowsNum <= 4)
        {
            console.log("На ветке сидело " + crowsNum + " вороны");
            break;
        }
        else
        {
            console.log("На ветке сидело " + crowsNum + " ворон");
            break;
        }
    }
}

