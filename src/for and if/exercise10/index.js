let numbers = [2,1,4,5,6,3,7,8,1,4,6,8,1,5,7,8,3]

// Put your code here
for (let currentPosition = 0; currentPosition < numbers.length ; currentPosition++) {
    for (let compareWithPosition = currentPosition+1; compareWithPosition < numbers.length; compareWithPosition++)
    {
        if (numbers[currentPosition] > numbers[compareWithPosition]) {
            let temporal = numbers[currentPosition];
            numbers[currentPosition] = numbers[compareWithPosition];
            numbers[compareWithPosition] =  temporal;
            console.log(numbers)
        }
    }
}
    
