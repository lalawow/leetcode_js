/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    const m = board.length, n = board[0].length
    let res = Array(m).fill(0).map(key => Array(n).fill(0))
    let lives = [], deads = []
    const countNeighbors = (x, y, live) => {
        let count = 0
        for (let dx = -1; dx < 2; dx++) {
            for (let dy = -1; dy < 2; dy++) {
                if ((x + dx >= 0 && x + dx < n) && (y + dy >= 0 && y + dy < m)) {
                    if (board[y + dy][x + dx]) count++
                    else if (live) {
                        if (!res[y + dy][x + dx]) {
                            ; (function (nx, ny) {
                                if (countNeighbors(nx, ny, false) === 3) {
                                    res[ny][nx] = 1
                                    lives.push([ny, nx])
                                } else {
                                    res[ny][nx] = 2
                                }
                            })(x + dx, y + dy)
                        }
                    }
                }
            }
        }
        return count - board[y][x]
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j]) {
                ; (function (x, y) {
                    let checker = countNeighbors(x, y, true)
                    if (checker < 2 || checker > 3) deads.push([y, x])
                })(j, i)
            }
        }
    }
    deads.forEach(dead => {
        board[dead[0]][dead[1]] = 0
    })
    lives.forEach(live => {
        board[live[0]][live[1]] = 1
    })
    //    return board
};


const init = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
]
let res = gameOfLife(init)
console.log(res)


