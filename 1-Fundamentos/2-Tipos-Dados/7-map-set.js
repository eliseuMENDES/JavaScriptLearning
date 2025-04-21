//Map e Set
const mapa = new Map();
mapa.set("chave", "valor");

const conjunto = new Set([1, 2, 2, 3]); //Remove duplicados

console.log(mapa.get("chave")); // "valor"
console.log(conjunto.size);     // 3