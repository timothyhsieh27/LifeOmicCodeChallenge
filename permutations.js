const permutations = (input) => {    
    let currentIndex = 0;
    let inputIndex = 0;
    let inputArray = Object.values(input);
    let inputArrayNames = Object.keys(input);
    let currentKey = inputArrayNames[inputIndex]
    let permutation = [];
    let result = [];
    let output = result;
    let totalPermutationsArray = [];
    
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    function isValidArray(currentValue) {
        return (Array.isArray(currentValue) && currentValue.length ? true : false);
    }

    function isNotArray(currentValue) {
        return !(Array.isArray(currentValue)? true : false);
    }

    function pushSingleValue(currentValue) {
        let arrayValue = [];
        if (currentValue !== undefined  && isNotArray(currentValue) && !isValidArray(currentValue)) {
            let inputKey = getKeyByValue(input, currentValue);
            arrayValue.push(currentValue);
            input[inputKey] = arrayValue;
        }
    }

    function calculateTotalPermutations() {
        inputArrayNames.forEach(arrayName => {
            let currentValue = input[arrayName];
            pushSingleValue(currentValue);
            if (isValidArray(currentValue)) {
                totalPermutationsArray.push(input[arrayName].length);
            } 
        });
        return totalPermutationsArray.reduce((a,b) => a * b);
    }

    function isSingle(currentValue) {
        return (currentValue.length === 1 ? true : false);
    }

    function buildPermutation() {
        let holdingArray = [];
        property = {};
        inputArrayNames.forEach(arrayName => {
            let currentValue = input[arrayName];
            pushSingleValue(currentValue);
            if (isValidArray(currentValue)){
                (isSingle(currentValue) ? property[arrayName] = currentValue[0] : (arrayName === currentKey) ? property[arrayName] = currentValue[currentIndex] : property[arrayName] = currentValue[inputIndex]);
            }
            holdingArray.push(property); 
            permutation = holdingArray.reduce(((r, c) => Object.assign(r, c)), {});
        });
        result.push(permutation);
        currentIndex += 1;
    }

    function elementsRemain() {
        return (currentIndex < (inputArray[inputIndex].length) ? true : false);
    }
    
    function inputsRemain() {
        return (inputIndex < (inputArray.length-1) ? true : false);
    }

    function buildResult() {
        while (result.length < totalPermutations) {
            if (elementsRemain()) {
                buildPermutation();
            } else if (inputsRemain()) {
                inputIndex += 1;                                                                                                                  
                currentIndex = 0;
                buildPermutation();
            } else {
                break;
            }
        }
    }
    let totalPermutations = calculateTotalPermutations();
    buildResult();
    return output;
}

module.exports = permutations;