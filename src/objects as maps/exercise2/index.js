const chrono = [
    {
        name: "Ana",
        time: 102.01
    },
    {
        name: "Pablo",
        time: 105.82
    },
    {
        name: "Marco",
        time: 100.4
    },
    {
        name: "Luisa",
        time: 103.39
    },
    {
        name: "Pedro",
        time: 109.09
    },
]

// Put you code here
function sort () {
    let currentPosition= currentPosition.time
    let compareWithPosition= compareWithPosition.time

    for (let currentPosition = 0; currentPosition < chrono.length ; currentPosition++) {
        for (let compareWithPosition = currentPosition+1; compareWithPosition < chrono.length; compareWithPosition++)
        {
            if (chrono[currentPosition] > chrono[compareWithPosition]) {
                let temporal = chrono[currentPosition];
                chrono[currentPosition] = chrono[compareWithPosition];
                chrono[compareWithPosition] =  temporal;
                console.log(chrono)
            }
        }
    }
}