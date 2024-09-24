/*
Promise.all(promises)– espera que todas as promessas sejam resolvidas e retorna um array de seus resultados.
Se qualquer uma das promessas fornecidas rejeitar, isso se torna o erro de Promise.all, e todos os outros resultados são ignorados.

Promise.allSettled(promises)(método adicionado recentemente) – espera que todas as promessas sejam liquidadas e retorna seus resultados como uma matriz de objetos com:
status: "fulfilled"  ou  "rejected" value(se cumprido) ou reason(se rejeitado).

Promise.race(promises)– espera que a primeira promessa se cumpra, e seu resultado/erro se torna o desfecho.

Promise.any(promises)(método adicionado recentemente) – espera a primeira promessa ser cumprida, e seu resultado se torna o desfecho. Se todas as promessas dadas forem rejeitadas, AggregateErrorse torna o erro de Promise.any.

Promise.resolve(value)– faz uma promessa resolvida com o valor dado.

Promise.reject(error)– faz uma promessa rejeitada com o erro fornecido. */



Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).catch(console.log); // Error: Whoops!


  Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 500))
  ]).then(console.log);

  Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(console.log); // 1