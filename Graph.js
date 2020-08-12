class Graph {
    constructor(vertices) {
      this.V = vertices;
      this.graph = {};
      this.tc = new Array(this.V);
  
      for (let i=0; i<this.V; i++) {
        this.tc[i] = new Array(this.V).fill(0);      
      }
    }
  
    addEdge(u, v) {
      if (this.graph[u]) {
        this.graph[u].push(v);
      } else {
        this.graph[u] = [v];
      }
    }
  
    DFSUtil(s, v) {
      this.tc[s][v] = 1;
  
      for (var i=0; i<this.graph[v].length; i++) {
        let vertex = this.graph[v][i];
  
        if (this.tc[s][vertex] == 0) {
          this.DFSUtil(s, vertex);
        }
      }
    }
  
    transitiveClosure() {
      for (let i = 0; i<this.V; i++) {
        this.DFSUtil(i, i);
      }
  
      return this.tc;
    }
  }
  
  let g = new Graph(4);
  
  g.addEdge(0, 1) 
  g.addEdge(0, 2) 
  g.addEdge(1, 2) 
  g.addEdge(2, 0) 
  g.addEdge(2, 3) 
  g.addEdge(3, 3) 
  
  console.log(g.graph);
  
  console.log(g.transitiveClosure());