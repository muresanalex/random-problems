const randomWord = "random";
const palindromeWord = "rotator";

const checkPalindrom = word => {
    const reversedWord = word
        .split("")
        .reverse()
        .join("");
    return word === reversedWord;
};

console.log(`${randomWord}: ${checkPalindrom(randomWord)}`);
console.log(`${palindromeWord}: ${checkPalindrom(palindromeWord)}`);
