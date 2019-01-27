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
    
    function calculateTotalPermutations() {
        inputArrayNames.forEach(arrayName => {
            totalPermutationsArray.push(input[arrayName].length);
        });
        return totalPermutationsArray.reduce((a,b) => a * b);
    }

    function isSingle(currentArray) {
        return (currentArray.length === 1 ? true : false);
    }

    function buildPermutation() {
        let holdingArray = [];
        property = {};
        inputArrayNames.forEach(arrayName => {
            let currentArray = input[arrayName];
            (isSingle(currentArray) ? property[arrayName] = currentArray[0] : (arrayName === currentKey) ? property[arrayName] = currentArray[currentIndex] : property[arrayName] = currentArray[inputIndex]);
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