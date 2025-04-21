//  Mutabilidade em const 
const pessoa = {
    nome: "Ana",
    idade: 25
};

pessoa.idade = 26;
// pessoa = { nome: "João" }; // Erro (reatribuição)

console.log(pessoa); // {nome: "Ana, idade: 26"}