// Crie uma função que recebe um número como parâmetro e retorne true caso
// o mesmo seja divisível por 10 e false caso não seja.

function ex04(num) {
  if (num % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

for (let i = 0; i < 10; i++) {
  let num = getRandomInt(1, 1000);
  console.log(`o numero ${num} é divisivel por 10: ${ex04(num)}`);
}
