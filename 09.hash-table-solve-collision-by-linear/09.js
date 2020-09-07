let hashTable = []

function makeHashTable(count) {
	for (let i = 0; i < count; i++) {
		hashTable.push(0)
	}
}

makeHashTable(9)

function getHashKey(key) {
	return key.charCodeAt(0)
}

function hashFunc(key) {
	return key % 8
}

function saveValue(key, value) {
	let indexOfKey = getHashKey(key)
	let hashCode = hashFunc(indexOfKey)
	if (hashTable[hashCode] !== 0) {
		for (let i = 0; hashCode < parseInt(hashTable[hashCode]); i++) {
			if (hashTable[hashCode][i] === 0) {
				hashTable[hashCode][i] = [indexOfKey, value]
				return
			} else if (hashTable[i][0] === indexOfKey) {
				hashTable[i][1] = value
				return
			}
		}
	} else {
		hashTable[hashCode] = [indexOfKey, value]
	}
}

function selectValueByKey(key) {
	let indexOfKey = getHashKey(key)
	let hashCode = hashFunc(indexOfKey)
	if (hashTable[hashCode] !== 0) {
		for (let i = 0; i < parseInt(hashTable[hashCode]); i++) {
			if (hashTable[hashCode][i] === 0) {
				return null
			} else if (hashTable[i][0]) {
				return hashTable[i][1]
			}
		}
	} else {
		return null
	}
}

saveValue('AMD', '저는 AMD 입니다.')
saveValue('AMD', '저는 두번쨰 AMD 입니다.')
saveValue('BMD', '저는 BMD 입니다.')
console.log(selectValueByKey('AMD'))
