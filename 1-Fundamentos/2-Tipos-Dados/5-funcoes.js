function somar(a, b) {
    return a + b;
}

somar.propriedades = "valor"; // Adicionando propriedade

console.log(typeof somar); //"Function"
console.log(somar(2, 3)); //5
console.log(somar.propriedades); //"valor"