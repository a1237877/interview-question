function TreeNode(val){
  this.val = val
  this.left = this.right = null
}

var a1 = new TreeNode(1);
var a2 = new TreeNode(2);
var a3 = new TreeNode(3)

a1.right = a2
a2.left = a3

function inorder_traversal(root){
  let arr = [];
  const inorder = root => {
    if(!root) return;
    inorder(root.left);
    arr.push(root.val);
    inorder(root.right)
  }
  inorder(root)
  return arr
}

console.log(inorder_traversal(a1))