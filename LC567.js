/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    const n1 = s1.length, n2 = s2.length
    if (n1 > n2) return false
    let dict1 = [], dict2 = []
    const setDict = (s, dict) => {
        for (let i = 0; i < n1; i++) {
            if (dict[s[i]]) {
                dict[s[i]]++
            } else {
                dict[s[i]] = 1
            }
        }
    }
    setDict(s1, dict1)
    setDict(s2, dict2)
    const checkDict = () => {
        for (key in dict1) {
            if (dict1[key] !== dict2[key]) return false
        }
        return true
    }
    let point = n1
    while (point <= n2) {
        if (checkDict()) return true
        if (point === n2) return false
        dict2[s2[point - n1]]--
        dict2[s2[point]] = (dict2[s2[point]]) ? (dict2[s2[point]] + 1) : 1
        point++
    }
};

console.log(checkInclusion("ab", "eidbaooo"))

console.log(checkInclusion("ab", "eidbgaooo"))

console.log(checkInclusion("hello", "ooolleoooleh"))

console.log(checkInclusion('adc', 'dcda'))

console.log(checkInclusion('ab', 'a'))