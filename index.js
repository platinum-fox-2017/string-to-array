function strToArr(string) {

    // console.log(string); // aqrst,ukaei,ffooo
    var arrSplit = string.split(',')
    // console.log(arrSplit); // [ 'aqrst', 'ukaei', 'ffooo' ]
    // console.log(arrSplit.length); // 3

    var arrHasil = [];
    for (var i = 0; i < arrSplit.length; i++) {
        arrHasil.push([]);
        var input = arrSplit[i].split('');
        // console.log(i, input);
        // console.log(input.length); // 5

        for (var j = 0; j < input.length; j++) {
            arrHasil[i].push(input[j]);
        }
    }

    return arrHasil;

}


console.log(strToArr('aqrst,ukaei,ffooo'));
// expected output each string separated by , to inserted to array