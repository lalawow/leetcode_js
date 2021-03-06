/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    let path = [
        [
            [0, 1],
            [1, 0]
        ],
        [
            [0, -1],
            [-1, 0]
        ]
    ]


    let max = 0,
        n = grid.length,
        totalStep = 4 * n - 4
    if (n == 0) return 0
    if (n == 1) return (grid[0][0] == 1) ? 1 : 0
    let getPath = (p, choice, cherry, step, footPrint) => {
        if ((p[0] == n - 1) && (p[1] == n - 1)) choice = 1
        if ((p[0] + p[1] == 0) && (choice == 1)) {
            max = (cherry > max) ? cherry : max
            return false
        }

        let val = grid[p[0]][p[1]]
        if (val == -1) {
            return false
        } else {
            if ((val == 1) && !(footPrint[p[0] * n + p[1]] > 0)) {

                cherry += 1
                footPrint[p[0] * n + p[1]] = 1

            }
            if (cherry + (totalStep - step) <= max) return false
            for (let i = 0; i < 2; i++) {
                let act = path[choice][i]
                let newp = [p[0] + act[0], p[1] + act[1]]
                if ((newp[0] >= 0) && (newp[0] < n) && (newp[1] >= 0) && (newp[1] < n)) {

                    let ans = getPath(newp, choice, cherry, step + 1, footPrint.concat())
                    if (ans) return true
                }
            }
        }
        return false
    }

    //console.log(grid)
    getPath([0, 0], 0, 0, 1, [])
    return max

};

console.log("ans1", cherryPickup([
    [1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1]
]))

console.log("ans2", cherryPickup([
    [1, 1, 1, 1, -1, -1, -1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 0, -1, 1, 1],
    [0, 0, 0, 0, 1, -1, 0, 0, 1, -1],
    [1, 0, 1, 1, 1, 0, 0, -1, 1, 0],
    [1, 1, 0, 1, 0, 0, 1, 0, 1, -1],
    [1, -1, 0, 1, 0, 0, 0, 1, -1, 1],
    [1, 0, -1, 0, -1, 0, 0, 1, 0, 0],
    [0, 0, -1, 0, 1, 0, 1, 0, 0, 1]
]))

console.log("ans3", cherryPickup([
    [0, 0, 1, 0, 0, 1, 0, 1, 1, -1, 0, 0, -1, -1, 0, 1, 1, -1, 0, -1],
    [1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, -1, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, -1, 1, 0, 0, 1, 0, 0, 1, 1],
    [-1, 0, -1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, -1, 1, 0, 0, 0, 1, 1],
    [0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, -1, 1, 0, 1, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1],
    [0, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0],
    [1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, -1, 0, -1, 0, 1, 0],
    [0, 1, -1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, -1, 1, 0, 0, -1, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, -1, 0, 1, 0, -1, 0, 0, 1, 0, 1, 1],
    [1, -1, -1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0],
    [-1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, -1, 1, 1, 1, 0, 0, 1, -1, 1, 1, 0, 1, 0, 1, 0, -1, 1, 0],
    [1, -1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, -1, 0, 0, 1, 0, -1],
    [-1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, -1, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, -1, 0, -1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, -1, 0]
]))