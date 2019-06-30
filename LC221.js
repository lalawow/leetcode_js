var maximalSquare = function (matrix) {
    let res = [], max = 0
    for (let i = 0; i < matrix.length; i++) res[i] = []
    const findSquare = (i, j) => {
        if (i < 0 || j < 0) return 0
        if (matrix[i][j] === "0") return 0
        if (res[i][j] !== undefined) return res[i][j]
        if (i === 0 || j === 0) res[i][j] = 1
        else res[i][j] = 1 + Math.min(findSquare(i - 1, j), findSquare(i, j - 1), findSquare(i - 1, j - 1))
        if (res[i][j] > max) max = res[i][j]
        return res[i][j]
    }
    for (let i = 0; i < matrix.length; i++)
        for (let j = 0; j < matrix[0].length; j++)
            findSquare(i, j)
    return max

}
// var maximalSquare = function (matrix) {
//     var max = 0;

//     if (!matrix.length) {
//         return max;
//     }

//     var lastRow = matrix.length - 1;
//     var lastCol = matrix[0].length - 1;

//     var findSquare = function (initRow, initCol, row, col, size) {
//         var prevSize = size - 1;
//         if ((initRow + prevSize) > lastRow || (initCol + prevSize) > lastCol) {
//             return;
//         }
//         for (var i = 0; i < size; i++) {
//             if (matrix[initRow + i][col] !== "1") {
//                 return;
//             }
//         }
//         for (var i = 0; i < prevSize; i++) {
//             if (matrix[row][initCol + i] !== "1") {
//                 return;
//             }
//         }

//         var square = size * size;
//         if (max < square) {
//             max = square;
//         }

//         findSquare(initRow, initCol, row + 1, col + 1, size + 1);
//     };

//     for (var i = 0; i <= lastRow; i++) {
//         for (var j = 0; j <= lastCol; j++) {
//             if (matrix[i][j] === "1") {
//                 findSquare(i, j, i + 1, j + 1, 2);
//                 if (max === 0) {
//                     max = 1;
//                 }
//             }
//         }
//     }

//     return max;
// };