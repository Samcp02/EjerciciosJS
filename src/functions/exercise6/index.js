const numbers = [11,9,13,12]

// Paste your functions here

//Función para elegir el menor entre un rango

function minorInRange (idx1, idx2) {

  let minor;

  for (let i = idx1; i <= idx2; i++) {
    if (numbers[idx1] < numbers[idx1+1]) {
         minor = numbers[idx1]
        } else {minor = numbers[idx1+1]}
    }
    return minor;
  }
    
// Función para intercambiar dos números de un array

    function swap (idx1, idx2) {
      let temp = numbers[idx2];
      numbers[idx2] = numbers[idx1];
      numbers[idx1] = temp;
      };

// Put your code here
console.log(minorInRange(0,3,numbers))