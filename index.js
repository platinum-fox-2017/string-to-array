function stringToArray (str){
    let strToArray = str.split(',');
    let result = [];    
    for(let i=0; i<strToArray.length; i++){
        let row = [];
        for(let j=0; j<strToArray[i].length; j++){
            row.push(strToArray[i][j]);
        }
        result.push(row);
    }
    return result;
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));