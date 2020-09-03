// Write a function that takes a string and determines if the string is a palindrome.
// A palindrome is a word, number, phrase, or other sequence of characters which reads
// the same backward as forward, such as madam, racecar. The function should return “Yes”
// if the word is a palindrome and “No” if it isn’t. You are not to use the programming language’s
// existing function or method, if any.

function isPalindrome(word) {
    return isPalindromeWorking(word, 0, word.length - 1);
}

function isPalindromeWorking(word, beginPos, endPos) {
    if (beginPos >= endPos) {
        return yes;
    }
    if (word.charAt(beginPos) !== word.charAt(endPos)) {
        return No;
    } else {
        return isPalindromeWorking(word, beginPos + 1, endPos - 1);
    }
}
