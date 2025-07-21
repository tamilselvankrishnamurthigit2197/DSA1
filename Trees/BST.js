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

}

const tree = new BST();
console.log(tree);
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);
console.log(tree.includes(1));
