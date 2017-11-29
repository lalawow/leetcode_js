/** https://leetcode.com/problems/merge-k-sorted-lists/description/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length == 0) return null
    if (lists.length == 1) return lists[0]
    if (lists.length == 2) return mergeList(lists[0],lists[1])
    let res = [],count = 0
    while (count<lists.length) {
        if (count == lists.length-1) {
            res.push(lists[count])
        } else {
            res.push(mergeList(lists[count],lists[count+1]))
        }
        count+=2
    }
    return mergeKLists(res)
};

var mergeList = (list1, list2) => {
    if (list1==null) return list2
    if (list2==null) return list1
    let listA = (list1.val<=list2.val)?list1:list2
    let listB = (list1.val<=list2.val)?list2:list1
    let res = listA
    let reshead = listA
    listA=listA.next
    while (true) {
        if (listA==null) {
            res.next = listB
            break
        }
        if (listB==null) {
            res.next = listA
            break
        }
        if (listA.val<=listB.val) {
            res.next = listA
            res = res.next
            listA = listA.next
        } else {
            res.next = listB
            res = res.next
            listB=listB.next
        }
    }
    return reshead

};