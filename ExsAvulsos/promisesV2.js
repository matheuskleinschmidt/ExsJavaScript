// Atraso com uma promessa
// A função interna setTimeoutusa callbacks. Crie uma alternativa baseada em promessa.

// A função delay(ms)deve retornar uma promessa. Essa promessa deve resolver após msmilissegundos, para que possamos adicionar .thena ela, assim:

function delay(ms) {
  return new Promise(function(resolve,reject){setTimeout(resolve, ms)})
}

delay(3000).then(() => console.log('runs after 3 seconds'));