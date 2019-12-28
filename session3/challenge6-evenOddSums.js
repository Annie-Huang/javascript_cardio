// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
    let totalEven = 0;
    let totalOdd = 0;
    arr.forEach(item => item % 2 === 0 ? totalEven += item : totalOdd += item);

    return [totalEven, totalOdd];
}

console.log(evenOddSums([50, 60, 60, 45, 71]));
