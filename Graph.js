class Graph {
  constructor() {
    this.graph = {};
    this.weights = {};
    this.__traversed = new Set();
  }

  addEdge(u, v, w) {
    if (this.graph[u] && this.weights[u]) {
      this.graph[u].push(v);
      this.weights[u].push(w);
    } else {
      this.graph[u] = [v];
      this.weights[u] = [w];
    }
  }

  __findCyclesDFS(from, to) {
    if (this.__traversed.has(to)) {
      return true;
    }

    let hasCycles = false;
    this.__traversed.add(to);

    if (this.graph[to]) {
      for (let i = 0; i < this.graph[to].length; i++) {
        let vertex = this.graph[to][i];

        if (vertex != from) { // don't traverse backedge
          hasCycles = hasCycles || this.__findCyclesDFS(to, vertex);
        }
      }
    }

    return hasCycles;
  }

  findCycle() {
    return this.__findCyclesDFS(0, 0);
  }

  __traverseDFS(u, length) {
    let vertices = this.graph[u] || [];
    let longestSubPath = length;
    if (vertices.length) console.log(vertices);
    let curLength = length;
    this.__traversed.add(parseInt(u));

    for (let i = 0; i < vertices.length; i++) {
      let newLength = curLength + this.weights[u][i];
      let vertex = vertices[i];

      if (this.__traversed.has(vertex)) {
        continue;
      }

      console.log('traversed', this.__traversed, 'to', vertex, 'length', newLength);
      // let subPathLength = 
      // console.log(longestSubPath, subPathLength);
      
      longestSubPath = Math.max(longestSubPath, this.__traverseDFS(vertex, newLength));
    }

    return longestSubPath;
  }

  findLongestPath() {
    let vertices = Object.keys(this.graph);
    let longestPath = 0;

    for (let i = 0; i < vertices.length; i++) {
      longestPath = Math.max(longestPath, this.__traverseDFS(vertices[i], 0));
      this.__traversed = new Set();
    }

    return longestPath;
  }

  findShortestPath(u, v) {
    let queue = [];
    let left = 1;
    let dist = 0;
    queue.push(u);

    while (queue.length) {
      const cur = queue.shift();
      let next = this.graph[cur];
      left --;
      console.log(left);

      if (left == 0) {
        dist ++;
      }

      if (next) {
        left += next.length;
        next.forEach((vertex) => {
            if (vertex == v) {
              console.log('found!');
              return dist;
            }
            queue.push(vertex);
        });
      }
    }

    return dist;
  }
}

let g = new Graph();

g.addEdge(1, 2, 3)
// g.addEdge(2,1,3)
g.addEdge(2, 3, 4)
// g.addEdge(3,2,4) 
g.addEdge(2, 6, 2)
// g.addEdge(6,2,2) 
g.addEdge(6, 4, 6)
// g.addEdge(4,6,6)
g.addEdge(6, 5, 5)
// g.addEdge(5,6,5)
g.addEdge(5,7,2)
// g.addEdge(7,5,2)

g.addEdge(3,6,1);

console.log(g.graph);
console.log(g.weights);

// console.log(g.findCycle());
// console.log(g.findLongestPath());
console.log(g.findShortestPath(1,6));