class Node{
    constructor(val){
        this.key = val
        this.left = null
        this.right = null
    }
}

var root = null

function inOrder(node){
    if(node == null){
        return
    }

    inOrder(node.left)
    console.log(`${node.key} `)
    inOrder(node.right)

}

function preOrder(node){
    if(node == null){
        return
    }

    console.log(`${node.key} `)
    preOrder(node.left)
    preOrder(node.right)

}

function postOrder(node){
    if(node == null){
        return
    }

    postOrder(node.left)
    postOrder(node.right)
    console.log(`${node.key} `)

}

root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)

console.log(`InOrder list is `)
inOrder(root)
console.log(`Preorder list is `)
preOrder(root)
console.log(`Postorder list is `)
postOrder(root)