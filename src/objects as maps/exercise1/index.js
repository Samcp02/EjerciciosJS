const phrase = "No hay bien que por mal no venga";
const counters = {};
function countLetter (letter, countersObject) {
    // Put your code here
    if(counters.hasOwnProperty(letter)=== false) {counters[letter] = 1 }
    else {counters[letter]++}
}


for (letter of phrase) {
    //console.log(letter)
    countLetter(letter, counters)
}

console.log(JSON.stringify(counters));
