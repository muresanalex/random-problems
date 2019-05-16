import {
    calculator,
    result,
    divide,
    times,
    minus,
    plus,
    equals,
    clear,
    numbers,
    percent
} from "./selectors";
import { setResult, showResult, handleClear, handleNumber } from "./handlers";

clear.addEventListener("click", handleClear);
equals.addEventListener("click", showResult);
numbers.forEach(number => {
    number.addEventListener("click", handleNumber);
});
