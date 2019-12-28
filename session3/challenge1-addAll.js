// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll() {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
    // arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
    // “Array-like” means that arguments has a length property and properties indexed from zero,
    // but it doesn't have Array's built-in methods like forEach() and map(). See Description for details.

    // let sum = 0;
    // for(let i=0; i<arguments.length; i++) {
    //     sum += arguments[i];
    // }
    //
    // return sum;

    ///////////////////////////////////////////////

    return [...arguments].reduce((accumulator, currentValue) => accumulator + currentValue);

    ///////////////////////////////////////////////

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    // slice method can also be called to convert Array-like objects / collections to a new Array.
    // let list1 = list(1, 2, 3) // [1, 2, 3]
    // var args = Array.prototype.slice.call(arguments);
    // var total = 0;
    // for(i=0; i<args.length; i++) total += args[i];
    // return total;

}

// I didn't know that you can change the arguement input. I thought it's fixed.
function addAll1(...numbers) {
    // let total = 0;
    // numbers.forEach(num => total += num);
    // return total;

    return numbers.reduce((acc, cur) => acc + cur);
}

// I like this solution....
function addAll2(num, ...rest) {
    if (rest.length === 0) return num;
    return num + addAll2(...rest);
}

console.log(addAll(2,5,6,7));
console.log(addAll1(2,5,6,7));
console.log(addAll2(2,5,6,7));
