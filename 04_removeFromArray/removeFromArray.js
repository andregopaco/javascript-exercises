const removeFromArray = function(inputtedArray, ...args) {
    let argIndex;
    let argsArray = [...args];
    for (arg in argsArray) {
        let argIndex = inputtedArray.indexOf(arg);
        inputtedArray.splice(argIndex, 1);
    }
    return inputtedArray;
};


//     for (arg in argsArray) {
//        for (item in inputtedArray) {
//            if (arg === item) {
                   
//            }
//        }
//     }
//     return inputtedArray;
// };

// Do not edit below this line
module.exports = removeFromArray;
