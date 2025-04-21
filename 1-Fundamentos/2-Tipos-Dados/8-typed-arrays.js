// Typed Arrays
const buffer = new ArrayBuffer(16); // 16 Bytes
const view = new Int32Array(buffer); // Interpreta como inteiros 32-bit

view[0] = 42;
console.log(view[0]); //42
console.log(view.length); //4 (16/4)