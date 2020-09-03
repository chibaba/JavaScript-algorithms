// Write a function that takes an array of positive integers. The function should
//  calculate the sum of all even and odd integers and return an array containing the sums.
//  The first index in the returned array
//  should hold the sum of the even integers and
//  the second index should hold the sum of the odd integers.

// function isAdd(n) {
//     let arr = [];
//     if (n % 2 === 0) {
//         for (var i = 0; i < n.length; i++) return (arr += i);
//     }
//     if (n % 2 !== 0) {
//         for (var j = 0; j < n.length; j++) return (arr += j);
//     }
//     return (arr = [i, j]);
// }

function isSum(n) {
    let arr = [];
    if (n % 2 == 0) {
        for (var i = 0; i < n.length; i++) {
            console.log(i);
        }
        if (n % 2 !== 0) {
            for (var j = 0; j < n.length; j++) {
                console.log(j);
            }

            if ((arr[i], arr[j] == arr)) {
                return [i, j];
            }
        }
    }
    return -1;
}
