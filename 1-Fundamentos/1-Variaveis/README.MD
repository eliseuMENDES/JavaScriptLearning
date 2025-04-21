/**
 * 📂 1-Fundamentos/1-Variaveis/
 * 
 * Pasta dedicada ao estudo de variáveis em JavaScript, abordando:
 * - Declaração (var, let, const)
 * - Escopos (global, função, bloco)
 * - Hoisting
 * - Features modernas (template strings, destructuring)
 * - Closures e encapsulamento
 */

// =============================================
// 🔹 0-declaracao.js (Nível 0 - Básico)
// =============================================
/**
 * Introdução à declaração de variáveis:
 * - 'let': variável mutável com escopo de bloco
 * - 'const': variável imutável (não pode ser reatribuída)
 * - 'var': antigo (evitar usar - escopo de função)
 */
let nome = "João"; // Pode ser alterada depois
const PI = 3.14;   // Valor constante

// =============================================
// 🔹 1-escopo.js (Nível 20 - Escopos)
// =============================================
/**
 * Demonstra diferença de escopo:
 * - 'var' vaza para fora de blocos (if/for)
 * - 'let' respeita escopo de bloco
 */
function teste() {
  if (true) {
    var x = 10; // Vaza para a função
    let y = 20; // Restrito ao bloco if
  }
  console.log(x); // 10
  // console.log(y); // Erro! y não existe aqui
}

// =============================================
// 🔹 2-const.js (Nível 30 - Const vs Let)
// =============================================
/**
 * Comportamento de 'const':
 * - Não permite reatribuição
 * - Permite mutação de objetos/arrays
 */
const lista = [1, 2];
lista.push(3); // OK!
// lista = [4, 5]; // Erro (reatribuição)

// =============================================
// 🔹 3-hoisting.js (Nível 40 - Hoisting)
// =============================================
/**
 * Hoisting: içamento de declarações
 * - 'var': declarada é içada (valor undefined)
 * - 'let/const': não são inicializadas
 */
console.log(a); // undefined (var)
var a = 10;
// console.log(b); // Erro (let)
let b = 20;

// =============================================
// 🔹 4-escopo-funcao.js (Nível 50 - Escopo Aninhado)
// =============================================
/**
 * Escopo em funções aninhadas:
 * - Variáveis externas são acessíveis internamente
 * - Criamos closures ao retornar funções
 */
function criarContador() {
  let count = 0; // Preserva estado
  return function() {
    return ++count;
  };
}

// =============================================
// 🔹 5-const-objeto.js (Nível 60 - Mutabilidade)
// =============================================
/**
 * Const com objetos/arrays:
 * - Referência é constante, mas propriedades podem mudar
 */
const pessoa = { nome: "Ana" };
pessoa.nome = "Maria"; // OK!
// pessoa = {}; // Erro (reatribuição)

// =============================================
// 🔹 6-let-loop.js (Nível 70 - Loops)
// =============================================
/**
 * 'let' em loops cria escopo por iteração
 * - Soluciona problema clássico com 'var'
 */
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 0, 1, 2
}

// =============================================
// 🔹 7-template-strings.js (Nível 80 - Strings)
// =============================================
/**
 * Template Strings:
 * - Interpolação de variáveis
 * - Multi-linha
 * - Expressões embutidas
 */
console.log(`Olá ${nome}, idade: ${idade + 1}`);

// =============================================
// 🔹 8-destructuring.js (Nível 90 - Destructuring)
// =============================================
/**
 * Destructuring:
 * - Extrai valores de arrays/objetos
 * - Atalho para declaração
 */
const [x, y] = [10, 20]; // x=10, y=20
const { nome } = pessoa;  // Extrai pessoa.nome

// =============================================
// 🔹 9-closure.js (Nível 100 - Encapsulamento)
// =============================================
/**
 * Closure Avançado:
 * - Encapsula estado privado
 * - Expõe apenas métodos públicos
 */
function criarContador() {
  let count = 0; // Privado
  return {
    incrementar: () => ++count,
    getValor: () => count
  };
}

// =============================================
// 🔹 10-modulo.js (Nível 100+ - Pattern Module)
// =============================================
/**
 * Module Pattern:
 * - Combina closures e objetos
 * - Similar a classes privadas
 */
const modulo = (() => {
  let privado = 0;
  return {
    publico: () => privado++
  };
})();