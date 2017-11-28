/** https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let buildTreeFast = (iStart, iEnd, pStart, pEnd) => {
        if (iStart == iEnd) return new TreeNode(inorder[iStart])
        if (iStart > iEnd) return null
        if (pStart > pEnd) return null
        let root = new TreeNode(preorder[pStart])
        let p = inorder.indexOf(root.val)-iStart
        root.left = buildTreeFast(iStart,iStart+p-1, pStart+1, pStart+p)
        root.right = buildTreeFast(iStart+p+1,iEnd,pStart+p+1,pEnd)
        return root
    }
    let n = inorder.length
    if (n==0) return null
    return buildTreeFast(0,n-1,0,n-1)
};