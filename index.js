function isPalindrom (str) {
    return str == str.split('').reverse().join('');
}
function findPalindrom (str, separator) {
    const words = str.split(separator);
    let  count=0;
    for (let i = 0; i < words.length; i += 1) {
        if(isPalindrom(words[i])){
            count++;
        }
    }
    return count;
}
