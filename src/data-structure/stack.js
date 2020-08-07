class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }

  isEmpty() {
    return !this.items || this.items.length == 0;
  }

  size() {
    return this.items.length || 0;
  }

  getTop() {
    return !this.items || this.items.length == 0 ? null : this.top;
  }

  push(item) {
    if (item) {
      this.items.push(item);
      this.top = item;
    }
  }

  pop() {
    if (this.items.length != 0) {
      if (this.items.length > 1) {
        this.top = this.items[this.items.length - 2];
        return this.items.pop();
      } else {
        this.top = null;
        return this.items.pop();
      }
    } else {
      return null;
    }
  }

  flush() {
    this.items = null;
    this.top = null;
  }
}

class Parser {
  constructor() {
    this.stack = new Stack();
  }

  validateFormation(expression) {
    for (let ex in expression) {
      let scope = expression[ex];
      if (scope == "]" || scope == "}" || scope == ")") {
        if (!this.stack.isEmpty()) {
          let top = this.stack.top;
          console.log("Closing : ", expression[ex]);
          if (
            (top == "[" && scope == "]") ||
            (top == "{" && scope == "}") ||
            (top == "(" && scope == ")")
          ) {
            this.stack.pop();
          } else {
            return `${scope} is not closed properly`;
          }
        } else {
          return `${scope} is not closed properly`;
        }
      } else {
        this.stack.push(scope);
        console.log("Opening : ", expression[ex]);
      }
    }
    return "Parentheses validated successfully";
  }

  flush() {
    this.stack.flush();
    this.stack = null;
  }
}

function parseParentheses(expression) {
  let parser = new Parser();
  // console.log("Final Value : ", parser.validateFormation("[{([])}]"));
  console.log("Final Value : ", parser.validateFormation(expression));
  parser.flush();
  parser = null;
}
