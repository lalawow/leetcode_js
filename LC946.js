var validateStackSequences = function (pushed, popped) {
    let popPt = 0, pushPt = 0, arr = []
    while (pushPt < pushed.length) {
        console.log(pushPt)
        arr.push(pushed[pushPt])
        pushPt++
        while (popPt < popped.length && arr[arr.length - 1] === popped[popPt]) {
            arr.pop()
            popPt++

        }
    }

    return (arr.length === 0)

};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]))
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 2, 1]))
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]))