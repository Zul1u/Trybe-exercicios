//EXERCICIO PARA FIXAR 8.1
/* const morning = () => 'Acordando!!';

const afternoon = () => 'Bora tomar café!!';

const night = () => 'Partiu dormir!!';

const doingThings = (partOfTheDay) => console.log(partOfTheDay);

doingThings(night()); */

// EXERCICIOS 8.1 
// 1.

/* const person = (name)  => {
  const email = `${name.replace(/ /g, '_').toLowerCase()}@trybe.com `

  return { name, email: email };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
   id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
   id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(person)); */

// 2.

const checkNumbers = (bet, raffel) => {
  if (raffel === bet) {
      return true;
  } else {
      return false;
  };
};

const numberGenerator = (bet, callback) => {
  const number = Math.floor(Math.random() * 5 + 1);
  
  if (callback(bet, number) === true){
      return console.log('Parabéns você ganhou!!!');
  } else {
    return console.log('Tente novamente :(');
  }
};

numberGenerator(5, checkNumbers)