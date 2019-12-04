const listSample = new List<number>();

listSample.addToBegin(23);
listSample.addToBegin(34);
listSample.addToEnd(555);
listSample.addToBegin(11111);
console.log(listSample.getLength());
console.log(listSample.makeArray());

const stackSample = new Stack<string>();

stackSample.add('a');
stackSample.add('b');
stackSample.add('c');
console.log(stackSample.getLength());
console.log(stackSample.makeArray());

const queueSample = new Queue<string>();

queueSample.add('a');
queueSample.add('b');
queueSample.add('c');
console.log(queueSample.getLength());
console.log(queueSample.makeArray());
