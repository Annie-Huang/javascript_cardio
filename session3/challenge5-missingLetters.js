// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
    // let first = str.charCodeAt(0);
    // let last = str.charCodeAt(str.length-1);
    //
    // let inputTotal = str.split('').reduce((accumulator, currentValue) => accumulator + currentValue.charCodeAt(0), 0);
    // let normalTotal = 0;
    // for(let i=first; i<=last; i++) {
    //     normalTotal += i;
    // }
    // return normalTotal-inputTotal === 0 ? undefined : String.fromCharCode(normalTotal-inputTotal);

    let compare = str.charCodeAt(0);
    let missing;
    str.split('').map((value, index) => {
        if(compare === str.charCodeAt(index)) {
            compare++;
        } else {
            // Keep in mind you cannot return in here. because map cannot break in the middle.
            // Which makes this solution the same as my solution, if you need to loop through the entire array anyway.
            missing = String.fromCharCode(compare);
        }
    });
    return missing;

}

console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));
