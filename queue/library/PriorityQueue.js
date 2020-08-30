class PriorityQueue {
	constructor() {
		this._list = []
	}
	
	isEmpty() {
		if (!this._list[0]) {
			return true
		} else {
			return false
		}
	}
	
	enqueue(queueElement) {
		this._list.push(queueElement)
	}
	
	dequeue() {
		let standardIndex = 0
		let resultIndex = 0
		if (!this.isEmpty()) {
			for (let i = 0; i < this._list.length; i++) {
				if (this._list[standardIndex]._index > this._list[i]._index) {
					resultIndex = this._list[i]._index
				}
			}
			this._list.splice(resultIndex,1)
		}
	}
}

module.exports = PriorityQueue
