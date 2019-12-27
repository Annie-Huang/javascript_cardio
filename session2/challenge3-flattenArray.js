// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
    // return arrays.flat();

    // return arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue));

    // return [].concat(...arrays);

    // The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
    // const numbers = [5, 6, 2, 3, 7];
    // const max = Math.max.apply(null, numbers);
    // console.log(max); // expected output: 7

    return [].concat.apply([], arrays);
}

// Call Function
const output = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);

console.log(output);
