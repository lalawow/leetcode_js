/** https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */


var buildTree = function(inorder, postorder) {
    let buildTreeFast = (iStart, iEnd, pStart, pEnd) => {
        if (iStart == iEnd) return new TreeNode(inorder[iStart])
        if (iStart > iEnd) return null
        if (pStart > pEnd) return null
        let root = new TreeNode(postorder[pEnd])
        let p = inorder.indexOf(root.val)-iStart
        root.left = buildTreeFast(iStart,iStart+p-1, pStart, pStart+p-1)
        root.right = buildTreeFast(iStart+p+1,iEnd,pStart+p,pEnd-1)
        return root
    }
    let n = inorder.length
    if (n==0) return null
    return buildTreeFast(0,n-1,0,n-1)
};


