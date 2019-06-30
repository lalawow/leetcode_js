var findKthLargest = function (nums, k) {
    if (nums.length === 1) return nums[0]
    const swap = (arr, a, b) => {
        [arr[a], arr[b]] = [arr[b], arr[a]]
    }

    const findK = (left, right) => {
        if (left === right) return nums[left]
        let i = getIndex(left, right)
        if (i === (k - 1)) return nums[i]
        if (i > (k - 1)) return findK(left, i - 1)
        if (i < (k - 1)) return findK(i + 1, right)
    }

    const getIndex = (left, right) => {
        let index = left + 1,
            point = left + 1
        while (point <= right) {
            if (nums[left] < nums[point]) {
                swap(nums, index, point)
                index++
            }
            point++
        }
        swap(nums, left, index - 1)
        return index - 1
    }

    return findK(0, nums.length - 1, k)


};


console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))