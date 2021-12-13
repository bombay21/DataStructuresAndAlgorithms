function additionOfRangeWithRecursion(num){
    if(num === 1) return 1
    let i = num
    i = i - 1
    return num + additionOfRangeWithRecursion(i)
}

console.log(additionOfRangeWithRecursion(10));
//additionOfRangeWithRecursion.js