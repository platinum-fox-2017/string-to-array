function stringToArr(str){
    var row = str.split(',');
    // console.log(row);
    var bigWrap = [];
    for(var i=0; i<row.length; i++){
        var wrap = [];
        var currentRow = row[i];
        for(var j=0; j<currentRow.length; j++){
            wrap.push(currentRow[j]);
        }
        bigWrap.push(wrap);
    }
    return bigWrap;
}

console.log(stringToArr("aqrst,ukaei,ffooo"));
console.log(stringToArr("qwer,tyui,asdf,ghjk"));