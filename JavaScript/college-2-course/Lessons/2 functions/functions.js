// Декларированные функции
// Их можно использовать, даже если объявить до места вызова

function parabola(x)
{
    return(x * x);    
}

function getRandomInt(min, max) // min и max - целые числа
{
    // Math.random() - в диапозоне [0;1)
    
    //Максимум и минимум включаются
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

