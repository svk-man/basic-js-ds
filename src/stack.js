const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
   elements = [];

  push(element) {
    this.elements.push(element);
  }

  pop() {
    if (!this.elements.length) {
      return;
    }

    return this.elements.pop();
  }

  peek() {
    if (!this.elements.length) {
      return;
    }

    let element = this.pop();
    this.push(element);
    return element;
  }
}

module.exports = {
  Stack
};