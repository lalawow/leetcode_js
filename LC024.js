/** https://leetcode.com/problems/swap-nodes-in-pairs/description/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let start = head
    while (start != null) {
        let next = start.next
        if (next == null) break
        let a = start.val,
            b = next.val
        start.val = b
        next.val = a
        start = next.next
    }
    return head
};