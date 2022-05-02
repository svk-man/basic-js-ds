const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let index = indexOf(l, k);
  while (index !== -1) {
    l = removeAt(l, index);
    index = indexOf(l, k)
  }

  return l;

  function removeAt(l, position) {
    if (position < 0 || position > getLength(l)) {
      return;
    }

    let current = l;

    if (position === 0) {
      l = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = current.next;
    }

    return l;
  }

  function indexOf(l, k) {
    let current = l;
    let index = 0;

    while (current.next) {
      if (current.value === k) {
        return index;
      }

      current = current.next;
      index++;
    }

    if (current.value === k) {
      return index;
    }

    return -1;
  }

  function getLength(l) {
    if (l.value === null) {
      return 0;
    }

    let current = l;
    let length = 1;

    while (current.next) {
      current = current.next;
      length++;
    }

    return length;
  }
}

module.exports = {
  removeKFromList
};
