function quickSort(list) {
 if (list.length <= 1) {
  return list
 } else {
  let standardValue = list[0]
  let leftSideList = []
  let rightSideList = []
  for (let i = 1; i < list.length; i++) {
   if (standardValue > list[i]) {
    leftSideList.push(list[i])
   } else {
    rightSideList.push(list[i])
   }
  }
  return quickSort(leftSideList).concat(standardValue, quickSort(rightSideList))
 }
}

let randomList = []

for (let i = 0; i < 5; i++) {
 let myRandom = Math.floor(Math.random() * (100 + 1));
 randomList.push(myRandom);
}

console.log('\n')
console.log('Random list: ', randomList)
console.log('\n')
console.log('After quick sort: ', quickSort(randomList))
