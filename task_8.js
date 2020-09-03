// Write a method to count the number of 3s that appear
// in all the numbers between 0 and n (inclusive).
// It should return an object containing the count of the number of 3s
// that appear and an array of the numbers that have 3s in them
// Example:
// Input: 35
// Output: { count: 10, numbers: [3, 13, 23, 30, 31, 32, 33, 34, 35] }

function countNumberElement(arr) {
    var hashmap = {},
        last,
        answer = [];

    for (let i = 0, arrLength = arr.length; i < arrLength; i++) {
        let currentArr = arr[i];
        last = null;
        for (
            let j = 0, currentArrayLen = currentArray.length;
            j < currentArrayLen;
            j++
        ) {
            let currentElement = currentArray[j];
            if (last != currentElement) {
                if (!hashmap[currentElement]) {
                    hashmap[currentElement] = 1;
                } else {
                    hashmap[currentElement]++;
                }
            }
            last = currentElement;
        }
    }
    // iterating through the hashmap
    for (let prop in hashmap) {
        if (hashmap[prop] == arr.length) {
            answer.push(parseInt(prop));
        }
    }
    return answer;
}
