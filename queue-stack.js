// 8. Queue implementation using a stack
const Stack = require('./stack');
const stack = new Stack;

class QueueStack {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(value) {
        // stack stores values in 'Last In First Out Order'
        // need to be able to remove first value not the last one for queue to work
        // the first value pushed will have a 'next: null'
        if (this.first === null) {
            stack.push(value);
            this.first = stack.top;
            this.last = stack.top;
        } else {
            let temporaryStack = new Stack;
            
            // going to need to reverse the values
            // pop 'Kirk' and push to 2nd stack, temporaryStack
            while (stack.top) {
                temporaryStack.push(stack.pop());
            }

            // push 'Spock' in 2nd stack
            temporaryStack.push(value);

            // then pop 'Spock' and push in 1st stack, pop 'Kirk' and push in 1st stack
            // 'Kirk' -> 'Spock' -> null
            while (temporaryStack.top) {
                stack.push(temporaryStack.pop());
            }
            // work on setting the last value in the queue
            let currentNode = stack.top;

            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }

            this.last = currentNode;
        }

        this.first = stack.top;
    }

    dequeue() {
        stack.pop();
        this.first = stack.top;
    }
}

let starTrekQ = new QueueStack;

starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');
console.log(starTrekQ.first);