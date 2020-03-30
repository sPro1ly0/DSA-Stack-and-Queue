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

module.exports = Stack;

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
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

// 4. Matching parentheses in an expression

function checkMatchingBrackets(mathExpression) {
    let stack = new Stack;
    let openIndexes = [];
    let closeIndexes = [];

    if (!mathExpression) return null;

    for (let i = 0; i < mathExpression.length; i++) {
        if (mathExpression[i] === '(') {
            stack.push(mathExpression[i]);
            openIndexes.push(i);
        }

        if (mathExpression[i] === ')') {
            if (isEmpty(stack)) {
                return `You are missing a '('. Close parenthesis at index ${i}.`;
            }
            stack.pop();
            closeIndexes.push(i);
        }
    }
    // if stack is empty = true, the parenthesis match
    if (isEmpty(stack)) {
        return 'Parenthesis match';
    } else {
        return `You are missing a ')'. Open parenthesis at indexes ${openIndexes}.`;
    }

}
// console.log(checkMatchingBrackets("(2 + (3) + ((3 + 2) + 3)")); // You are missing a ')'. Open parenthesis at indexes 0,5,11,12.
// console.log(checkMatchingBrackets("(2 + )3) + ((3 + 2) + 3)")); // You are missing a '('. Close parenthesis at index 7.

// 5. Sort stack

function sortStack(stack) {
    let top = stack.top;
    let newStack = new Stack;
    let minNum = top.data;
    let maxNum = top.data;

    if (top === null || top.next === null) return stack;

    while (top.next !== null) {
        if (top.data > maxNum) maxNum = top.data;
        if (top.data < minNum) minNum = top.data;

        top = top.next;
    }

    if (top.data > maxNum) maxNum = top.data;    
    if (top.data < minNum) minNum = top.data;

    newStack.push(maxNum);

    while (newStack.top.data !== minNum) {
        let top = stack.top;
        let nextMax = minNum;

        while (top.next !== null) {
            if (top.data > nextMax && top.data < newStack.top.data) {
                nextMax = top.data;
            }
            top = top.next;
        }

        if (top.data > nextMax && top.data < newStack.top.data) {
            nextMax = top.data;
        }

        newStack.push(nextMax);
    }

    return newStack;
};

let numberStack = new Stack;
numberStack.push(2);
numberStack.push(5);
numberStack.push(3); // 3 -> 5 -> 2 -> null ---> 2 -> 3 -> 5 -> null

// console.log(sortStack(numberStack));