const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  _root = null;

  root() {
    return this._root;
  }

  add(data) {
    this._root = addWithin(this._root, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data == data) {
        return node;
      }

      if (node.data > data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return hasWithin(this._root, data);

    function hasWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data == data) {
        return true;
      }

      return node.data > data ? hasWithin(node.left, data) : hasWithin(node.right, data);
    }
  }

  find(data) {
    return findWithin(this._root, data);

    function findWithin(node, data) {
      if (!node) {
        return null;
      }

      if (node.data == data) {
        return node;
      }

      return node.data > data ? findWithin(node.left, data) : findWithin(node.right, data);
    }
  }

  remove(data) {
    this._root = removeWithin(this._root, data);

    function removeWithin(node, data) {
      if (!node) {
        return null;
      }

      if (node.data > data) {
        node.left = removeWithin(node.left, data);
        return node;
      } else if(node.data < data) {
        node.right = removeWithin(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }

        node.data = minFromRight.data;

        node.right = removeWithin(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this._root) {
      return null;
    }

    let node = this._root;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this._root) {
      return null;
    }

    let node = this._root;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

}