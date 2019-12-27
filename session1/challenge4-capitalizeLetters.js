// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
    // Show not use substr because it's legacy function
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr

    // return str.split(' ').map(word => word[0].toUpperCase()+word.substring(1)).join(' ');

    ///////////////////////////////////////////////

    // const strArr = str.toLowerCase().split(' ');
    // for(let i=0; i<strArr.length; i++) {
    //     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    // }
    // return strArr.join(' ');

    ///////////////////////////////////////////////

    // \b Matches a word boundary.
    //      A word boundary matches the position between a word character followed by a non-word character,
    //      or between a non-word character followed by a word character,
    //      or the beginning of the string,
    //      or the end of the string.
    // The pattern [a-d], which performs the same match as [abcd]
    // g	Global search.
    //      The "g" after the regular expression is an option or flag that performs a global search, looking in the whole string and returning all matches.
    //      if you don't have "g", it's only going to do it in the first instant.
    // i	Case-insensitive search.

    return str.replace(/\b[a-z]/gi, function (char) {
        return char.toUpperCase();
    })
}

// Call Function
const output = capitalizeLetters('i love javascript');

console.log(output);
