/** Monotone Increasing Digits
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
    if (parseInt(N) < 10) return parseInt(N)
    let str = ('' + N).split("")
    let p = 1
    var change = (p) => {
        //console.log("cb", str)
        for (let i = p; i < str.length; i++) { str[i] = "9" }
        //console.log("ca", str)
        if (str[p - 1] == "0") {
            change(p - 1)
        } else {
            str[p - 1] = "" + (parseInt(str[p - 1]) - 1)
        }
    }
    while (p < str.length) {
        if (str[p - 1] <= str[p]) {
            p++
        } else {
            change(p)
                //console.log(str)
            return monotoneIncreasingDigits(str.join(""))
        }
    }
    return parseInt(str.join(""))
};


console.log(monotoneIncreasingDigits(10))
console.log(monotoneIncreasingDigits(1234))
console.log(monotoneIncreasingDigits(332))

console.log(monotoneIncreasingDigits(100))