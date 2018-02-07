function stringToArray(str){
  let split = str.split(',')
  let result = []

  //insert word
  for(let i = 0 ; i < split.length ;i++){
    result.push(split[i].split(''))
  }
  return result
}

let kata = 'aqrs,ukais,ffooo'
console.log(stringToArray(kata))
