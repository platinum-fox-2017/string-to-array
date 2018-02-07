function convertString(str) {
    let result = []
    let splitStr = str.split(',')
    for (let i = 0; i < splitStr.length; i++) {
        result.push(splitStr[i].split(''))
    }
    return result
}

console.log(convertString('aqrst,ukaei,ffooo'))
console.log(convertString('qwer,tyui,asdf,ghjk'))