// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy(arr, ...rest) {
    rest.forEach(value => {
        arr = arr.filter(item => item !== value)
    });
    return arr;
}

function seekAndDestroy1(arr) {
    // The Array.from() method creates a new, shallow-copied Array instance from an array-like
    const args = Array.from(arguments); // [ [ 2, 3, 4, 6, 6, 'hello' ], 2, 6 ]

    // Not sure why arr = [ 2, 3, 4, 6, 6, 'hello' ]
    return arr.filter(item => args.indexOf(item) === -1);
}

function seekAndDestroy2(arr, ...rest) {
    return arr.filter(val => !rest.includes(val));
}


console.log(seekAndDestroy1([2, 3, 4, 6, 6, 'hello'], 2, 6));
console.log(seekAndDestroy2([2, 3, 4, 6, 6, 'hello'], 2, 6));
console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6));
