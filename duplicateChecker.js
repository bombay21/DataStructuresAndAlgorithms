// using frequency counter
function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  console.log(collection)
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

console.log("using frequency counter: "+areThereDuplicates(1,5,6,6,3,4,9));

// using multiple pointers
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

console.log(
  "using multiple pointers: " + areThereDuplicates(1, 5, 6, 3, 4, 9)
);

// using one liner solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
console.log(
  "using one liner solution: " + areThereDuplicates(1, 5, 6, 6, 3, 4, 9)
);