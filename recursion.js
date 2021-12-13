// let factorial = (num) => {
//     let fact = 1,count = 0
//     while(count < num){
//         fact *= num - count
//         count++
//     }
//     return fact
// }

//console.log(factorial(7))
let factorialWithRecursion = (num) => {
    if(num === 1) return 1
    return num * factorialWithRecursion(num - 1)
}
console.log(factorialWithRecursion(10));