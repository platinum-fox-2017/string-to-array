function convertString(str) {
    let result = []
    let splitStr = str.split(',')
    for (let i = 0; i < splitStr.length; i++) {
        let arr = []
        for (let j = 0; j < splitStr[i].length; j++) {
            arr.push(splitStr[i][j])
        }
        result.push(arr)
    }
    return result
}

console.log(convertString('aqrst,ukaei,ffooo'))
console.log(convertString('qwer,tyui,asdf,ghjk'))