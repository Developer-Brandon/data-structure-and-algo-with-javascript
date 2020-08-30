class Stack {
	constructor() {
		this._list = []
	}
	
	push (queueElement) {
		this._list.push(queueElement)
	}
	
	pop () {
		this._list.pop()
	}
}

module.exports = Stack
