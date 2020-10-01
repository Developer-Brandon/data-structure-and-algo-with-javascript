const cats = ['somi', 'sumi', 'semi']
const catsAge = [1, 2, 3]
for (let i = 0; i < cats.length; i++) {
 for (let j = 0; j < catsAge.length; j++) {
  console.log(`${cats[i]}가 ${catsAge[j]}살 먹었다.`)
 }
}

const testArray = [0,1,2,3,4,5,6,7,8,9,10]

function binarySearch(array, value) {
 let lower = 0
 let upper = array.length - 1

 while(lower <= upper) {
  console.log('저 지금 while문 실행되고 있어요')
  const middle = lower + Math.floor((upper - lower) / 2)

  if (value === array[middle]) {
   return middle
  }

  // 만약 대입한 값이 중간값보다 작다면
  if (value < array[middle]){
   // 최대값을 중간값의 바로 왼쪽값으로 맞추어줍니다.
   // 배열을 반으로 나눈 오른쪽 값들을 볼 필요가 없기 때문이죠.
   upper = middle - 1
  } else {
   // 최소값을 중간값의 바로 오른쪽값으로 맞추어줍니다.
   // 배열을 반으로 나눈 왼쪽 값들을 볼 필요가 없기 때문입니다.
   lower = middle + 1
  }
 }
 return -1
}


binarySearch(testArray, 7)
console.log('몇번의 실행만에 값을 찾은걸까요?')

