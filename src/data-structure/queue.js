class Queue {
  constructor() {
    this.items = [];
    this.front = null;
  }

  size() {
    return this.items || this.items.length > 0 ? this.items.length : 0;
  }

  getFront() {
    if (this.items.length > 0) {
      return this.items[0];
    }
    return null;
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.items.length < 1) {
      return null;
    } else {
      return this.items.shift();
    }
  }

  flush() {
    this.items = null;
  }
}

class GenerateBinary {
  constructor() {
    this.queue = new Queue();
  }
  generate(times) {
    let first, second;
    let result = [];
    this.queue.enqueue("1");
    for (let i = 0; i < times; i++) {
      result.push(this.queue.dequeue());
      first = result[i] + "0";
      second = result[i] + "1";
      this.queue.enqueue(first);
      this.queue.enqueue(second);
    }
    return result;
  }

  flush() {
    this.queue.flush();
    this.queue = null;
  }
}

function generateBinaryNumbers(times) {
  let binary = new GenerateBinary();
  // console.log(binary.generate(10));
  console.log(binary.generate(times));
  binary.flush();
  binary = null;
}
