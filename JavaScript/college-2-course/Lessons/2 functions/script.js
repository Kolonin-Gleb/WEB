console.log("Функции");

parabola(10);

// Функциональное выражение. Его можно использовать только после объявления
const getRGB = function()
{
    return `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
}

for (let i = -10; i <= 10; i++)
{
    document.write(`<div class="point" style="left: calc(50% + ${i * 20}px); top: calc(80% - ${parabola(i) * 10}px); background: ${getRGB()}"></div>`);
}

console.log(getRandomInt(0, 10));



// document.body.style.background = getRGB();

