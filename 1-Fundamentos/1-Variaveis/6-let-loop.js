// Let em loops
for ( let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); //0, 1, 2, (com let, cada interação tem seu próprio i)
    }, 100);
}

// Com var seria 3,3,3!
