let randomList = []

for (let i = 0; i < 50; i++) {
 let myRandom = Math.floor(Math.random() * (100 + 1));
 randomList.push(myRandom);
}

function sequentialSearch(list, data) {
 for (let i = 0; i <= list.length; i++) {
  if (list[i] === data) {
   return true
  }
 }
 return false
}

console.log('\n')
console.log('Random list: ', randomList)
console.log('\n')
let testNumber = 3
console.log('Test number: ', testNumber)
console.log('After sequential search: ', sequentialSearch(randomList, 3))
