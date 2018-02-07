function convertArray(str) {
    strSplit = str.split(',')
    let arr = [];
 
    for (let j = 0; j < strSplit.length; j++) {   
       let temp = [];
       for (let value of strSplit[j]) {
           temp.push(value)
       }
       arr.push(temp)
    }

    return arr

}

console.log(convertArray('aqrst,ukaei,ffooo'));