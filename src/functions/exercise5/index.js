const numbers = [11,9,13,12]

// Put your code here
function minorInRange (idx1, indx2) {

  let minor;

  for (let i = idx1; i <= indx2; i++) {
    if (numbers[idx1] < numbers[idx1+1]) {
         minor = numbers[idx1]
        } else {minor = numbers[idx1+1]}
    }
    return minor;
  }

console.log(minorInRange(0,3,numbers));
console.log(minorInRange(2,3,numbers));
console.log(minorInRange(1,3,numbers));