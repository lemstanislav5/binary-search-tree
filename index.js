class Node {
  constructor(data) {
    this.data = data; //node value (значение узла)
    this.left = null; //left node child reference (ссылка на дочерний узел слева)
    this.right = null; //right node child reference (ссылка на дочерний узел справа)
  }
}

class BinarySearchTree {
  constructor() {
    this.riit = null; // корень bat
  }
  insert (data) {
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode); // helper method below (вспомогательный метод ниже)
    }
  };

  insertNode(node, newNode) {
    console.log(node, newNode)
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}

const BST = new BinarySearchTree();
BST.insert(11);
BST.insert(7);
BST.insert(9);
BST.insert(6);

console.log(BST);
