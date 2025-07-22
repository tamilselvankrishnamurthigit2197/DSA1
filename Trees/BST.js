class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/* BST class */
class BST {
    constructor() {
        this.root = null
    }

    insert(value){
        const newNode = new Node(value);

        /* if root node isn't there, add a newnode and turn it as root node */
        if(this.root === null){
            this.root = newNode;
            return this;
        }

        let temp = this.root;

        /* if root node is present and temp points the root */
        while(true){
            /* root = 5, then newNode is also 5 */
            if(newNode.value === temp.value) return undefined;

            /* root = 5, newNode = 7(right) or 3(left) */
            /* root = 5, newNode = 3 */
            if(newNode.value < temp.value){
                /* if 5 has no leaf in left side */
                if(temp.left === null){
                    temp.left = newNode;
                    return this;
                }
                else{
                    temp = temp.left;
                }
            }
            else{
                /* if newNode > temp(root) */
                if(temp.right === null){
                    temp.right = newNode;
                }else{
                    temp = temp.right;
                }
            }
        }
    }

    includes(value){
        /* finds the the node element is present or not */
        if(!this.root) return false;

        /* parent node */
        let temp = this.root;

        while(temp){
            /* required value < root node value => it goes left */
            if (value < temp.value) {
                temp = temp.left;
            }else if(value > temp.value){
                temp = temp.right;
            }else if(value === temp.value){
                return true;
            }
        }
        return false;
    }

    /* Breadth first search */
    bfs(){
        let current = this.root;
        let queue = [];
        let data = [];

        /* adding root node or the 1st node to the queue */
        queue.push(current);

        while(queue.length){
            /* removes the 1st element from queue */
            current = queue.shift();
            /* push the removed node to the data */
            data.push(current.value);

            if(current.left) queue.push(current.left);

            if(current.right) queue.push(current.right);
        }
        return data;
    }

    /* DFS - Pre Order : directional */
    dfsPreOrder(node = this.root, data = []){
        /* if nodes aren't avail, return the empy data*/
        if(node === null) return data;

        console.log("-----", data);

        /* if head is present, sent it to data = [ 5 ] */
        data.push(node.value);

        /* recursion method which calls the function itself to store left and right wise nodes : directional */

        if(node.left) this.dfsPreOrder(node.left, data);

        if(node.right) this.dfsPreOrder(node.right, data);

        return data;
    }

    dfsPostOrder(node = this.root, data = []){

        if(node === null) return data;
        console.log("------", data);
        

        if(node.left) this.dfsPostOrder(node.left, data);
        if(node.right) this.dfsPostOrder(node.right, data);
        data.push(node.value);

        return data;
    }

    dfsInOrder(node = this.root, data = []){
        if(node === null) return data;
        console.log("------", data);

        /* left leaf - root - right leaf */
        if(node.left) this.dfsInOrder(node.left, data);
        data.push(node.value);
        if(node.right) this.dfsInOrder(node.right, data);

        
        return data;
    }

}

const tree = new BST();
console.log(tree);
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);
/* console.log(tree.includes(1));
console.log(tree.bfs()); */
/* console.log(tree.dfsPreOrder()); */
/* console.log(tree.dfsPostOrder()); */
console.log(tree.dfsInOrder());

/* : dfsPreOrder ----- []
----- [ 5 ]
----- [ 5, 3 ]
----- [ 5, 3, 1 ]
----- [ 5, 3, 1, 8 ]
----- [ 5, 3, 1, 8, 7 ]
[ 5, 3, 1, 8, 7, 9 ] */


/* PostOrder DFS
------ []
------ []
------ []
------ [ 1, 3 ]
------ [ 1, 3 ]
------ [ 1, 3, 7 ]
[ 1, 3, 7, 9, 8, 5 ] */

/* DFS InOrder , left - root - right
------ []
------ []
------ []
------ [ 1, 3, 5 ]
------ [ 1, 3, 5 ]
------ [ 1, 3, 5, 7, 8 ]
[ 1, 3, 5, 7, 8, 9 ]
  */