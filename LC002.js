const addOneDigit = (l1, l2, addition) => {
    const sum = l1.val + l2.val + addition
    let res = {}
    res.val = sum % 10
    addition = parseInt(sum / 10)
    l1 = (l1 === null) ? null : l1.next
    l2 = (l2 === null) ? null : l2.next
    if (l1 === null && l2 === null && addition === 0) {
        res.next = null
    } else {
        res.next = addOneDigit(l1, l2, addition)
    }
    return res
}
var addTwoNumbers = function (l1, l2) {
    return addOneDigit(l1, l2, 0)
};