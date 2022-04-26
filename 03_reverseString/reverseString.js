const reverseString = function(word) {
    let charCount = word.length;
    let reversedWord = "";
    for (let i = charCount; i >= 0; i--) {
        let char = word.charAt(i);
        reversedWord += char;
    }
    return reversedWord;
};

// x = reverseString("example");
// console.log(x);

// Do not edit below this line
module.exports = reverseString;
