// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'maçã', 'mamão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'leite em pó', 'mucilon'];

const fruitSalad = (fruit, additional) => {
  const fruitSaladRicipe = [...fruit, ...additional];
  return fruitSaladRicipe;
};
//console.log(fruitSalad(specialFruit, additionalItens));

// object destructuring 
// cria um novo objeto usando o spread operator
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};
const userJobInfos = {...user, ...jobInfos};
const { name, age, nationality, profession, squad, squadInitials} = userJobInfos;
//console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}.`);

// array destructuring 
// Nº 1.
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

//saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [o, s]  = saudacoes;
//s(o);

// Nº 2.
// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

//console.log(comida, animal, bebida); // arroz gato água
[comida, animal, bebida] = [bebida, comida, animal];
//console.log(comida, animal, bebida);

// Nº 3.
// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

//console.log(numerosPares); // [6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares
//console.log(numerosPares)

//default destructuring
// Nº 1.
const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

//console.log(getNationality(otherPerson)); // Ivan is Russian
//console.log(getNationality(person));

//property shorthand 
// Nº 1.
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude
});
//console.log(getPosition(-19.8157, -43.9542));

//Default Parameters
// Nº 1.
// Escreva aqui a sua função
const multiply = (number, value = 1) => {
  return number + value
};

console.log(multiply(8));