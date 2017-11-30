/** https://leetcode.com/problems/coin-change-2/description/
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {  
    if (amount==0) return 1
    if (coins.length==0) {
        return 0
    } 
    let res = []
    res[0]=1
    for (let i=1; i<=coins.length; i++) {
        for (let j=(i==1)?1:coins[i-1]; j<=amount; j++) {
            if (i==1) {res[j] =(j%coins[0]==0)?1:0} else {               
            res[j]+=res[j-coins[i-1]]             
            }
        }
    }
    return res[amount]
};

//console.log(change(5,[1,2,5]))
//console.log(change(3,[2]))
//console.log(change(10,[10]))
console.log(change(500,[2,7,13]))