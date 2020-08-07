class Node {
  constructor(data, el) {
    this.data = data;
    this.nextElement = el;
  }

  flush() {
    this.data = null;
    this.nextElement = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    let node = new Node(value);
    if (this.head == null) {
      this.head = node;
      return this;
    }

    node.nextElement = this.head;
    this.head = node;
    return this;
  }

  insertAtTail(value) {
    let node = new Node(value);
    if (this.head == null) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.nextElement != null) {
      currentNode = currentNode.nextElement;
    }
    currentNode.nextElement = node;
    return this;
  }

  insertAfter(value, newValue) {
    let node = new Node(newValue);
    if (!this.head) {
      this.head = node;
      return this;
    }

    let currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.data === value) {
        [node.nextElement, currentNode.nextElement] = [
          currentNode.nextElement,
          node,
        ];
        break;
      }
      currentNode = currentNode.nextElement;
    }
    return this;
  }

  deleteNode(value) {
    if (!this.head) {
      return this;
    }
    if (this.head.data === value) {
      let temp = this.head;
      this.head = this.head.nextElement;
      temp.flush();
      return this;
    }
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode != null) {
      if (currentNode.data === value) {
        break;
      }
      [previousNode, currentNode] = [currentNode, currentNode.nextElement];
    }
    if (currentNode != null) {
      if (previousNode) {
        previousNode.nextElement = currentNode.nextElement;
      }
      currentNode.flush();
    }
    return this;
  }

  reverseList() {
    if (!this.head) {
      return this;
    }
    let currentNode = this.head;
    let previousNode = null,
      nextNode = null;
    while (currentNode != null) {
      nextNode = currentNode.nextElement;
      currentNode.nextElement = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
    this.head = previousNode;
    return this;
  }

  printList(isNextLineRequired = false) {
    // if (isNextLineRequired) {
    //   console.log("");
    // }
    let str = "";

    let currentNode = this.head;
    if (!currentNode) {
      str = "Empty Linked list";
      //   process.stdout.write(str);
    }

    while (currentNode != null) {
      str += String(currentNode.data);
      //   process.stdout.write(String(currentNode.data));
      currentNode = currentNode.nextElement;
      if (currentNode) {
        str += "-> ";
        // process.stdout.write("-> ");
      }
    }
    console.log(str);
    return str;
  }
}

let linkedList = new LinkedList();

function insertAtHead(value) {
  linkedList.insertAtHead(value);
}

function insertAtTail(value) {
  linkedList.insertAtTail(value);
}

function insertAfter(value, newValue) {
  linkedList.insertAfter(value, newValue);
}

function deleteNode(value) {
  linkedList.deleteNode(value);
}

function printList() {
  return linkedList.printList();
}

function reverseList() {
  linkedList.reverseList();
}

// linkedList.insertAtHead(10);
// linkedList.insertAtHead(20);
// linkedList.insertAtHead(30);
// linkedList.insertAtTail(90);
// linkedList.insertAfter(20, 25);
// linkedList.insertAtTail(40);
// linkedList.insertAtTail(50);
// linkedList.printList();

// linkedList.deleteNode(25);
// linkedList.printList(true);

// linkedList.reverseList();
// linkedList.printList(true);
