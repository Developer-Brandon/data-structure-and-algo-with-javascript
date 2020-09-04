const Node = require('./vo/Node.js')

let head, node

function add(data) {
	node = head
	while (node.next) {
		node = node.next
	}
	node.next = new Node(data)
}

function initData() {
	node = new Node(1)
	head = node
	for (let i = 2; i <= 10; i++) {
		add(i)
	}
}

function printAll() {
	node = head
	while (node.next) {
		console.log(node.data)
		node = node.next
	}
}

///// 데이터 초기화
initData()

///// 출력
console.log('\n\n')
console.log('1.링크드 리스트 간단 구현하기')
printAll()

// 중간에 링크드 리스트 값 넣기
function insertMiddleNodeInList(data) {
	node = head
	let middleNode = new Node(data)
	// 이 부분은 제가 파이썬과 동일하게 하는것이 아쉬워서 조금 바꿔 보았습니다
	// 다음노드의 데이터가, 현재의 데이터보다 크다면
	// 다음노드를 가르키는곳에 현재의 데이터로 이루어진 노드 객체를넣고
	// 갈아끼워진 새로운 노드객체의 다음 주소값에 갈아끼워지기전 노드객체를 넣는것으로
	// 처리하였습니다
	while (node.next){
		if (node.next.data > data) {
			let existingNextNodeObject = node.next
			node.next = middleNode
			middleNode.next = existingNextNodeObject
			break;
		}
		node = node.next
	}
	
}

///// 출력

console.log('\n\n')
console.log('2.간단하게 구현된 링크드 리스트의 중간에 데이터 삽입하기')
insertMiddleNodeInList(4.5)
printAll()
