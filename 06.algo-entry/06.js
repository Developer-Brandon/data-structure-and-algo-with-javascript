function sumAllWithFor(data){
	let sum = 0;
	for (let i = 1; i <= data; i ++){
		sum += i;
	}
	console.log('\n\n')
	console.log('for문을 이용한 1~10까지의 합', sum)
}

sumAllWithFor(10)

function sumAllWithOutFor(data) {
	let sum = 0
	sum = data * (data + 1) / 2
	console.log('\n\n')
	console.log('for문을 이용하지 않은 1~10까지의 합', sum)
}

sumAllWithOutFor(10)
