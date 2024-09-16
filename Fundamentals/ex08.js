// Crie uma função que recebe um texto como parâmetro e que retorna se esse
// texto é um palíndromo

function ex08(texto) {
  const textoLimpo = texto.toLowerCase();
  const textoReverso = textoLimpo.split("").reverse().join("");

  return textoLimpo === textoReverso;
}

console.log(ex08("aibofobia"));
console.log(ex08("aia"));
console.log(ex08("anilina"));
console.log(ex08("arara"));
console.log(ex08("mamam"));
console.log(ex08("matam"));
console.log(ex08("omissíssimo"));
console.log(ex08("sopapos"));
console.log("-----");
console.log(ex08("texto"));
console.log(ex08("método "));
console.log(ex08("estático"));
console.log(ex08("retorna "));
console.log(ex08("Promise"));
console.log(ex08("rejeitada"));
console.log(ex08("debug"));
