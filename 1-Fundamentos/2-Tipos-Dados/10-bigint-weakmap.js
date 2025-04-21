// ============================
// 1. BigInt (Números Gigantes)
// ============================
const maxSafeInteger = Number.MAX_SAFE_INTEGER;
const bigNum = 9007199254740992n;

console.log('Perda de precisão com Number:',
  maxSafeInteger + 1 === maxSafeInteger + 2); // true
  
console.log('Precisão mantida com BigInt:',
  bigNum + 1n === bigNum + 2n); // false

// ============================
// 2. WeakMap (Versão prática)
// ============================
const weakMap = new WeakMap();

(function createAndDelete() {
  let objChave = { id: 1 };
  weakMap.set(objChave, "Dado privado");
  
  console.log('Antes de remover referência:',
    weakMap.has(objChave)); // true
    
  // Removendo referência
  objChave = null;
})();

// O garbage collector eventualmente removerá
// Não podemos forçar verificação imediata
console.log('WeakMap não permite verificação direta após remoção');

// ============================
// 3. Verificação de tipos
// ============================
class ClasseCustomizada {}
const instancia = new ClasseCustomizada();

console.log('Verificação de instância:',
  instancia instanceof ClasseCustomizada); // true
  
console.log('Verificação de BigInt:',
  typeof bigNum === 'bigint'); // true