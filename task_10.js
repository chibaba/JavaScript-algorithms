// Write a function that takes a string. The function should calculate the character
//  in the string with the most occurrences and return that character.
//   If more than one character has the most occurrence, return those characters as an array.
// Example
// Input: “afhuusnimr443o0sggg”
// Output: “g”

let mostFreequent = function (str) {
    let highestFreq = 0,
        freqChar = "";
    str.split("").forEach(function (char) {
        if (str.split(char).length > highestFreq) {
            highestFreq = str.split(char).length;
            freqChar = char;
        }
    });
    return freqChar;
};
