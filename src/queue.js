const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      const y = this.tail;
      y.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    if (this.head === null) throw new Error("The queue is empty");
    const head = this.head;
    this.head = head.next;
    if (this.head === null) this.tail = null;
    return head.value;
  }
}

module.exports = {
  Queue,
};
