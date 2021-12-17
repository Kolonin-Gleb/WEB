console.log("Задача 2");

let nums = [5, 2, 4];

let squares = [];

nums[99] = 3;

console.log(nums);

for (let i = 0; i < nums.length; i += 1)
{
  if (nums[i] != undefined)
  {
    squares.push(nums[i] * nums[i])
  }
}

console.log(squares);
