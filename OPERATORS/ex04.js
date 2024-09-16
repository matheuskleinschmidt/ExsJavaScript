// Crie uma função que receba dois números e retorne true caso ao menos um dos
// números seja maior que 50. Caso contrário, deve-se retornar false.

function ex04(num1, num2) {
    return num1 > 50 || num2 > 50;
}

console.log(ex04(1,2))
console.log(ex04(2,1))
console.log(ex04(3,51))
console.log(ex04(52,6))
console.log(ex04(1123,2123))
console.log(ex04(8081,1234))
