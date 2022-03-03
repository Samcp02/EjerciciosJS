const numbers = [11,9,13,12]

// Paste your functions here    
function swap(index1, index2, numbers) {
  let temp = numbers[index1];
  numbers[index1] = numbers[index2];
  numbers[index2] = temp;
}

function minorInRange(index1, index2, numbers) {
  for (idx of numbers)
    for (idx = index1; idx <= index2; idx++) {
      if (numbers[idx] > numbers[idx + 1]) {
        swap(idx, idx + 1, numbers)
      }
    }
}

minorInRange(0,3,numbers)  
console.log(numbers)