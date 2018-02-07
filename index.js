function toArray(input){
  var data = input.split(',')
  var hasil = []

  for(var i=0; i<data.length; i++){
    hasil.push([])
    for(var j=0; j<data[i].length; j++){
      hasil[i].push(data[i][j])
    }
  }
  return hasil
}
console.log(toArray('aqrst,ukaei,ffooo'))
console.log(toArray('qwer,tyui,asdf,ghjk'))
