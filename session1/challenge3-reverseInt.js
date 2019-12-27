// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
    // return(parseInt(((int+'').split('').reverse().join('')), 10)) * Math.sign(int);

    return parseInt((int.toString().split('').reduce((accumulator, char) => char + accumulator, '')), 10) * Math.sign(int);
}

// Call Function
const output1 = reverseInt(12345);
const output = reverseInt(-12345);

console.log(output1);
console.log(output);
