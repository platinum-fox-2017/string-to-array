const stringToArr = (input) => {
    let resultArr = []
    let tempArr = input.split(',')
    // [aqrst,ukaei,ffooo]
    for (let i = 0; i < tempArr.length; i++) {
        resultArr.push([])
        for (let j = 0; j < tempArr[i].length; j++) {
            resultArr[i].push(tempArr[i][j])
        }
    }
    return resultArr
}


let input = 'aqrst,ukaei,ffooo,hellow'
console.log(stringToArr(input))

// start 08:33:46
// finish 08:47:37