var restoreIpAddresses = function (s) {
    let dict = {}
    const putAnswer = (ans, sub, remain) => {
        dict[sub + '+' + remain] = ans
        return ans
    }
    const getIP = (sub, remain) => {
        if (dict[sub + '+' + 'remain'] !== undefined) return dict[sub + '+' + 'remain']
        if (remain === 0) {
            if (sub.length > 0) return putAnswer([], sub, remain)
            else return putAnswer([''], sub, remain)
        }
        if (remain > 0 && sub.length === 0) return putAnswer([], sub, remain)
        let res = getIP(sub.substr(1), remain - 1).map(tail => (sub[0] + (remain === 1 ? '' : '.') + tail))
        if (sub.length > 1 && sub[0] !== '0') {
            res = [...res, ...(getIP(sub.substr(2), remain - 1).map(tail => (sub.substr(0, 2) + (remain === 1 ? '' : '.') + tail)))]
            if (sub.length > 2 && sub.substr(0, 3) < '256') res = [...res, ...(getIP(sub.substr(3), remain - 1).map(tail => (sub.substr(0, 3) + (remain === 1 ? '' : '.') + tail)))]
        }
        return putAnswer(res, sub, remain)
    }

    const getIP2 = (sub, remain) => {
        if (remain === 0) {
            if (sub.length > 0) return []
            else return ['']
        }
        if (remain > 0 && sub.length === 0) return []
        let res = getIP2(sub.substr(1), remain - 1).map(tail => (sub[0] + (remain === 1 ? '' : '.') + tail))
        if (sub.length > 1 && sub[0] !== '0') {
            res = [...res, ...(getIP2(sub.substr(2), remain - 1).map(tail => (sub.substr(0, 2) + (remain === 1 ? '' : '.') + tail)))]
            if (sub.length > 2 && sub.substr(0, 3) < '256') res = [...res, ...(getIP2(sub.substr(3), remain - 1).map(tail => (sub.substr(0, 3) + (remain === 1 ? '' : '.') + tail)))]
        }
        return res
    }
    let test3Ans = []
    const getIP3 = (prev, next, remain) => {
        if (remain === 1) {
            if ((next.length === 1) || (next[0] !== '0' && (next.length === 2 || (next.length === 3 && next < '256')))) test3Ans.push(prev + next)
            return
        }
        if (next === '') return
        getIP3(prev + next[0] + '.', next.substr(1), remain - 1)
        if (next[0] === '0') return
        if (next.length > 1) getIP3(prev + next.substr(0, 2) + '.', next.substr(2), remain - 1)
        if (next.length > 2 && next.substr(0, 3) < '256') getIP3(prev + next.substr(0, 3) + '.', next.substr(3), remain - 1)
    }
    //return getIP2(s, 4)
    getIP3('', s, 4)
    return test3Ans
};

console.log(restoreIpAddresses("25525511135"))
console.log(restoreIpAddresses("0000"))
console.log(restoreIpAddresses("19216801"))
console.log(restoreIpAddresses("1111"))