function stringToArr(str) {
  const arrStr = str.replace(/,/g, "").split("");
  const row = str.split(",").length;
  const column = str.indexOf(",");
  let count = 0;
  let result = [];

  for (let i = 0; i < row; i++) {
    result.push([]);
    for (let j = 0; j < column; j++) {
      result[i].push(arrStr[count]);
      count++;
    }
  }

  return result;
}

console.log(stringToArr("aqrst,ukaei,ffooo"));
console.log(stringToArr("qwer,tyui,asdf,ghjk"));