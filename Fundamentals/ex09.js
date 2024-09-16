// Crie uma função que recebe dois parâmetros, sendo o primeiro deles um
// texto e o segundo um número. Essa função deve retornar qual letra no texto
// o número fornecido representa. Ex.:
// ○ myFunction(‘abcdefgh’, 5)
// ■ Deve retornar a letra “e”

function obterLetra(texto, numero) {
    if (numero > 0 && numero <= texto.length) {
        return texto[numero - 1];
    } else {
        return "Número fora do intervalo";
    }
}

console.log(obterLetra('abcdefgh', 0)); 
console.log(obterLetra('abcdefgh', 1)); 
console.log(obterLetra('abcdefgh', 2)); 
console.log(obterLetra('abcdefgh', 3)); 
console.log(obterLetra('abcdefgh', 4)); 
console.log(obterLetra('abcdefgh', 5)); 
console.log(obterLetra('abcdefgh', 6)); 
console.log(obterLetra('abcdefgh', 7)); 
console.log(obterLetra('abcdefgh', 8)); 
console.log(obterLetra('abcdefgh', 9)); 

