// Solution 1 -
function stringToArray(input){
  let arrayString = input.split(",");
  let arrayResult = new Array;
  for(let i = 0; i < arrayString.length; i++){
    let tempArray = new Array;
    for(let j = 0; j < arrayString[i].length; j++){
      tempArray.push(arrayString[i][j]);
    }
    arrayResult.push(tempArray);
  }
  return arrayResult;
}

// Solution 2 - More conventional, without using split
function stringToArray(input){
  let arrayString = splitString(input);
  let arrayResult = new Array;
  for(let i = 0; i < arrayString.length; i++){
    let tempArray = new Array;
    for(let j = 0; j < arrayString[i].length; j++){
      tempArray.push(arrayString[i][j]);
    }
    arrayResult.push(tempArray);
  }
  return arrayResult;
}

function splitString(str){
  let tempStr = new String;
  let resultArray = new Array;
  for(let i = 0; i < str.length; i++){
    if(str[i]==','){
      resultArray.push(tempStr);
      tempStr = "";
    }
    else
      tempStr += str[i];
  }
  resultArray.push(tempStr);
  return resultArray;
}

console.log(stringToArray("aqrst,ukaei,ffooo"));
console.log(stringToArray("qwer,tyui,asdf,ghjk"));
