class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value)
        this.first = newNode;
        this.length = 1;
    }

    Push(value){
        const newNode = new Node(value);

        /* this.first.next = newNode; */
        newNode.next = this.first;
        this.first = newNode;
        this.length++;

        return this;
    }

    Pop(){

        if (this.length === 0) {
            return undefined;
        }

        let temp = this.first;

        this.first = this.first.next;
        temp.next = null;

        this.length--;

        return temp;
    }

    /* find the minimum element */
    min(){
        if (this.length === 0) {
            return undefined;
        }

        /* newNode - value */
        let current = this.first;
        let minValue = current.value; //holds the minimum value

        while (current) {
            
            /* current.value < first.value */
            if(current.value < minValue){
                minValue = current.value;
            }
            current = current.next;

        }
        return minValue;
    }
}

let myStack = new Stack(0);

myStack.Push(1);
/* myStack.Push(2);
myStack.Push(3); */

console.log(myStack);

/* console.log(myStack.min()); */
 