function power(b,e){
    console.log(`e: ${e}`)
    if(e===0) return 1;
    e = e - 1
    console.log(`b: ${b}`)
    return b * power(b,e);
}

console.log(power(3,1))