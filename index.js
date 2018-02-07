// Release 0;
let string_to_array = (input) => {
    input = input + ',';
    let outside =[];
    let inside =[];
    for(let i=0; i<input.length; i++){
        if(input[i] === ','){
            outside.push(inside)
            inside =[];
        } else {
            inside.push(input[i]);
        }
    }
    return (outside);
}

let inputA = 'aqrst,ukaei,ffooo';
let inputB = 'qwer,tyui,asdf,ghjk';

console.log(string_to_array(inputA));
console.log(string_to_array(inputB));