// Closure avançado
function criarContador() {
    let count = 0;
    
    return {
        incrementar: () => {
            count++;
            return count;
        },
        decrementar: () => {
            count--;
            return count;
        },
        valor: () => count,
        resetar: () => {
            count = 0;
            return count;
        }
    };
}

const contador = criarContador();

console.log(contador.valor());
