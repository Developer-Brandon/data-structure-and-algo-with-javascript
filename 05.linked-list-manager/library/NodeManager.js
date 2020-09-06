const Node = require('../vo/Node.js')

class NodeManager {
	constructor(data) {
		this._head = new Node(data)
	}
	
	add(data) {
		let node = this._head
		while (node.next) {
			node = node.next
		}
		node.next = new Node(data)
	}
	
	addAllDummyNodes() {
		for (let i = 1; i <= 10; i++) {
			this.add(i)
		}
	}
	
	delete(data) {
		let node = this._head
		while (node.next) {
			if (node.next.data === data) {
				node.next = node.next.next
				break
			} else {
				node = node.next
			}
		}
	}
	
	printAllNode() {
		let node = this._head
		while (node.next) {
			console.log(node.data)
			node = node.next
		}
		console.log("\n")
	}
}

module.exports = NodeManager
