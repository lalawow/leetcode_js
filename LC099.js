const dfs = (node) => {
    if (node === null) return []
    return dfs(node.left).concat(node, dfs(node.right))
}
var recoverTree = function (root) {
    if (root === null) return
    let dfsArr = dfs(root)
    console.log(dfsArr)
    let start = 0, end = dfs.length - 1
    while (start < end) {
        if (dfsArr[start] < dfsArr[start + 1]) start++
        else if (dfsArr[end] > dfsArr[end - 1]) end--
        else {
            const temp = dfsArr[start].val
            dfsArr[start].val = dfsArr[end].val
            dfsArr[end].val = temp
            break
        }
    }
};