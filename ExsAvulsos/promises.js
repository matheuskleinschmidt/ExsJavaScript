let promiseDone = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 1000);
});

let promiseReject = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("opa!")), 1000);
});

promiseDone.then((result) => console.log(result));

promiseDone.then(
  function (result) {
    console.log(result);
  },
  function (error) {
    console.log(error);
  }
);

// quando só quiser conclusões bem sucedidas
promiseDone.then(console.log);

promiseReject.then(
  function (result) {
    console.log(result);
  },
  function (error) {
    console.log(error);
  }
);

promiseReject
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// quando só quiser erros
promiseReject.catch(console.log);

// uso da limpeza (.finally)

new Promise((resolve, reject) => {
  setTimeout(() => resolve("value"), 1000);
})
  .finally(() => console.log("Promise ready"))
  .then((result) => console.log(result));

new Promise((resolve, reject) => {
  throw new Error("errouuuuu");
})
  .finally(() => console.log("Promise ready"))
  .catch((err) => console.log(err));


// Podemos anexar manipuladores a promessas estabelecidas

let promise = new Promise(resolve => resolve("done!"))
promise.then(console.log)