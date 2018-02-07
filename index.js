function stringToArray(string){
  arr = string.split(',')
  arrResult = []
  for(let i =0;i<arr.length;i++){
    arrResult.push(arr[i].split(''))
  }
  return arrResult
}


console.log(stringToArray('agrha,adi,prayogo'));
