// Crie um código que some apenas os números positivos do array a seguir:

const arrayList = [10, -100, 20, -33, 44, 16, 1, 200, -3];

function arraySoma(arrayList) {
  let soma = 0;
  for (const element of arrayList) {
    if (element > 0) {
      soma = soma + element;
    }
  }
  console.log(soma);
}

arraySoma(arrayList);
