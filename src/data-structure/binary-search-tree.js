class BTSNode {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }

  flush(flushChildren = false) {
    if (flushChildren) {
      if (this.leftChild) this.leftChild.flush();
      if (this.rightChild) this.rightChild.flush();
    }
    this.leftChild = null;
    this.rightChild = null;
  }
}
class BinarySearchTree {
  constructor(value) {
    this.root = new BTSNode(value);
  }

  insert(value) {
    let node = new BTSNode(value);
    this.appendNode(this.root, node);
  }

  search(value) {
    return this.findNode(this.root, value);
  }

  min() {
    return this.findMin(this.root);
  }

  max() {
    return this.findMax(this.root);
  }

  findMax(currentNode) {
    if (currentNode !== null) {
      if (currentNode.rightChild === null) {
        return currentNode.value;
      } else {
        return this.findMax(currentNode.rightChild);
      }
    }
  }

  findMin(currentNode) {
    if (currentNode !== null) {
      if (currentNode.leftChild === null) {
        return currentNode.value;
      } else {
        return this.findMin(currentNode.leftChild);
      }
    }
    return -1;
  }

  findNode(currentNode, value) {
    if (currentNode !== null) {
      if (currentNode.value === value) {
        return currentNode;
      } else if (currentNode.value > value) {
        return this.findNode(currentNode.leftChild, value);
      } else {
        return this.findNode(currentNode.rightChild, value);
      }
    } else {
      return null;
    }
  }

  appendNode(parentNode, childNode) {
    if (parentNode.value < childNode.value) {
      if (parentNode.rightChild == null) {
        parentNode.rightChild = childNode;
      } else {
        this.appendNode(parentNode.rightChild, childNode);
      }
    } else {
      if (parentNode.leftChild == null) {
        parentNode.leftChild = childNode;
      } else {
        this.appendNode(parentNode.leftChild, childNode);
      }
    }
  }

  preOrderPrint(currentNode) {
    if (currentNode !== null) {
      console.log(currentNode.value);
      this.preOrderPrint(currentNode.leftChild);
      this.preOrderPrint(currentNode.rightChild);
    }
  }

  inOrderPrint(currentNode) {
    if (currentNode !== null) {
      this.preOrderPrint(currentNode.leftChild);
      console.log(currentNode.value);
      this.preOrderPrint(currentNode.rightChild);
    }
  }

  postOrderPrint(currentNode) {
    if (currentNode !== null) {
      this.preOrderPrint(currentNode.leftChild);
      this.preOrderPrint(currentNode.rightChild);
      console.log(currentNode.value);
    }
  }

  flush() {
    if (this.root) this.root.flush(true);
  }
}

let bts = new BinarySearchTree("100");
bts.insert(50);
bts.insert(110);
bts.insert(115);
bts.insert(75);
bts.insert(45);
bts.insert(122);
bts.insert(132);
bts.insert(102);

console.log(bts);
// bts.search(110);
// bts.inOrderPrint(bts.root);
// console.log(bts.search(50));
// console.log(bts.min());
// console.log(bts.max());

function insertBTS(value) {
  bts.insert(value);
}

function searchBTS(value) {
  return bts.search(value);
}

function minBTSValue() {
  return bts.min();
}

function maxBTSValue() {
  return bts.max();
}
