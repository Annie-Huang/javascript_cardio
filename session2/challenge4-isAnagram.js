// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
    // The match() method retrieves the result of matching a string against a regular expression.
    // An Array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found.
    // const str1Temp = str1.toLowerCase().match(/[a-z0-9]+/g).join('');
    // const str2Temp = str2.toLowerCase().match(/[a-z0-9]+/g).join('');
    // console.log(str1Temp);
    // console.log(str2Temp);
    // return str1.toLowerCase().match(/[a-z0-9]+/g).join('').split('').sort().join('') ===
    //     str2.toLowerCase().match(/[a-z0-9]+/g).join('').split('').sort().join('')

    return formatStr(str1) === formatStr(str2);
}

function formatStr(str) {
    /*
        ^    Matches the beginning of input. If the multiline flag is set to true, it also matches immediately after a line break character.
        \w   Matches any alphanumeric character including the underscore. Equivalent to [A-Za-z0-9_].

        That following is suppose to find anything that is NOT a word character set. But I don't see how it does that.
     */
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

// Call Function
const output1 = isAnagram('elbow', 'below');
const output = isAnagram('Dormitory', 'dirty room##');

console.log(output1);
console.log(output);
