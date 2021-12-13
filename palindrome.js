let palindrome = (str) => {
    let reg = /[^A-Za-z0-9]/g
    str = str.toLowerCase().replace(reg, "");

    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) return false;
    }

    return true
}

console.log(palindrome("oga police"));