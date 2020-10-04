let graph = {
 'A': ['B', 'C'],
 'B': ['A', 'D'],
 'C': ['A', 'G', 'H', 'I'],
 'D': ['B', 'E', 'F'],
 'E': ['D'],
 'F': ['D'],
 'G': ['C'],
 'H': ['C'],
 'I': ['C', 'J'],
 'J': ['I'],
}

function bfs(graph, startNode) {
 let visitedNodeList = []
 let nodeList = []

 nodeList.push(startNode)
 console.log(nodeList)

 while(nodeList.length) {
  let node = nodeList.shift()
  if (!visitedNodeList.includes(node)) {
   visitedNodeList.push(node)
   if (nodeList.length > 0) {
    nodeList.push(...graph[node])
   } else {
    nodeList = graph[node]
   }
  }
 }
 return visitedNodeList
}

console.log('\nGraph Data: ', graph)
console.log('\nBfs: ', bfs(graph, 'A'))
