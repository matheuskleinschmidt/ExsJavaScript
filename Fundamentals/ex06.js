// Crie uma função que recebe como parâmetro um valor em quilômetros e
// retorna o valor em milhas.

function ex06(km) {
  return km * 0.621371;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

for (let i = 0; i < 10; i++) {
  let num = getRandomInt(1, 1000);
  console.log(`${num} Quilômetros é igual a ${ex06(num)} Milhas`);
}
