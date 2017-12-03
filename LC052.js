/** https://leetcode.com/problems/n-queens/description/
 * @param {number} n
 * @return {string[][]}
 */
var totalNQueens = function(n) {
    if (n == 1) return 1
    if (n < 4) return 0
    if (n == 4) return 2
    let res = []


    var getResult = (pos) => {
        if (pos.length == n) {
            res.push(pos)
            return
        }
        for (let i = 0; i < n; i++) {
            if (check(pos, i)) {
                getResult(pos + i)
            }
        }
        if (pos == "") {
            return res.length
        }
    }

    var displayRes = () => {
        let display = []
        let mode = []
        for (let i = 0; i < n; i++) {
            mode.push(".")
        }
        res.forEach((pos) => {
            let oneResult = []
                //console.log(pos)
            for (let i = 0; i < n; i++) {
                let str = mode.concat()
                str[parseInt(pos[i])] = "Q"
                oneResult.push(str.join(""))
                    //console.log(parseInt(pos[i]))
            }
            display.push(oneResult)
        })
        return display
    }

    var check = function(str, newNum) {
        let l = str.length
        if (l == 0) return true
        for (let i = 0; i < l; i++) {
            let strNum = parseInt(str[i])
            if (strNum == newNum) return false
            if ((l - i) == (newNum - strNum) || (l - i) == (strNum - newNum)) return false
        }
        return true
    }

    return getResult("")
};

console.log(solveNQueens(5))
    //console.log(solveNQueens(8))