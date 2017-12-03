/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let needWarm = [
        []
    ]
    let res = []
    for (let i = 0; i < temperatures.length; i++) {
        res.push(0)
        let temp = temperatures[i]
        if (needWarm[temp] == null) {
            needWarm[temp] = [i]
        } else { needWarm[temp].push(i) }
        for (let j = 30; j < temp; j++) {
            if (needWarm[j] != null) {
                needWarm[j].forEach((cold) => {
                    res[cold] = i - cold
                })
                needWarm[j] = []
            }
        }
    }
    needWarm.forEach((coldList) => {
        coldList.forEach((cold) => {
            res[cold] = 0
        })
    })
    return res
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))