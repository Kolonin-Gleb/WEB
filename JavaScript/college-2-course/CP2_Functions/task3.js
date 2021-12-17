function isPalindrome(phrase)
{
    phrase = phrase.toLowerCase(); //Перевод строки в нижний регистр

    //Превращаю строку в массив слов разбивая её по пробелу
    let phraseArray = phrase.split(' ');

    //Собираю строку, но теперь в ней нет пробелов
    phrase = phraseArray.join('')

    //Превращаю строку в массив букв разбивая её на составные элементы
    phraseArray = phrase.split('');
    
    //Переворачиваю элементы массива методом reverse()
    phraseArray.reverse();

    //Создаю строку из массива, которая является перевертышем входной строки 
    reversedPhrase = phraseArray.join('');

    //Выполняю проверку на палиндром (перевертыш)
    if (reversedPhrase == phrase)
    {
      return true;
    }
    else
    {
      return false;
    }
}

console.log("Задача 3");

console.log(isPalindrome('Ololo'));
console.log(isPalindrome('рыба'));
console.log(isPalindrome('А роза упала на лапу Азора'));

