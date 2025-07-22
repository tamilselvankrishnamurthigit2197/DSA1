class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    /* addVertex : A: [] => { vtx:[], vtx: []} */
    addVertex(vtx){
        if(!this.adjacencyList[vtx]){

            this.adjacencyList[vtx] = [];

            return true
        }
        return false;
    }

    /* add connection: adding values to both vertex for neighbouring {a:['b'], b:['a]} */
    addEdge(vtx1, vtx2){
        if(this.adjacencyList[vtx1] && this.adjacencyList[vtx2]){

            this.adjacencyList[vtx1].push(vtx2);
            this.adjacencyList[vtx2].push(vtx1);

            return true
        }
        return false
    }

    removeEdge(vtx1, vtx2){
        /* vtx1 : a , vtx2: b  */
         /* a: ['b', 'c'], b: ['a', 'd'], c: ['a'], d:['b'] */

        if(this.adjacencyList[vtx1] && this.adjacencyList[vtx2]){
            /* removes vtx2 connection from vtx1 */
            this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(v => v != vtx2);
            /* removes vtx1 connection with vtx2 */
            this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(v => v != vtx1);
            return true

            /* a: ['c'], b: ['d'], c: ['a'], d: ["b"] */
        }
        return false
    }

    removeVertex(vtx){
        if(!this.adjacencyList[vtx]) return undefined

        /* loops over all the neighbours to remove the vtx's value which needs to remove */
        for(let neighbour of this.adjacencyList[vtx]){
            this.adjacencyList[neighbour] = this.adjacencyList[neighbour].filter(
                (v) => v != vtx
            )
        }

        /* after removing connections, delete the vertex itself */
        delete this.adjacencyList[vtx]
        return this

    }
}

const g = new Graph();

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("A", "D")
g.addEdge("B", "D")
g.addEdge("C", "D")

/* g.removeEdge("A", "B") */

/* remove : d:[] and 'd' value in neighbours of a, b, c and delete d:[] itself */
g.removeVertex("D");
console.log(g);
