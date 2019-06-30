var isMatch = function (s, p) {
    let resultMap = new Array(s.length + 1).fill([])
    // console.log(resultMap)
    const getMatch = (ps, pp) => {
        console.log(ps, resultMap[ps])
        console.log(ps, pp, s[ps], p[pp])
        if (resultMap[ps][pp] !== undefined) {
            console.log("map", ps, pp, resultMap[ps][pp])
            return resultMap[ps][pp]
        }
        if (pp === p.length) {
            console.log("length", pp, ps, s.length, (ps === s.length))
            resultMap[ps][pp] = (ps === s.length)
            return resultMap[ps][pp]
        }
        if (ps === s.length && pp < p.length) {
            resultMap[ps][pp] = (p[pp] === "*" ? getMatch(ps, pp + 1) : false)
            return resultMap[ps][pp]
        }
        if (p[pp] === "?" | p[pp] === s[ps]) {
            console.log("?", pp, ps)
            resultMap[ps][pp] = getMatch(ps + 1, pp + 1)
            return resultMap[ps][pp]
        }
        if (p[pp] !== "*") {
            console.log('false', ps, pp)
            resultMap[ps][pp] = false
            return false
        }
        resultMap[ps][pp] = (getMatch(ps + 1, pp) | getMatch(ps, pp + 1))
        console.log("*", ps, pp, resultMap[ps][pp])
        return resultMap[ps][pp]
    }


    return (getMatch(0, 0) == 1)
};

// console.log(isMatch("abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb",
//     "**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb"))
console.log(isMatch("adceb", "*a*b"))
//console.log(isMatch('aa', 'aa'))
//console.log(isMatch('aa', '*'))