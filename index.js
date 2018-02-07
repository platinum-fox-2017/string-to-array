function strToArr(str){
  let words = str.split(',');
  let arr = [];
  for (var i = 0; i < words.length; i++) {
    arr.push(words[i].split(''));
  }
  return arr;
}


console.log(strToArr('aqwe,wqer,tqrw'));
