let hashTable = []

function makeHashTable(count) {
	for (let i = 0; i < count; i++) {
		hashTable.push(0)
	}
}

makeHashTable(9)

console.log('해쉬테이블 틀 만들기', hashTable)

function getHashKey(key) {
	return key.charCodeAt(0)
}

function hashFunc(key) {
	return key % 8
}

function selectHashCodeByKey(key) {
	return hashFunc(getHashKey(key))
}

function saveValue(key,value) {
	let indexOfKey = getHashKey(key)
	let hashCode = hashFunc(indexOfKey)
	if (hashTable[hashCode] !== 0) {
		for (let i=0; i < parseInt(hashTable[hashCode].length); i++) {
			if (hashTable[hashCode][i][0] === indexOfKey) {
				hashTable[hashCode][i][1] = value
				return
			}
		}
		hashTable[hashCode].append([indexOfKey, value])
	} else {
		hashTable[hashCode] = [[indexOfKey, value]]
	}
}

function selectValueByKey(key) {
	let indexOfKey = getHashKey(key)
	let hashCode = hashFunc(indexOfKey)
	if (hashTable[hashCode] !== 0) {
		for (let i = 0; i < parseInt(hashTable[hashCode].length); i++) {
			if (hashTable[hashCode][i][0] === indexOfKey) {
				return hashTable[hashCode][i][1]
			}
		}
		return null
	} else {
		return null
	}
}

saveValue("AMD", "저는 AMD입니다. 저는 제대로 호출되었을까요?")
console.log("저장된 key값의 hash code", selectHashCodeByKey("Db"))
saveValue("BMD", "저는 BMD입니다. 저는 제대로 호출되었을까요?")
console.log("저장된 key값의 hash code", selectHashCodeByKey("Dd"))

console.log(selectValueByKey("AMD"))
