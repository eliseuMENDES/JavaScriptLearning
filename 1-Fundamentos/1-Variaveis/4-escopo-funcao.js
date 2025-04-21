// Escopo em funções
function teste() {
    var a = 1;
    let b = 2;

    if (true) {
        var a = 10; // Mesma variavel
        let b = 20; // Nova variável
        console.log(a, b); // 10, 20
    }

    console.log(a ,b); // 10, 2 (var vazou, let não)
}

teste();