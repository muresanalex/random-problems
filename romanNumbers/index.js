const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

const fromRoman = romanNumber => {
    const splitedRomanNumbers = romanNumber.split("");
    const numericalValue = splitedRomanNumbers.reduce(
        (accumulator, currentRomanValue, index) => {
            const currentNumericalValue = romanNumbers[currentRomanValue];
            const nextRomanValue = splitedRomanNumbers[index + 1];
            const nextNumericalValue = nextRomanValue
                ? romanNumbers[nextRomanValue]
                : null;
            if (
                nextNumericalValue &&
                nextNumericalValue > currentNumericalValue
            ) {
                return accumulator - currentNumericalValue;
            }
            return accumulator + currentNumericalValue;
        },
        null
    );
    return numericalValue;
};

fromRoman("LXXXVII"); // returns 87
fromRoman("XLIII"); //  returns 43
fromRoman("XXII"); // returns 22
fromRoman("DCCVII"); // returns 707
fromRoman("LXIX"); // returns 69
