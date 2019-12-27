// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
    /*
    Different between slice and splice
    - slice DOES NOT change the original array.
    - the second input is the end position the extract is up to, excludingly.
    - it returns the cuttedArray.
    slice(startPosition, endPosition-Excluding)

    let months = ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'II'];
    let cuttedMonth = months.slice(2, 5);   // cut position [2,3,4]
    console.log(cuttedMonth);   // Array [ 'CC', 'DD', 'EE' ]
    console.log(months);        // Array [ 'AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'II' ]

    - splice DOES change the original array.
    - the second input of the splice is the len to cut.
    - it returns the cuttedArray.
    splice(startPosition, lengthToCut)


    let months = ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'II'];
    let cuttedMonth = months.splice(2, 5);  // cut 5 items
    console.log(cuttedMonth);   // Array [ 'CC', 'DD', 'EE', 'FF', 'GG' ]
    console.log(months);        // Array [ 'AA', 'BB', 'HH', 'II' ]
    */


    // let resultArray = [];
    // while (arr.length > len) {
    //     resultArray.push(arr.splice(0, len));
    // }
    // resultArray.push(arr);
    // return resultArray;

    ///////////////////////////////////////////////
    // const chunkedArr = [];
    // let i = 0;
    // while (i < arr.length) {
    //     chunkedArr.push(arr.slice(i, i+len));
    //     i += len;
    // }
    // return chunkedArr;

    ///////////////////////////////////////////////
    const chunkedArr = [];
    // This is out of my imagination, i will never thin of this this way.
    arr.forEach(val => {
        // Get last element
        const last = chunkedArr[chunkedArr.length -1];

        // Check if last and if the last length is equal to the chunk len
        if(!last || last.length === len) {
            chunkedArr.push([val]);
        } else {
            last.push(val);
        }
        // console.log(chunkedArr)
    });

    return chunkedArr
}

// Call Function
const output1 = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
// const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 2);

console.log(output1);
// console.log(output);
