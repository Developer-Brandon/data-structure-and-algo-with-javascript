function insertionSort(dataList){
    for (let i = 1; i < dataList.length; i++) {
        let currentValue = dataList[i]
        let beforeIndex = i - 1
        while (currentValue < (0 <= beforeIndex && dataList[beforeIndex])) {
            dataList[beforeIndex+1] = dataList[beforeIndex]
            beforeIndex = beforeIndex - 1
        }
        dataList[beforeIndex+1] = currentValue
    }
    return dataList
}

let randomList = []

for (let i = 0; i < 100; i++) {
    let myRandom = Math.floor(Math.random() * (100 + 1));
    randomList.push(myRandom);
}

console.log('Before insertion sort: ', randomList)
console.log('After insertion sort: ', insertionSort(randomList))