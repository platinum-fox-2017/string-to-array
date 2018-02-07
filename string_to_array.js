function stringToArray(str){
  let words = str.split(',');
  let result = [];

  for(let i=0; i<words.length; i++){
    let row = [];
    for(let j=0; j<words[i].length; j++){
      row.push(words[i][j])
    }
    result.push(row)
  }

  return result
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'))
