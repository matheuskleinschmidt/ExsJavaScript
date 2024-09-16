//Crie um código que retorna um array com apenas os valores negativos do array a seguir:

const arrayList = [100, 200, 300, -400, -200, -300, 1000];

function arrayOpa(arrayList) {
  const newArray = [];
  for (const element of arrayList) {
    if (element < 0) {
      newArray.push(element);
    }
  }
  console.log(newArray);
}

arrayOpa(arrayList);
