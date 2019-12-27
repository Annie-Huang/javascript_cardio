// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
    // const dictionary = {
    //     'a': 'b',
    //     'b': 'c',
    //     'c': 'd',
    //     'd': 'e',
    //     'e': 'f',
    //     'f': 'g',
    //     'g': 'h',
    //     'h': 'i',
    //     'i': 'j',
    //     'j': 'k',
    //     'k': 'l',
    //     'l': 'm',
    //     'm': 'n',
    //     'n': 'o',
    //     'o': 'p',
    //     'p': 'q',
    //     'q': 'r',
    //     'r': 's',
    //     's': 't',
    //     't': 'u',
    //     'u': 'v',
    //     'v': 'w',
    //     'w': 'x',
    //     'x': 'y',
    //     'y': 'z',
    //     'z': 'a',
    //     ' ': ' '
    // };
    //
    // const vowelsList = ['a', 'e', 'i', 'o', 'u']
    //
    // return str
    //     .toLowerCase()
    //     .split('')
    //     .map(char => vowelsList.includes(dictionary[char]) ? dictionary[char].toUpperCase() : dictionary[char])
    //     .join('');


    ///////////////////////////////////////////////


    // i means case insensitive.
    //
    // The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
    // The pattern can be a string or a RegExp. If pattern is a string, only the first occurrence will be replaced.
    // var newStr = str.replace(regexp|substr, newSubstr|function)
    let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
        if (char === 'z') {
            return 'a';
        } else {
            // I think it should be char.charCodeAt(0)
            return String.fromCharCode(char.charCodeAt(0) + 1);
        }
    });

    newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());

    return newStr;

}

// Call Function
const output = letterChanges('Hello There');

console.log(output);
