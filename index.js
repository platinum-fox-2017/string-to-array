function stringToArray(str) {
  let arrStr = str.split(',')
  let arrResult = []

  for(var i=0; i<arrStr.length; i++) {
    arrResult.push(arrStr[i].split(''))
  }
  return arrResult
}

console.log(stringToArray("aqrst,ukaei,ffooo"));
console.log(stringToArray("qwer,tyui,asdf,ghjk"));
