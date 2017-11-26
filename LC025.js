/** https://leetcode.com/problems/reverse-nodes-in-k-group/description/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let p = head
    while (p !== null) {
        let enoughK = true
        let nums = []
        let p2 = p
        for (let i = 0; i < k; i++) {
            if (p2 != null) {
                nums.push(p2.val)
                p2 = p2.next
            } else {
                enoughK = false
                p = null
                break
            }
        }
        if (enoughK) {
            for (let i = 0; i < k; i++) {
                p.val = nums[k - i - 1]
                p = p.next
            }
        }
    }
    return head
};