// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    // Method 1:
    // return str.split('').reverse().join('');

    ///////////////////////////////////////////////
    // Method 2: if you cannot use reverse.
    // let revString = '';
    // for(let i=str.length-1; i>=0; i--) {
    //     revString = revString + str[i];
    // }
    // return revString;

    ///////////////////////////////////////////////
    // Method 3:
    // let revString = '';
    // for(let i=0; i<str.length; i++) {
    //     revString = str[i] + revString;
    // }
    // return revString;

    ///////////////////////////////////////////////
    // Method 4:
    // let revString = '';
    // for(let char of str) {
    //     revString = char + revString;
    // }
    // return revString;

    ///////////////////////////////////////////////
    // Method 5:
    // let revString = '';
    // str.split('').forEach(char => revString = char + revString);
    // return revString;

    ///////////////////////////////////////////////
    // Method 6: Use reduce
    // return str.split('').reduce((revString, char) => {
    //     return char + revString;
    // }, '');
    return str.split('').reduce((revString, char) => char + revString, '')
}

// Call Function
const output = reverseString('hello');

console.log(output);
