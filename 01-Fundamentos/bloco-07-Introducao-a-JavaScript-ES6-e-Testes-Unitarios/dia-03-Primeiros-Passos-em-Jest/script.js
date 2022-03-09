function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  
  return a + b;
}

function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }

  function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }

function encode(string) {
  let frase = '';
  for (let i = 0; i <= string.length -1; i += 1){
    switch (string[i]) {
      case 'a':
        frase += '1';
        break;
      case 'e':
        frase += '2';
        break;
      case 'i':
        frase += '3';
        break;
      case 'o':
        frase += '4';
        break;
      case 'u':
        frase += '5';
        break;
      default:
        frase += string[i];
    }
  }
  return frase
}

function decode(string) {
  let frase = '';
  for (let i = 0; i <= string.length -1; i += 1){
    switch (string[i]) {
      case '1':
        frase += 'a';
        break;
      case '2':
        frase += 'e';
        break;
      case '3':
        frase += 'i';
        break;
      case '4':
        frase += 'o';
        break;
      case '5':
        frase += 'u';
        break;
      default:
        frase += string[i];
    }
  }
  return frase
} 

function techList (array, string) {
  if (array.length === 0) return 'Vazio!'

  let tecnologias = [];
  array.sort()
  for (let i = 0; i < array.length; i += 1){
    tecnologias.push({
      tech: array[i],
      name: string,
    });
  }
  return tecnologias;
}

function hydrate (string) {
  const numeros = string.replace(/\D/g, '');
  //console.log(numeros.length);
  let coposDeAgua = 0;
  for (let i = 0; i <= numeros.length -1; i += 1) {
    coposDeAgua += parseInt(numeros[i]);
  };

  if (coposDeAgua === 1) {
    return `${coposDeAgua} copo de água`
  } else {
    return `${coposDeAgua} copos de água`;
  }
};
//console.log(hydrate('1 copo de serveja, 2 copos de cachaça'));

module.exports = {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate};
