// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {
    // negative value is the tree.
    // positive value is the height.
    // let b = a.filter(item => item !== -1).sort((a, b) => a - b );
    // console.log(b);
    // let indexB = 0;
    // for(let i = 0; i < a.length; i++) {
    //     if(a[i] !== -1) {
    //         a[i] = b[indexB];
    //         indexB++;
    //     }
    // }
    // return a;

    const arr1 = [];
    const arr2 = [];
    a.forEach((val, i) => val === -1 ? arr1.push(i) : arr2.push(val));

    const sortArr = arr2.sort((a, b) => a-b);
    // This is the offical usage of splice
    arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));
    return sortArr;
}

a = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(sortByHeight(a));