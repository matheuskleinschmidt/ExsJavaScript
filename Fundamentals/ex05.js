// Crie uma função que recebe um texto como parâmetro e que retorne esse
// texto sem espaços em branco.

function ex05(texto) {
  return texto.replace(/\s/g, "");
}
console.log("----------------------------------------------------------------------------------------------------------------------------------------------")
console.log(ex05("Removendo todos os espaços de uma string usando Javascript"));
console.log("----------------------------------------------------------------------------------------------------------------------------------------------")

console.log(
  ex05(
    "Promise.reject(reason) Retorna um novo objeto Promise que é rejeitado com o motivo fornecido."
  )
);
console.log("----------------------------------------------------------------------------------------------------------------------------------------------")

console.log(
  ex05(
    "Um objeto de configurações é um ambiente que fornece informações adicionais quando o código JavaScript está em execução."
  )
);
console.log("----------------------------------------------------------------------------------------------------------------------------------------------")

console.log(
  ex05(
    "O ecossistema JavaScript fez várias implementações do Promise muito antes de se tornar parte da linguagem."
  )
);
console.log("----------------------------------------------------------------------------------------------------------------------------------------------")

console.log(
  ex05(
    'A condição de término de uma promise determina o estado "estabelecido" da próxima promise na cadeia. Um estado "cumprido" indica uma conclusão bem-sucedida da promise, enquanto um estado "rejeitado" indica falta de sucesso.'
  )
);
console.log("----------------------------------------------------------------------------------------------------------------------------------------------")

console.log(
  ex05(
    "Manipular uma promise rejeitada em cada .then() tem consequências mais adiante na cadeia de promises. Às vezes não há escolha, porque um erro deve ser tratado imediatamente. Nesses casos, devemos lançar um erro de algum tipo para manter o estado de erro na cadeia."
  )
);
console.log("----------------------------------------------------------------------------------------------------------------------------------------------")

console.log(
  ex05(
    'Essa promise já está resolvida no momento em que é criada (porque o resolveOuter é chamado de forma síncrona), mas é resolvido com outra promise e, portanto, não será cumprida até 1 segundo depois, quando a promise interna for cumprida. Na prática, a "resolução" muitas vezes é feita nos bastidores e não observável, e apenas o seu cumprimento ou rejeição o são.'
  )
);
console.log("----------------------------------------------------------------------------------------------------------------------------------------------")

