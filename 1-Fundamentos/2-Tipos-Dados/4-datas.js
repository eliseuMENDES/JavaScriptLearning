//  Trabalhando com datas

// Versão anterior :
// const agora = new Date();
// const natal = new Date("2025-12-25");

// console.log(agora.getMonth());  // Mês atual (0 - 11)
// console.log(natal.getDay());    // Dia da semana (0 - 6)

// Nova versão:

const agora = new Date();
console.log(`Mês atual (0-11 "o indice sempre conta a partir do zero"): ${agora.getMonth()}`); //3 (Abril)

// Data do Natal (2023-12-25 foi segunda-feira)
const natal = new Date("2023-12-25");
console.log(`Dia da semana do Natal (0-6): ${natal.getDay()}`); // 1

// Formato mais amigável
const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sextaa', 'Sábado'];
console.log(`Natal caiu em: ${diasSemana[natal.getDay()]}`); // "Segunda"  

// Obtendo o mês correto:
console.log(agora.getMonth() + 1);

// Ano com 4 dígitos 
console.log(agora.getFullYear());

// Dia do mês 1 ao 31
console.log(agora.getDate());

// Horas de 0 a 23
console.log(agora.getHours());

// Minutos
console.log(agora.getMinutes());

// Segundos
console.log(agora.getSeconds());

const agora2 = new Date();

//Função para adicionar zero à esquerda
function pad(num) {
    return num.toString().padStart(2, '0');
}

console.log(
    pad(agora2.getHours()) + ':' +
    pad(agora2.getMinutes()) + ':' +
    pad(agora2.getSeconds()) + ' ' +
    pad(agora2.getDate()) + '/' +
    pad(agora2.getMonth() + 1) + '/' +
    agora2.getFullYear()
);