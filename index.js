function stringToArray (kalimat) {
    let result = [];
    kalimat = kalimat.split(',');

    for (let i = 0; i < kalimat.length; i++){
        result.push([]);
        for (let j = 0; j < kalimat[i].length; j++){
            result[i].push(kalimat[i][j]);
        }
    }
    return result;
}

console.log(stringToArray("aqrst,ukaei,ffooo"))
console.log(stringToArray("qwer,tyui,asdf,ghjk"))
