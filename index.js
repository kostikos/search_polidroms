function isPalindrom (str) {
    return str == str.split('').reverse().join('');
}
function findPalindrom (str, separator) {
    const words = str.split(separator);
    let  count=0;
    for (let value of words) {
        if(isPalindrom(value.toLowerCase())){
            count++;
        }
    }
    return count;
}
