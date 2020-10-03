function mergeSort(list) {
 if (list.length <= 1) {
  return list
 } else {
  let middleIndex = Number(list.length / 2)
  let leftSplitedList = list.slice(0,middleIndex)
  let rightSplitedList = list.slice(middleIndex)
  return merge(leftSplitedList, rightSplitedList)
 }
}

function merge(leftList, rightList) {
 let mergedList = []
 let [leftPointer, rightPointer] = [0, 0]
 while (leftList.length > leftPointer && rightList.length > rightPointer) {
  if (leftList[leftPointer] > rightList[rightPointer]) {
   mergedList.push(rightList[rightPointer])
   rightPointer += 1
  } else {
   mergedList.push(leftList[leftPointer])
   leftPointer += 1
  }
 }

 while(leftList.length > leftPointer) {
  mergedList.push(leftList[leftPointer])
  leftPointer += 1
 }

 while(rightList.length > rightPointer) {
  mergedList.push(rightList[rightPointer])
  rightPointer += 1
 }

 return mergedList
}

let randomList = []

for (let i = 0; i < 10; i++) {
 let myRandom = Math.floor(Math.random() * (100 + 1));
 randomList.push(myRandom);
}

console.log('\n')
console.log('Random list: ', randomList)
console.log('\n')
console.log('After merge sort: ', mergeSort(randomList))
