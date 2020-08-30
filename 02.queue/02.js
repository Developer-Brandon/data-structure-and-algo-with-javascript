/*
	1. 언어적 차원에서 지원하는 큐(Queue)로 구현
*/

// Javascript는 언어적 차원에서 지원하는 queue가 없는 듯 합니다 .
// 제가 잘 모르는것일 수도 있으니 혹 아시는 분은 댓글 부탁드립니다.

/*
  2. 언어적 차원에서 지원하는 우선순위 큐(Priority Queue) 구현
    - 튜플을 사용해보겠습니다
*/

// Javascript는 언어적 차원에서 지원하는 queue가 없는 듯 합니다 .
// 제가 잘 모르는것일 수도 있으니 혹 아시는 분은 댓글 부탁드립니다.

// 여기서부터는 es6에서 제공하는 class를 기준으로 구현하겠읍니다.
/*
  3. 리스트를 변수로 사용하여 큐(Queue) 구현
*/

const Queue = require('./library/Queue.js')
const Cat = require('./vo/Cat.js')

console.log('\n\n')
const queue = new Queue()
queue.enqueue(new Cat(1, "somi"))
queue.enqueue(new Cat(2, "sumi"))
queue.enqueue(new Cat(3, "semi"))
console.log(queue)
queue.dequeue()
console.log(queue)
console.log('\n\n')

/*
  4. 리스트를 변수로 사용하여 우선순위 큐(Queue) 구현
    - Javascript도 python 처럼, 숫자가 낮은 즉 정수의 숫자가 낮은 것뽑아서 우선순위 정렬 하도록 하겠습니다.
*/

const priorityQueue = require('./library/PriorityQueue.js')
const pqueue = new priorityQueue()
pqueue.enqueue(new Cat(1, "somi"))
pqueue.enqueue(new Cat(2, "sumi"))
pqueue.enqueue(new Cat(3, "semi"))
console.log(pqueue)
pqueue.dequeue()
console.log(pqueue)
console.log('\n\n')

