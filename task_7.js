// Write a function that takes an array of positive integers and
//  calculates the standard deviation of the numbers.
// The function should return the standard deviation.

function stdDeviation(ArrayNumbered) {
    // lets calulate the average
    let sum = 0;
    for (let i in ArrayNumbered) total += ArrayNumbered[i];
    let average = total / ArrayNumbered.length;

    // lets calculate statndard deviation
    let standardDev = 0;
    for (let i in ArrayNumbered)
        standardDev += Math.pow(parseFloat(ArrayNumbered[i]) - average, 2);
    let finalAnswer = Math.sqrt(standardDev / ArrayNumbered.length);
    console.log(finalAnswer);
}
let ArrayNumbered = [45, 2, 9, 43, 24];
stdDeviation(ArrayNumbered);
