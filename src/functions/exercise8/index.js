numbers = [4,2,9,6,1,0,3,6,5,2,9];

function aGreatherThanB(a, b) {
    // Put your code here
    if (a > b) {
        return true
    } else { return false }
}

function bGreatherThanA(a, b) {
    // Put your code here
    if (b > a) {
        return true
    } else { return false }
}

function swap (idxA, idxB, array) {
    // Put your code here
    let temp = null;
    temp = array[idxB]
    array[idxB] = array[idxA]
    array[idxA] = temp
}

function sort (comparator, array) {
    for ( let currentIdx = 0 ; currentIdx < array.length-1 ; currentIdx++) {
        for ( let nextIdx = currentIdx+1 ; nextIdx < array.length ; nextIdx++ ) {
            if (
                comparator(array[currentIdx], array[nextIdx])
            ) swap (currentIdx, nextIdx, array)
        }
    }
}

console.log(numbers);
sort(aGreatherThanB, numbers);
console.log(numbers);
sort(bGreatherThanA, numbers);
console.log(numbers);