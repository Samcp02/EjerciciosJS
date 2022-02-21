const numbers = [0,1,5,2,7,5,0,0,9,5,5,6];
let counter = 0;

// Put your code here
for (let item of numbers){
    if (item === 5) {
        console.log(counter += 1);
    }
}

console.log('Number of 5: ' + counter)