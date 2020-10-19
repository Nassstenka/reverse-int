module.exports = function reverse (n) {
    n = Math.abs(n);
    let str = `${n}`;
    let charArray = str.split('');
    charArray.reverse();
    str = charArray.join('');
    return Number(str);
}
