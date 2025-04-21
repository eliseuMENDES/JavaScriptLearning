// Closure com encapsulamento
function criarContador() {
    let count = 0;
    const incrementar = () => ++count;
    const getValor = () => count;

    return { incrementar, getValor }; // Expõe apenas métodos públicos
}

const contador = criarContador();
contador.incrementar();
console.log(contador.getValor()); // 1