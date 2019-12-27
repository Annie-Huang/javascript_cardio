// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
    // Actually surprised the algorithm Traversy use is the same as mine.
    const dictionary = {};
    str.split('').forEach(char => {
        if(!dictionary[char]) {
            dictionary[char] = 1;
        } else {
            dictionary[char]++;
        }
    });
    let max = 0;
    let char;
    // debugger;
    Object.keys(dictionary).forEach(key => {
        if (dictionary[key] > max) {
            max = dictionary[key];
            char = key;
        }
    });
    return char;
}

// Call Function
const output = maxCharacter('javascript');

console.log(output);
