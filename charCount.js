// Algorithm that prints the count of each character in a word
// e.g given "hello"
// result = {h:1, e:1, l:2, o:1}

let charCount = (str) => {
    let result = {}

    for (var char of str) {
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){
            result[char] = ++result[char] || 1
        }
    }
    return result
}

console.log(charCount("hello Aloha Hawaii!"))