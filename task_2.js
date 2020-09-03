// Write a function that accepts a positive integer and determines if it is a prime number.
// The function should return true, if it is a prime number or false if it isn’t.

// We want to look for a way to make the time complexity faster
// we dont want to loop through all the arrays thereby making the complexity O(n)
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
