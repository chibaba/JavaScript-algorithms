// Write a function that takes two parameters,
// an array and some number.
// The function should determine whether any three numbers in the array add up to the number.
//  If it does, the function should return the numbers as an array. If it doesn’t,
//  the function should return -1.
// Example
// Input: [1, 2, 3, 4, 5, 6], 6
// Output: [1, 2, 3]

function addNum(arr, addUp) {
    for (let i = 0, arrLength = arr.length; i < arrLength; i++) {
        for (let j = i + 1; j < arrLength; j++) {
            for (let k = i; k < arrLength; k++) {
                if (arr[i] + arr[j] + arr[k] == addUp) {
                    return [i, j, k];
                }
            }
        }
    }
    return -1;
}
