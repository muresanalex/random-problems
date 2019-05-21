// Write a function called luckySevens which takes an array of integers
// and returns true if any three consecutive elements sum to 7.

const sevens = [1, 4, 4, 3, 3, 1, 6, 0, 1];
const sevens2 = [1, 1, 1, 1, 1, 1, 5];
const random = [1, 1, 1, 1, 1, 1];

const luckySevens = arr => {
    if (arr.length < 3) {
        return false;
    }

    for (i = 0; i <= arr.length - 3; i++) {
        const value = arr.slice(i, i + 3).reduce((acc, curr) => acc + curr, 0);
        if (value === 7) {
            return true;
        }
    }

    return false;
};

console.log(luckySevens(sevens));
console.log(luckySevens(sevens2));
console.log(luckySevens(random));
