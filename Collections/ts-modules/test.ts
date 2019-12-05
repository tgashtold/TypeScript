import { List } from './List/List';
import { Stack } from './Stack/Stack';
import { Queue } from './Queue/Queue';

const stackSample = new Stack<string>();

console.log('********Stack testing');

stackSample.push('a');
stackSample.push('b');
stackSample.push('c');
stackSample.push('g');

console.log('Add elements');
console.log('Length: ' + stackSample.getLength());
console.log(stackSample.makeArray());

console.log('Delete element');
stackSample.pop();
console.log('Length: ' + stackSample.getLength());
console.log(stackSample.makeArray());

const queueSample = new Queue<string>();

console.log('********Queue testing');

queueSample.queue('a');
queueSample.queue('b');
queueSample.queue('c');
queueSample.queue('d');

console.log('Add elements');
console.log('Length: ' + queueSample.getLength());
console.log(queueSample.makeArray());

console.log('Delete element');
queueSample.dequeue();
console.log('Length: ' + queueSample.getLength());
console.log(queueSample.makeArray());

const listSample = new List<number>();

console.log('********List testing');

listSample.append(1);
listSample.append(3);
listSample.append(4);
listSample.append(2);

console.log('Add elements');
console.log('Length: ' + listSample.getLength());
console.log(listSample.makeArray());

console.log('Add element 555 to index 1 and 66 to index 0');
listSample.insert(1, 555);
listSample.insert(0, 66);
console.log('Length: ' + listSample.getLength());
console.log(listSample.makeArray());

console.log('Delete element with index 2');
listSample.pop(2);
console.log('Length: ' + listSample.getLength());
console.log(listSample.makeArray());

console.log('Get index of element equal to 3');
console.log(listSample.index(3));

console.log('Get index of element equal to 4, search from index 2 to 4');
console.log(listSample.index(4, 2, 4));

console.log('Sort the list');
listSample.sort();
console.log('Length: ' + listSample.getLength());
console.log(listSample.makeArray());
