// Write a function that accepts an array of positive integers and returns an array
// of all prime numbers from the given array.
//  A prime number is a number that is only divisible by 1 and itself.

function isPrimeNumberArray(n) {
    for (let i = 0; i <= n; i++) {
        if (isAPrime(i)) {
            console.log(i);
        }
    }
}
function isAPrime(n) {
    if (n <= 1) return false; // negative numbers
    if (n <= 3) return true; // because of number 2

    // we want to look for a way to skip through five numbers without gliches
    if (n % 2 == 0 || n % 3 == 0) return false;

    for (let i = 5; i * i <= n; i = i + 6) {
        if (n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
}
