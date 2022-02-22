const mix = [undefined,22,"1",4,3,"5",7,NaN,8,"9","12",11,null];
let strings = [];
let numbers = [];
let others = [];

for (const item of mix) {
    // Put your code here
    if (typeof item === 'string') {
        strings.push(item);
    } else if (typeof item === 'number') {
        numbers.push(item);
    } else {
        others.push(item);
    }
}

console.log("Strings:",strings,"Numbers:",numbers)