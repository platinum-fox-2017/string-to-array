function strToArray(str) {
    var arrPerKata = str.split(',');
    var arrBalikan = [];
    for (var i = 0; i < arrPerKata.length; i++) {
        var arrPerhuruf = [];
        for (var j = 0; j < arrPerKata[i].length; j++) {
            arrPerhuruf.push(arrPerKata[i][j]);
        }
        arrBalikan.push(arrPerhuruf);
    }
    return arrBalikan;
}


console.log(strToArray("qwert,asrtya,ewpan,qwfgh,fghjk"));
console.log(strToArray("aqrst,ukaei,ffooo"));
console.log(strToArray("qwer,tyui,asdf,ghjk"));

