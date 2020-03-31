// 9. Square Dancing

const Queue = require('./queue');

class SquareDancing {
    constructor() {
        this.male = new Queue;
        this.female = new Queue;
    }

    pairDancer(gender, name) {
        if (gender === 'M') {
            this.male.enqueue(name);
        }

        if (gender === 'F') {
            this.female.enqueue(name);
        }

        if (this.male.first && this.female.first) {
            const femaleDancer = this.female.dequeue();
            const maleDancer = this.male.dequeue();
            console.log(`Female dancer is ${femaleDancer}, and the male dancer is ${maleDancer}`);
        }

        if (this.male.first) {
            let count = 0;
            let currentNode = this.male.first;

            while (currentNode.next !== null) {
                count++;
                currentNode = currentNode.next;
            }

            if (currentNode.next === null) {
                count++;
            }

            console.log(`There are ${count} male dancers waiting to dance.`);
        }

        if (this.female.first) {
            let count = 0;
            let currentNode = this.female.first;

            while (currentNode.next !== null) {
                count++;
                currentNode = currentNode.next;
            }

            if (currentNode.next === null) {
                count++;
            }

            console.log(`There are ${count} female dancers waiting to dance.`);
        }
    }
}

const SquareDance = new SquareDancing;

// SquareDance.pairDancer('F', 'Jane'); // There are 1 female dancers waiting to dance.
// SquareDance.pairDancer('M', 'Frank'); // Female dancer is Jane, and the male dancer is Frank
// SquareDance.pairDancer('M', 'John'); // There are 1 male dancers waiting to dance.
// SquareDance.pairDancer('M', 'Sherlock'); // There are 2 male dancers waiting to dance.
// SquareDance.pairDancer('F', 'Madonna'); // Female dancer is Madonna, and the male dancer is John, There are 1 male dancers waiting to dance.
// SquareDance.pairDancer('M', 'David'); // There are 2 male dancers waiting to dance.
// SquareDance.pairDancer('M', 'Christopher'); // There are 3 male dancers waiting to dance.
// SquareDance.pairDancer('F', 'Beyonce'); // Female dancer is Beyonce, and the male dancer is Sherlock, There are 2 male dancers waiting to dance.