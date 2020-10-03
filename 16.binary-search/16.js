function isDataInList(list, searchData) {
 if (list.length === 1 && list[0] === searchData) {
  return true
 }
 if (list.length === 1 && list[0] !== searchData) {
  return false
 }
 if (list.length === 0) {
  return false
 }
}

function binarySearch(list, searchData) {
 isDataInList(list, searchData)
 //
 let mediumPointer = Number(list.length / 2)
 if (list[mediumPointer] === searchData) {
  return true
 } else {
  if (list[mediumPointer] > searchData) {
   binarySearch(list, list.slice(0, mediumPointer))
  } else {
   binarySearch(list, list.slice(mediumPointer))
  }
 }
}

let randomList = []

for (let i = 0; i < 50; i++) {
 let myRandom = Math.floor(Math.random() * (100 + 1));
 randomList.push(myRandom);
}

console.log('\n')
console.log('Random list: ', randomList)
console.log('\n')
console.log('After binary search: ', binarySearch(randomList, 3))
