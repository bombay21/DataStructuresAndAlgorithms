const regex = /[^0-9a-zA-Z]/g

let str = "Sh**--t"

str = str.replace(regex,"")
console.log(str)