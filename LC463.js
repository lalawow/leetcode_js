/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let n = grid.length,
        m = grid[0].length
    let island = 0,
        neighbor = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] == 1) {
                island++
                neighbor += (((i < n - 1) ? grid[i + 1][j] : 0) + ((j < m - 1) ? grid[i][j + 1] : 0))
                    //console.log(i, j, count)
            }
        }
    }
    return 4 * island - 2 * neighbor
};

console.log(islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
]))