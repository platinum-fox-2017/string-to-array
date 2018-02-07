function insertIntoArray(str) {
  let arr = str.split(',')
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push([])
    for (let j = 0; j < arr[i].length; j++) {
      result[i].push(arr[i][j])
    }
  }
  return result
}

let input = 'aqrst,ukaei,ffooo'
console.log(insertIntoArray(input))
