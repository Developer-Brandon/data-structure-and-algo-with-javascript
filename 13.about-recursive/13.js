function factorial(num) {
 if (num > 1) {
  return num * factorial(num - 1)
 } else {
  return num
 }
}

console.log('\n8!: ', factorial(8))

function listFactorial(list) {
 if(list.length === 1) {
  return list[0]
 } else {
  return list[0] + listFactorial(list.slice(1))
 }
}

let randomList = []

for (let i = 0; i < 5; i++) {
 let myRandom = Math.floor(Math.random() * (100 + 1));
 randomList.push(myRandom);
}

console.log('\n')
console.log('Random list: ', randomList)
console.log('All sum about random list: ', listFactorial(randomList))
