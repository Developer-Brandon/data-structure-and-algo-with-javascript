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
  let node = nodeList.pop()
  if (!visitedNodeList.includes(node)) {
   visitedNodeList.push(node)
   console.log('visitedNodeList: ', visitedNodeList)
   if (nodeList.length > 0) {
    nodeList.push(...graph[node])
   } else {
    nodeList = graph[node]
   }
   console.log('nodeList: ', nodeList)
  }
 }
 return visitedNodeList
}

console.log('\nGraph Data: ', graph)
console.log('\nBfs: ', bfs(graph, 'A'))
