const graph = {
	  start: {A: 5, B: 2},
	  A: {C: 4, D: 2},
	  B: {A: 8, D: 7},
	  C: {D: 6, finish: 3},
	  D: {finish: 1},
	  finish: {}
};

const lowestCostNode = (costs, processed) => {
	  return Object.keys(costs).reduce((lowest, node) => {
		      if (lowest === null || costs[node] < costs[lowest]) {
			            if (!processed.includes(node)) {
					            lowest = node;
					          }
			          }

		      return lowest;
		    }, null);
}

const dijkstra = (graph) => {
	  const costs = Object.assign({
		      finish: Infinity
		    }, graph.start);
	  const parents = {
		      finish: null
		    };
	  const processed = [];

	  for (let child in graph.start) {
		      parents[child] = 'start';
		    }

	  let node = lowestCostNode(costs, processed);
	  while (node) {
		      let cost = costs[node];
		      let children = graph[node];

		      for (let i in children) {
			            let newCost = cost + children[i];
			            if (!costs[i] || costs[i] > newCost) {
					            costs[i] = newCost;
					            parents[i] = node;        
					          }      
			          }

		      processed.push(node);
		      node = lowestCostNode(costs, processed);
		    }

	  return costs.finish;
}

console.log(dijkstra(graph));

