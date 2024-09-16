//Crie um código que ordene de forma crescente o seguinte array:

const arrayList = [150, 10, 1, 2, -10, 23, 99, 500, 16];

console.log(arrayList.sort());

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivo = arr[0];
  let ArrayEsquerdo = [];
  let ArrayDireito = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivo) {
      ArrayEsquerdo.push(arr[i]);
    } else {
      ArrayDireito.push(arr[i]);
    }
  }

  return [...quickSort(ArrayEsquerdo), pivo, ...quickSort(ArrayDireito)];
};

console.log(quickSort(arrayList));
