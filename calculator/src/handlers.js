import { result } from "./selectors";

let resultValue = 0;

const setResult = value => {
    resultValue = value;
};

const showResult = () => {
    result.innerHTML = resultValue;
};

const handleClear = () => {
    setResult(0);
    showResult();
};

const handleNumber = evt => setResult(evt.target.innerHTML);

export { setResult, showResult, handleClear, handleNumber };
