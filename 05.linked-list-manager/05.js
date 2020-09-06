const NodeManager = require('./library/NodeManager.js')

let linkedListManager = new NodeManager(0)
linkedListManager.addAllDummyNodes()
///// 출력
console.log('\n\n')
console.log('링크드 리스트 매니저와 함께 삭제 기능 구현하기')
linkedListManager.printAllNode()
linkedListManager.delete(3)
console.log('\n\n')
console.log('링크드 리스트 매니저와 함께 삭제 기능 구현하기')
linkedListManager.printAllNode()
