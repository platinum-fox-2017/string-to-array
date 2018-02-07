function stringToArray(input) {
  var getString=[];
  var pisah=input.split(',');
  for(var i=0;i<pisah.length;i++) {
    getString.push([]);
    for(var j=0;j<pisah[i].length;j++) {
      getString[i].push(pisah[i][j]);
    }
  }
  return getString;
}

console.log(stringToArray("aqrst,ukaei,ffooo"));
console.log(stringToArray("qwer,tyui,asdf,ghjk"));
