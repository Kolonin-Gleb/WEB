console.log("Задача 2");

function get_Fib_num(n)
{
    // Первые два числа последовательности Фибоначи
    let Fib_1 = 1;
    let Fib_2 = 1;
    let result = 0;

    // Вычисляем нужное число Фибоначи
    for (let i = 3; i <= n; i++)
    {
      result = Fib_1 + Fib_2;
      Fib_1 = Fib_2;
      Fib_2 = result;
    }
    return result;
}
  
console.log(get_Fib_num(5)); // 5
console.log(get_Fib_num(8)); // 21

