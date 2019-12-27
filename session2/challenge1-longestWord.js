// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord('Hello, my name is Brad') === 'hello'
// ex. longestWord('Hello there, my name is Brad') === ['hello', 'there']

function longestWord(sen) {
    // SOLUTION 1 - Return a single longest word
    // SOLUTION 2 - Return an array and include multiple words if they have the same length
    // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

    // let maxWord = [];
    // let maxLength = 0;
    // sen.replace(',', '').split(' ').forEach(word => {
    //     if (word.length > maxLength) {
    //         maxLength = word.length;
    //         maxWord = [word];
    //     } else if (word.length === maxLength) {
    //         maxWord.push(word);
    //     }
    // });
    // return maxWord.length === 1 ? maxWord[0] : maxWord;

    ///////////////////////////////////////////////


    // ascending order:
    // function compareNumbers(a, b) {
    //     return a - b;
    // }

    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
    const sorted = wordArr.sort((a, b) => b.length - a.length);
    // if multiple words, put into array
    const longestWordArry = sorted.filter(word => word.length === sorted[0].length);
    // Check if more than one array val
    return longestWordArry.length === 1 ? longestWordArry[0] : longestWordArry;
}

// Call Function
const output1 = longestWord('Hello there, my name is Brad');
const output = longestWord('Helloo there, my name is Brad');

console.log(output1);
console.log(output);
