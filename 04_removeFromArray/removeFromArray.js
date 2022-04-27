const removeFromArray = function(inputtedArray, ...args) {
    let argIndex;
    let argsArray = [...args];
    for (let arg of argsArray) {
        let argIndex = inputtedArray.indexOf(arg);
        inputtedArray.splice(argIndex, 1);
    }
    return inputtedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
