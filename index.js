function stringtoArray(str) {
	var result = [];

	var temp = [];
	for (var i = 0; i < str.length; i++) {
		
		if (str[i] != ',' && i == str.length - 1) {
			temp.push(str[i]);
			result.push(temp);
		}else if (str[i] == ',') {
			result.push(temp);
			temp = [];
		} else {
			temp.push(str[i]);
		}
	}

	return result;
}

console.log(stringtoArray('aqrst,ukaei,ffooo'));
console.log(stringtoArray('qwer,tyui,asdf,ghjk'));