/** https://leetcode.com/problems/reverse-words-in-a-string/description/
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    str = str.replace(/\s+/g, " ")
    while ((str.length > 1) && (str[0] == " ")) {
        str = str.substr(1)
    }
    if (str == " ") return ""
    let res = str.split(" ")
    str = res.reverse().join(' ')
    return (str[0] == " ") ? str.substr(1) : str
};

console.log("'" + reverseWords("    ") + "'")