const numbers = [11,12,13,14]

// Put your code here
function swap (a, b) {
let temp = numbers[b];
numbers[b] = numbers[a];
numbers[a] = temp;
};

swap(0,3,numbers);
console.log(numbers);

swap(1,2,numbers);
console.log(numbers);