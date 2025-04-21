// Symbols como propriedades privadas
const PRIVADO = Symbol('private');

class Contador {
    constructor() {
        this[PRIVADO] = 0;
    }

    incrementar() {
        return ++this[PRIVADO];
    }
}

const c = new Contador();
console.log(c.incrementar()); //1
console.log(Object.keys(c)); // [] (não aparece)