let hashTable = []

function makeHashTable() {
	for (let i = 0; i < 10; i++) {
		hashTable.push(i)
	}
}

function printHashTable() {
	console.log('\n\n')
	console.log('1. 해쉬테이블 틀 만들기\n', hashTable)
}

makeHashTable()
printHashTable()

console.log("\n\n")
console.log("####################")
console.log("\n\n")

console.log('2. 해쉬함수 정의하기 & 키값을 아스키 코드로 hash code 만들기')

function hashKeyFunction(key) {
	return key % 5
}

let key1, key2, key3

function makeDummyDataForKey() {
	key1 = 'brandon', key2 = 'harry', key3 = 'mac'
}

function printAsciiCodeOfKeyDatas() {
	console.log('brandon ascii code', key1.charCodeAt(0))
	console.log('harry ascii code', key2.charCodeAt(0))
	console.log('mac ascii code', key3.charCodeAt(0))
	console.log('\n')
}

function printHashCodeOfKeyDatas() {
	console.log('brandon hash code', hashKeyFunction(key1.charCodeAt(0)))
	console.log('harry hash code', hashKeyFunction(key2.charCodeAt(0)))
	console.log('mac hash code', hashKeyFunction(key3.charCodeAt(0)))
	console.log('\n')
}

makeDummyDataForKey()
printAsciiCodeOfKeyDatas()
printHashCodeOfKeyDatas()

console.log('\n\n')
console.log('####################')
console.log('\n\n')

console.log('3. 해쉬테이블에 저장하고싶은 데이터를 키와 같이 저장하기')

function saveValue(key, value) {
	let hashCode = hashKeyFunction(key.charCodeAt(0))
	hashTable[hashCode] = value
}

function selectValueByKey(key) {
	let hashCode = hashKeyFunction(key.charCodeAt(0))
	return hashTable[hashCode]
}

saveValue(key2, 'who am i ?')

console.log(selectValueByKey(key2))

console.log('\n\n')
console.log('####################')
console.log('\n\n')
