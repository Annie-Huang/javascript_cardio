// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
    // 1 is more prime number so start with 0;
    // let total = 0;
    // let isPrime;
    // for(let i=2; i<=num; i++) {
    //     isPrime = true;
    //     for(let j=2; j<i; j++) {
    //         if (i % j === 0) {
    //             isPrime = false;
    //             break;
    //         }
    //     }
    //     if (isPrime) total += i;
    // }
    // return total;

    ///////////////////////////////////////////////

    // Basically the same method, just a bit clearly.
    function checkForPrime(i) {
        for(let j=2; j<i; j++) {
            if (i % j === 0) {
                return false;
            }
        }
        return true;
    }

    let total = 0;
    for(let i=2; i<=num; i++) {
        if (checkForPrime(i)) total += i;
    }
    return total;
}

console.log(sumAllPrimes(10)); // 17
console.log(sumAllPrimes(100)); // 1060
