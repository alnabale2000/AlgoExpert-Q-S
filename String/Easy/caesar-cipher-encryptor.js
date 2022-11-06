/*
Caesar Cipher Encryptor
Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by
shifting every letter in the input string by k positions in the alphabet, where k is the key.

Note that letters should "wrap" around the alphabet; in other words, the letter z shifted by one returns the letter a .

Sample Input
string = "xyz"
key = 2

Sample Output
"zab"

Hints


Hint 1
Most languages have built-in functions that give you the Unicode value of a character as well as the character corresponding to a Unicode value.
Consider using such functions to determine which letters the input string's letters should be mapped to.

Hint 2
Try creating your own mapping of letters to codes. In other words, try associating each letter in the alphabet with a specific number - its position
in the alphabet, for instance - and using that to determine which letters the input string's letters should be mapped to.

Hint 3
How do you handle cases where a letter gets shifted to a position that requires wrapping around the alphabet? What about cases where the key
is very large and causes multiple wrappings around the alphabet? The modulo operator should be your friend here.

Optimal Space & Time Complexity
O(n) time | O(n) space - where n is the length of the input string
*/

string = "xyz"
key = 2

function solution1(string, key) {
    let stringArr = []
    console.log('`'.charCodeAt(0))
    for (let i in string) {
        let asciCode = string[i].charCodeAt(0) + key
        if (asciCode < 122)
            stringArr.push(asciCode)
        else {
            stringArr.push(97 + (asciCode % 122))
        }
    }
    for (let i in stringArr) {
        stringArr[i] = String.fromCharCode(stringArr[i])
    }
    return stringArr.join('')
}

function solution2() {
    return string.split('')
        .map((_, i) => {
            const asciCode = string.charCodeAt(i) + (key % 26);
            return String.fromCharCode((asciCode > 122 ? asciCode - 26 : asciCode));
        })
        .join('');
}

console.log(solution2(string, key))

