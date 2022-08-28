const removeFromArray = function(arr, ...value) {
    const myArray = arr.filter(ele => !value.includes(ele));
    return myArray;

}
// Do not edit below this line
module.exports = removeFromArray;

