/** Max Points on a Line https://leetcode.com/problems/max-points-on-a-line/description/
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let n = points.length
    if (n < 3) return n
    let max = 2;
    for (let i = 0; i < n - max; i++) {
        let slopes = []
        let counts = []
        let base = 1
        for (let j = i + 1; j < n; j++) {
            let slope
            let samePoint = false
            if (points[i].y == points[j].y) {
                if (points[i].x == points[j].x) {
                    base++
                    samePoint = true
                } else {
                    slope = false
                }
            } else {
                slope = (points[i].x - points[j].x) / (points[i].y - points[j].y)
            }
            if (samePoint) {
                if (slopes.length == 0) {
                    slopes.push(false)
                    counts.push(2)
                } else {
                    counts = counts.map((count) => {
                        count++
                        max = (count > max) ? count : max
                        return count
                    })
                }
            } else {
                let p = slopes.indexOf(slope)
                if (p < 0) {
                    slopes.push(slope)
                    counts.push(base + 1)
                    max = (base + 1 > max) ? (base + 1) : max
                } else {
                    counts[p]++
                        max = (counts[p] > max) ? counts[p] : max
                }
            }
        }
    }
    return max
};