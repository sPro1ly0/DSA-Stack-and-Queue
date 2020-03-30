class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        // the first item or bottom will have a next value of null
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        if (this.top === null) {
            return 'No items in stack';
        }
        
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

let starTrek = new Stack;

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');
// console.log(starTrek);

// look at the top of the stack without removing it
function peek(stack) {
    let top = stack.top.data;
    console.log(top);
    return top;
}

// peek(starTrek); // Scotty

function isEmpty(stack) {
    let top = stack.top;

    if (top === null) {
        return true;
    } else {
        return false;
    }
}

// console.log(isEmpty(starTrek)); // false

function display(stack) {
    let top = stack.top;
    let display = '';
    if (top === null) {
        return 'No items in stack';
    }

    while (top.next !== null) {
        display += `${top.data}, `;
        top = top.next;
    }

    if (top.next === null) {
        display += `${top.data} is 1st item`;
    }

    return display;
}

// console.log(display(starTrek)); // Scotty, McCoy, Spock, Kirk is 1st item

// 3. Check for palindromes

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let stack = new Stack;
    let reverse = '';

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
    }

    let top = stack.top;
    while (top.next !== null) {
        reverse += top.data;
        top = top.next;
        if (top.next === null) {
            reverse += top.data;
        }
    }

    if (reverse === s) {
        return true;
    } else {
        return false;
    }
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));