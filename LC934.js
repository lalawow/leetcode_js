var shortestBridge = function (A) {
    if (A.length === 1) return 0
    const start = [findStart(A)]
    A[start[0][0]][start[0][1]] = 2
    let island1 = [...start]
    colorIsland(A, start, island1)
    return findOtherIsland(A, island1, 0)
};

const ds = [[-1, 0], [1, 0], [0, -1], [0, 1]]
const findStart = (A) => {
    const n = A.length
    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
            if (A[i][j]) return [i, j]
}

const colorIsland = (A, blocks, island1) => {
    const n = A.length
    if (blocks.length === 0) return
    let newBlocks = []
    blocks.forEach(block => {
        let [y, x] = block
        ds.forEach(d => {
            let [dy, dx] = d
            let nx = x + dx, ny = y + dy
            if ((nx > -1 && nx < n) && (ny > -1 && ny < n)) {
                if (A[ny][nx] === 1) {
                    A[ny][nx] = 2
                    island1.push([ny, nx])
                    newBlocks.push([ny, nx])
                }
            }
        })
    })
    return colorIsland(A, newBlocks, island1)
}

const findOtherIsland = (A, blocks, steps) => {
    const n = A.length
    if (blocks.length === 0) return
    let newBlocks = []
    let found = false
    blocks.forEach(block => {
        if (!found) {
            let [y, x] = block
            ds.forEach(d => {
                let [dy, dx] = d
                let nx = x + dx, ny = y + dy
                if ((nx > -1 && nx < n) && (ny > -1 && ny < n)) {
                    if (A[ny][nx] === 1) {
                        found = true
                    }
                    if (A[ny][nx] === 0) {
                        A[ny][nx] = 2
                        newBlocks.push([ny, nx])
                    }
                }
            })
        }
    })
    if (found) return steps
    return findOtherIsland(A, newBlocks, steps + 1)
}