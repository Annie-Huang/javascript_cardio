// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
    // return str.split('').reverse().join('') === str;

    const revString = str.split('').reduce((revStr, char) => char + revStr, '');
    return revString === str;
}

// Call Function
const output1 = isPalindrome('hello');
const output = isPalindrome('racecar');

console.log(output1);
console.log(output);
