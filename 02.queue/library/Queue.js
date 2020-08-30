class Queue {
	constructor() {
		this._list = []
	}
	
	enqueue (queueElement) {
		this._list.push(queueElement)
	}
	
	dequeue () {
		this._list.shift()
	}
}

module.exports = Queue
