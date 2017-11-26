/** https://leetcode.com/problems/3sum-closest/description/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b)
        //console.log(nums)
    let n = nums.length
    let closestSum = 1000000
    let res = 1000000
    let tooLarge = false
    for (let i = 0; i < n - 2; i++) {
        //console.log(i, closestSum)
        if (tooLarge) break
        if (nums[i] + nums[i + 1] + nums[i + 2] > target) tooLarge = true
        if ((i == 0) || (nums[i] != nums[i - 1])) {
            if (nums[i] + nums[n - 1] + nums[n - 2] < target) {
                let diff = target - (nums[i] + nums[n - 1] + nums[n - 2])
                    //if (diff < closestSum) console.log("close", i, diff)
                res = (diff < closestSum) ? (target - diff) : res
                closestSum = (diff < closestSum) ? diff : closestSum
            } else {
                let j = i + 1,
                    k = n - 1,
                    sign = (nums[i] + nums[j] + nums[k] >= target)
                while (j < k) {
                    let sum = nums[i] + nums[j] + nums[k]
                    let diff = Math.abs(sum - target)
                    let j2 = j
                    let k2 = k
                        //if (diff < closestSum) console.log("i,j,k", i, j, k)
                    res = (diff < closestSum) ? sum : res
                    closestSum = (diff < closestSum) ? diff : closestSum
                    if (closestSum == 0) {
                        tooLarge = true
                        break
                    }
                    if (sum > target) {
                        k--
                        while ((j < k) && (nums[k] == nums[k + 1])) k--
                    }
                    if (sum < target) {
                        j++
                        while ((j < k) && (nums[j] == nums[j - 1])) j++
                    }
                }
            }
        }
    }
    return res
};

console.log(threeSumClosest([-1, 2, 1, -4], 1))