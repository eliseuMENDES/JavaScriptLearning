//Comportamento do hoisting com var
console.log(x); //undefined (hosting)
var x = 10;
console.log(x); //10

//console.log(y) //ReferenceError (let/const não sofrem hosting)
let y = 20;
