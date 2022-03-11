// EXERCICIOS PARA FIXAR 8.2
// forEach

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];
  
const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
}; 
//emailListInData.forEach(showEmailList);

// find
// Nº 1.
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (array) => {
  const firtNumber = array.find((element) => element % 3 === 0 && element % 5 === 0);
  return firtNumber;
}
//console.log(findDivisibleBy3And5(numbers));

// Nº 2.
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (array) => {
  const firtName = array.find((element) => (element.length) === 5);
  return firtName
}

//console.log(findNameWithFiveLetters(names));

// Nº 3.
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
function findMusic(id) {
  const firtMusic = musicas.find((element) => element.id === id);
  return firtMusic
};
  
//console.log(findMusic('31031685'));

// some e every
// Nº 1.
const nomes = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((element) => element === name);

//console.log(hasName(nomes, 'Ana'));

//Nº 2.
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((element) => element.age >= minimumAge);

//console.log(verifyAges(people, 16));

// sort
// Nº 1.
const peoples = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

peoples.sort((a, b) => a.age - b.age);

//console.log(peoples);

//Nº 2.
peoples.sort((a, b) => b.age - a.age);

//console.log(peoples);