const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.TreeRoot = null;
  }
  root() {
    return this.TreeRoot;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.TreeRoot === null) {
      this.TreeRoot = newNode;
      return;
    }

    let current = this.TreeRoot;
    let parent = null;

    while (current !== null) {
      parent = current;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    if (data < parent.data) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }
  }

  has(data) {
    let x = this.TreeRoot;
    while (x !== null && x.data !== data) {
      if (data < x.data) {
        x = x.left;
      } else {
        x = x.right;
      }
    }
    if (x) {
      return true;
    } else {
      return false;
    }
  }

  find(data) {
    let x = this.TreeRoot;
    while (x !== null && x.data !== data) {
      if (data < x.data) {
        x = x.left;
      } else {
        x = x.right;
      }
    }
    return x;
  }

  findMinNode(node) {
    let parent = null;
    while (node.left !== null) {
      parent = node;
      node = node.left;
    }
    return { minNode: node, parent };
  }

  remove(data) {
    let current = this.TreeRoot;
    let parent = null;

    while (current !== null && current.data !== data) {
      parent = current;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    if (current === null) {
      return;
    }

    if (current.left === null && current.right === null) {
      if (current === this.TreeRoot) {
        this.TreeRoot = null;
      } else if (current === parent.left) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } else if (current.left === null || current.right === null) {
      let child = current.left !== null ? current.left : current.right;
      if (current === this.TreeRoot) {
        this.TreeRoot = child;
      } else if (current === parent.left) {
        parent.left = child;
      } else {
        parent.right = child;
      }
    } else {
      const { minNode, parent: successorParent } = this.findMinNode(
        current.right
      );

      current.data = minNode.data;

      if (successorParent === null) {
        current.right = minNode.right;
      } else {
        successorParent.left = minNode.right;
      }
    }
  }

  min() {
    if (this.TreeRoot === null) return null;
    let x = this.TreeRoot;
    while (x.left !== null) {
      x = x.left;
    }
    return x.data;
  }

  max() {
    if (this.TreeRoot === null) return null;
    let x = this.TreeRoot;
    while (x.right !== null) {
      x = x.right;
    }
    return x.data;
  }
}

module.exports = {
  BinarySearchTree,
};
