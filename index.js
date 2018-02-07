function strToArr(str) {
  let strSplit = str.split(',')
  let newArr = []
  for (var i = 0; i < strSplit.length; i++) {
    let arrStr = strSplit[i].split('')
    newArr.push(arrStr)
  }
  return newArr
}


console.log(strToArr('aqrst,ukaei,ffooo'));
