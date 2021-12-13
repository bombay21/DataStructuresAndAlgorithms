function factorial(num) {
  if (num === 1) return 1;
  if (num === 0) return 1;
  let i = num
  i = i - 1;
  return num * factorial(i);
}

console.log(factorial(1))