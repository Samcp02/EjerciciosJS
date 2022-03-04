const phrase = "No hay bien que por mal no venga";
const counters = {};
function countLetter (letter, countersObject) {

    // Put your code here
    counters[letter] = 1
    
}


for (letter of phrase) {
    console.log(letter)
    countLetter(letter, counters)
}

console.log(counters)