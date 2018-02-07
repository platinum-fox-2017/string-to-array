const stringToArr = string =>{
    let newStr = string.split(',')
    let nestedArr= []
    for(let i=0; i<newStr.length; i++){
        let arr =[]
        for(let j=0; j<newStr[i].length; j++){
            arr.push(newStr[i][j])
        }
        nestedArr.push(arr)
    }
   return nestedArr    
}


let str = "aqrst,ukaei,ffooo";
let str2 ="qwer,tyui,asdf,ghjk"
console.log(stringToArr(str))
console.log(stringToArr(str2))