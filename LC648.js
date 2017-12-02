/** https://leetcode.com/submissions/detail/130523731/
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
    let l = []
    dict.forEach((word) => {
            if (word.length == 1) {
                l[word] = true
            } else {
                let key = word.substr(0, 2)
                if (l[key] != null) {
                    l[key].push(word)
                } else {
                    l[key] = [word]
                }
            }
        })
        //console.log(l)
    let wordslist = sentence.split(" ")
    for (let i = 0; i < wordslist.length; i++) {
        let word = wordslist[i]
        if (l[word[0]]) {
            wordslist[i] = word[0]
        } else {
            if ((word.length > 1) && (l[word.substr(0, 2)] != null)) {
                let list = l[word.substr(0, 2)]
                for (let j = 0; j < list.length; j++) {
                    if (word.substr(0, list[j].length) == list[j]) {
                        wordslist[i] = list[j]
                        break
                    }
                }
            }
        }
    }
    return wordslist.join(' ')
};

console.log(replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery"))
console.log(replaceWords(["fnzl", "zozu", "eiokmhh", "udsirjs", "yojcrl", "yxgls", "zahirurb", "vfjbjqpe", "pad", "jbdvzxe", "ltukmawo", "wkjq", "cplvofxd", "xzdkavht", "iaugxx", "zlpqu", "aeoxk", "jjl", "tijmqjdc", "wqhi", "basyvspk", "gyxzvkfc", "zbd", "fuud", "prpnkvhv", "qqhmo", "cgj", "bfjrwhv", "rbe", "ydozs", "wqypjrsg", "xisrg", "lyqeg", "fdqlfac", "ktihizqx", "mqlaqoz", "wtpsaqpl", "lfjgt", "xcyaec", "ghctcsg", "kez", "jhwn", "dzgi", "zkdpjbc", "merkid", "oxcx", "qstbbhps", "vhzyyax", "iqg", "ccvg", "rbdvheyi", "epmyctd", "mawozcq", "riysk", "ktqpap", "nacxtew", "gvgsd", "nld", "azyr", "odsks", "mhqat", "kokaiuu", "dzwlx", "aajt", "oxoid", "smntdxgz", "ijhh", "bvygve", "xbtin", "oizhgeml", "nlhszmn", "wob", "hoybgcto", "tkwjm", "xdwsimqk", "ptj", "uqny", "uvbx", "vkc", "mxszu", "yjf", "edkvr", "klbtwpry", "wphofg", "zqf", "vzknpbc", "tilnvqwl", "intmxg", "nydbmuzc", "hgltr", "luq", "zxdow", "buuitd", "xvhis", "pfeqoh", "nojprhf"], "mapxajnidbzoaccclu"))