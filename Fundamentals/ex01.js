//Crie um código que ordene de forma crescente o seguinte array:

const arrayList = [150, 10, 1, 2, -10, 23, 99, 500, 16];

console.log(arrayList.sort());

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

console.log(quickSort(arrayList));
