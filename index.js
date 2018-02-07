function strtoarr(str){
  var simpankata=str.split(",")
  var output=[]
  for(let i=0;i<simpankata.length;i++){
    output.push([])
    for(let j=0;j<simpankata[i].length;j++){
      output[i].push(simpankata[i][j])
    }
  }
  console.log(output)
}

var kumpulankata = "aqrst,ukaei,ffooo"
var kumpulankata2 = "qwer,tyui,asdf,ghjk"
strtoarr(kumpulankata)
strtoarr(kumpulankata2)
