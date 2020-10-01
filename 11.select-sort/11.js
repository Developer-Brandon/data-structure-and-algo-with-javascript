function selectionSort(dataList) {
 for (let i = 0; i < dataList.length; i++) {
  let lowestIndex = i
  let temp
  for (let j = i + 1; j < dataList.length; j++) {
   if (dataList[lowestIndex] > dataList[j]) {
    temp = dataList[lowestIndex]
    dataList[lowestIndex] = dataList[j]
    dataList[j] = temp
   }
  }
 }
 return dataList
}

let randomList = []

for (let i = 0; i < 100; i++) {
 let myRandom = Math.floor(Math.random() * (100 + 1));
 randomList.push(myRandom);
}

console.log('\n정렬 전: ', randomList)
console.log('\n정렬 후: ', selectionSort(randomList))


