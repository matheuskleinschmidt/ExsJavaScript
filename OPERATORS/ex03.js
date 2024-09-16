// Crie uma função que receba dois números e retorne true caso ambos os números
// sejam maiores que 100. Caso contrário, deve-se retornar false

function ex03(num1, num2){
 return num1 && num2 > 100
}

console.log(ex03(1,2))
console.log(ex03(2,1))
console.log(ex03(3,2))
console.log(ex03(101,101))
console.log(ex03(1123,2123))
console.log(ex03(8081,1234))
console.log(ex03(12834039,3498756))