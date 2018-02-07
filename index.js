function stringToArray(string){
  
  let stringSplit = [];
  let perKata = '';
  for(var i = 0; i < string.length; i++){
    if(string[i] === ','){
      stringSplit.push(perKata)  
      perKata = ''
    } else {
      perKata += string[i];  
    }
  }
  stringSplit.push(perKata)  

  let arrayBaru = [];
  for(var i = 0; i < stringSplit.length; i++){
    arrayBaru.push([]);
    for(var j = 0; j < stringSplit[i].length; j++){
      arrayBaru[i].push(stringSplit[i][j]);
    }  
  }
  return arrayBaru;
  
  
}

console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,asdf,ghjk'))
