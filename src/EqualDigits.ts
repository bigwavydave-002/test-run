/*
Prompt from https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-i/description/?envType=daily-question&envId=2025-10-23

You are given a string s consisting of digits. Perform the following operation repeatedly until the string has exactly two digits:

For each pair of consecutive digits in s, starting from the first digit, calculate a new digit as the sum of the two digits modulo 10.
Replace s with the sequence of newly calculated digits, maintaining the order in which they are computed.
Return true if the final two digits in s are the same; otherwise, return false.
*/

function getNewString(s: string): string {
    let s2: string = ""
    let num: number = 0
    if (s.length == 2) {
        return s
    }
    for (let i: number = 0; i < s.length - 1; i++) {
        num = (parseInt(s[i]) + parseInt(s[i + 1])) % 10
        s2 = s2.concat(num.toString())
    }
    return s2;
}
function hasSameDigits(s: string): boolean {
    for (var char of s) {
        s = getNewString(s)
    }
    return s[0] == s[1]
};

console.log(hasSameDigits("472389023"))