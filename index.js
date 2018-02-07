function stringToArray(str) {
    return str.split(',').map(value=> value.split(''));
}

var str1="aqrst,ukaei,ffooo";
var str2="qwer,tyui,asdf,ghjk"

console.log(stringToArray(str1));
console.log(stringToArray(str2));