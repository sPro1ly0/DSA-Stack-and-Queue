class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(value) {
        const node = new _Node(value);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        
        this.last = node;
    }

    dequeue() {
        if (this.first === null) {
            return;
        }

        const node = this.first;
        this.first = this.first.next;

        if (this.last === node) {
            this.last = null;
        }

        return node.value;
    }
}

module.exports = Queue;

let starTrekQ = new Queue;

starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');
// console.log(starTrekQ.first);
// console.log(starTrekQ.last);

// peek at 1st item in queue
function peek(queue) {
    let firstItem = queue.first.value;
    console.log(firstItem);
    return firstItem;
}

// peek(starTrekQ); // Kirk

function isEmpty(queue) {
    let checkQ = queue.last;

    if (checkQ === null) {
        return true;
    } else {
        return false;
    }
}

// console.log(isEmpty(starTrekQ)); // false

function display(queue) {
    let items = queue.first;
    let display = '';
    if (items === null) {
        return 'No items in queue';
    }

    while (items.next !== null) {
        display += `${items.value} -> `;
        items = items.next;
    }

    if (items.next === null) {
        display += `${items.value} is last item`;
    }

    return display;
}

// console.log(display(starTrekQ)); // Kirk -> Spock -> Uhura -> Sulu -> Checkov is last item

starTrekQ.dequeue();
starTrekQ.dequeue(); // remove spock
// console.log(display(starTrekQ)); // Uhura -> Sulu -> Checkov is last item