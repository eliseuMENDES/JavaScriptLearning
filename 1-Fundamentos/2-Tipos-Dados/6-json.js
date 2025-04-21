// Conversão JSON
const dados = {
    nome: "Carlos",
    habilidades: ["JS", "CSS"]
};

const jsonString = JSON.stringify(dados); // Objeto -> String
const objeto = JSON.parse(jsonString); // String -> Objeto

console.log(jsonString);    // '{"nome":"Carlos", "habilidades": ["JS", "CSS"]}'