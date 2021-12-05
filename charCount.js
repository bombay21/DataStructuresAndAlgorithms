// Algorithm that prints the count of each character in a word
// e.g given "hello"
// result = {h:1, e:1, l:2, o:1}

let charCount = (str) => {
    let result = {}

    for (let char of str) {
        char = char.toLowerCase();
        if (isAlphaNumeric(char)) { // Regex is less efficient - if(/a-z0-9/.test(char))
          result[char] = ++result[char] || 1;
        }
    }
    return result
}

let isAlphaNumeric = (char) => {
  let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  return true;
};

console.log(charCount("hello Aloha Hawaii7!"))