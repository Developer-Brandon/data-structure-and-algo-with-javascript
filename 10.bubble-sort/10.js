let swipe
function bubbleSort(dataList) {
 swipe = false
 for (let i = 0; i < dataList.length; i++) {
  for (let j = 0; j < dataList.length - i; j++) {
   if (dataList[j] > dataList[j+1]) {
    let temp = dataList[j]
    dataList[j] = dataList[j+1]
    dataList[j+1] = temp
    swipe = true
   }
  }
  if (swipe === false) {
   break
  }
 }
 return dataList
}

let randomList = []

for (let i = 0; i < 100; i++) {
 let myRandom = Math.floor(Math.random() * (100 + 1));
 randomList.push(myRandom);
}


console.log('\n버블정렬 전: ', randomList)
console.log('\n버블정렬 후: ', bubbleSort(randomList))
