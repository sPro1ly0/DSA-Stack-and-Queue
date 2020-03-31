// 10. The Ophidian Bank

const Queue = require('./queue');

function ophidianBank(queue) {

    while (queue.first) {                
        let random = Math.random();

        if (random > .25) {
            let name = queue.dequeue();
            console.log(`${name} got their paperwork approved.`)
        } else {
            console.log(`${queue.first.value}'s paperwork is not right yet, and moved back to the end of the queue.`);
            queue.enqueue(queue.dequeue());
        }
    }

    console.log(`Everyone was served.`);
}

const BankLine = new Queue;

BankLine.enqueue('Sara');
BankLine.enqueue('Kara');
BankLine.enqueue('Luke');
BankLine.enqueue('Mark');
BankLine.enqueue('Wanda');
BankLine.enqueue('Derek');
BankLine.enqueue('Annika');
BankLine.enqueue('Shelly');

ophidianBank(BankLine);