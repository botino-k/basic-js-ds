const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    console.log(this.rootNode);
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = newNode;
      return;
    }

    let currentNode = this.rootNode;
    while (true) {
      if (data === currentNode.data) {
        return;
      }
      if (data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    let currentNode = this.rootNode;
    let isHas = false;
    while (currentNode && !isHas) {
      if (data === currentNode.data) {
        isHas = true;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        isHas = false;
      }
    }
    return isHas;
  }

  find(data) {
    let currentNode = this.rootNode;
    let isHas = false;
    while (currentNode && !isHas) {
      if (data === currentNode.data) {
        isHas = true;
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        isHas = false;
      }
    }
    return null;
  }

  remove(data) {
    const removeNode = (node, value) => {
      if (node === null) {
        return null;
      }

      if (value === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }

        if (node.left === null) {
          return node.right;
        }

        if (node.right === null) {
          return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };

    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    if (this.rootNode === null) {
      return null;
    }

    let currentNode = this.rootNode;
    let min;

    while (currentNode.left) {
      min = currentNode.left.data;
      currentNode = currentNode.left;
    }
    return min;
  }

  max() {
    if (this.rootNode === null) {
      return null;
    }

    let currentNode = this.rootNode;
    let max;

    while (currentNode.right) {
      max = currentNode.right.data;
      currentNode = currentNode.right;
    }
    return max;
  }
}
// const tree = new BinarySearchTree();

// tree.add(20);
// tree.add(15);
// tree.add(35);
// tree.add(10);
// tree.add(18);
// tree.add(40);
// tree.add(8);
// tree.add(11);
// tree.add(16);
// tree.add(19);
// tree.add(38);
// tree.add(45);


// tree.remove(15);
// console.dir(tree.rootNode.left)

module.exports = {
  BinarySearchTree
};