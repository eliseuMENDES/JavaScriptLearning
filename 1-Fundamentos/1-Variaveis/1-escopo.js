// Diferença de escopo
function testeEscopo() {
	var x = 10;
	if (true) {
	let y = 20;
	console.log(x, y); //10, 20
	}
	console.log(x); // 10
	//console.log(y);  //Erro!
}

console.log(testeEscopo());