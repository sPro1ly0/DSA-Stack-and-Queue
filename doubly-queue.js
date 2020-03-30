class _Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev;
        this.next = null;
    }
}

class DoublyQueue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(value) {
        const node = new _Node(value, this.last);

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

        if (node.next === null) {
            this.last = null;
        } else {
            node.next.prev = null;
        }
        
        this.first = node.next;

        return node.value;
    }
}

let starTrekQ = new DoublyQueue;

starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');
console.log(starTrekQ.first);

console.log(starTrekQ.dequeue()); // Kirk
console.log(starTrekQ.first);