const { NotImplementedError } = require('../extensions/index.js');

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
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l, k) {
  while (indexOf(l, k) !== -1) {
    l = removeAt(l, indexOf(l, k));
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
