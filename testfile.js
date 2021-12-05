// Algorithm that prints the count of each character in a word
// e.g given "hello"
// result = {h:1, e:1, l:2, o:1}

let charCount = (str) => {
    let result = {}

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        if(result[char] > 0){
            result[char]++
        }
        else{
            result[char] = 1
        }
    }
    return result
}

console.log(charCount("hello"))