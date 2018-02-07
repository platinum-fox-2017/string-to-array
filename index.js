const strToArray =(string)=>{
    let strSplit = string.split(',')
    let newArray = []
    for(let i =0;i<strSplit.length;i++){
        newArray.push([])
        for(let j =0;j<strSplit[i].length;j++){
            newArray[i].push(strSplit[i][j])
        }
    }
    return newArray
}

let word = 'aqrst,ukaei,ffooo'
let anotherWord = 'qwer,tyui,asdf,ghjk'
console.log(strToArray(word))
console.log(strToArray(anotherWord))