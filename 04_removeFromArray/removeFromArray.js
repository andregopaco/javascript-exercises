const removeFromArray = function(inputtedArray, ...args) {
    let argsArray = [...args];
    for (let arg of argsArray) {
        let argIndex = inputtedArray.indexOf(arg);
        // If an inputted value is not present, its index will be -1. Therefore:
        if (argIndex > -1) {
            inputtedArray.splice(argIndex, 1);
        }
    }
    return inputtedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
