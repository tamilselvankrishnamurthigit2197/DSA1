/* node and a queue class includes a node with enqueue and dequeue */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        
        /* new node, first, last, length */
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    /* enqueue - it adds from last */

    enqueue (value){
        const newNode = new Node(value);

        /* if no node exists */
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        }

        this.last.next = newNode;
        this.last = newNode;
        this.length++;

        return this;
    }

    /* this will delete from last which added from last */
    dequeue(){
        if(this.length === 0) return undefined;

        let temp = this.first;

        this.first = this.first.next;
        temp.next = null;
        this.length--;
        return temp;
    }
}

let myqueue = new Queue(0);
/* myqueue.enqueue(1);
myqueue.enqueue(2);
 */
myqueue.enqueue(3);

myqueue.dequeue();
console.log(myqueue);
