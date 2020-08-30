/*
	1. 언어적 차원에서 지원하는 스택(Stack)로 구현
		Javascript는 언어적 차원에서 지원하는 stack가 없는 듯 합니다.
		제가 잘 모르는것일 수도 있으니 혹 아시는 분은 댓글 부탁드립니다.
*/


/*
  2. 리스트를 변수로 사용하여 스택(Stack)구현
*/


const Stack = require('./library/Stack.js')
const Cat = require('./vo/Cat.js')

console.log('\n\n')
const stack = new Stack()
stack.push(new Cat(1, "somi"))
stack.push(new Cat(2, "sumi"))
stack.push(new Cat(3, "semi"))
console.log(stack)
console.log('\n\n')
stack.pop()
console.log(stack)
