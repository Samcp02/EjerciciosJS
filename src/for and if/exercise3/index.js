const numbers = [0,99,3,121,12,1,2];
let sum = 0;
let average = 0;

// Put your code here
for (let item of numbers) {
    sum = (sum + item);
}

average = sum/numbers.length;

console.log(average)