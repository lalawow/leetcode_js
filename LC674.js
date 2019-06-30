var findLengthOfLCIS = function (nums) {
    if (nums.length < 2) return nums.length
    let max = 1, count = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) count++
        else {
            max = (count > max) ? count : max
            //console.log('max', i, max)
            count = 1
        }
    }
    max = (count > max) ? count : max
    return max
};

//console.log(findLengthOfLCIS([1, 3, 5, 4, 7]))
//console.log(findLengthOfLCIS([2, 2, 2, 2]))
console.log(findLengthOfLCIS([1, 3, 5, 4, 2, 3, 4, 5]))