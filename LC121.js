var maxProfit = function (prices) {
    if (prices.length < 2) return 0
    let buy = prices[0], max = 0
    for (let i = 1; i < prices.length; i++) {
        buy = Math.min(prices[i], buy)
        max = Math.max(prices[i] - buy, max)
        // if (prices[i] < buy) buy = prices[i]
        // else if (prices[i] - buy > max) max = prices[i] - buy
    }
    return max
};