function additionOfRangeWithRecursion(num){
    if(num === 0) return 0
    return num + additionOfRangeWithRecursion(num - 1)
}

console.log(additionOfRangeWithRecursion(2));
//additionOfRangeWithRecursion.js