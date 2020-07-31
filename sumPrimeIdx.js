function total(arr){
    let sum = 0;
    let primes = getPrimes(arr.length-1);
    primes.forEach(element => {
        sum += arr[element]
    });
return sum;
};
function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i < 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}
    
    

    
    
    
    
console.log(total([1,2,3,4]))//7
console.log(total([1,2,3,4,5,6]))//13
console.log(total([1,2,3,4,5,6,7,8]))//21
console.log(total([1,2,3,4,5,6,7,8,9,10,11]))//21
console.log(total([1,2,3,4,5,6,7,8,9,10,11,12,13]))//33
console.log(total([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))//47
console.log(total([]))//0
