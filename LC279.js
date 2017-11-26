/** https://leetcode.com/problems/perfect-squares/description/
 * @param {number} n
 * @return {number}
 */


var numSquares = function(n) {
    return numSquareAction(n)
};

var numSquareList = []
var numSquareAction = function(n) {
    if (numSquareList[n] != null) return numSquareList[n]
    let start = parseInt(Math.sqrt(n))
    if (n == start * start) return 1
    let min = 100000
    for (let i = start; i > 0; i--) {
        let part = numSquareAction(n - i * i)
        if (1 + part < min) {
            min = 1 + part
        }
    }
    numSquareList[n] = min
    return min
};

console.log(numSquares(192))