function arrDuaDimensi(kata){
  var nestedArr = [];
  var arr = [];
  for(var i=0; i<kata.length; i++){
    if(kata[i]===','){
      nestedArr.push(arr);
      arr = [];
    } else {
      arr.push(kata[i]);
    }
  }
  nestedArr.push(arr);
  return nestedArr;
}
console.log(arrDuaDimensi('aqrst,ukaei,ffooo'));
console.log(arrDuaDimensi('qwer,tyui,asdf,ghjk'));
