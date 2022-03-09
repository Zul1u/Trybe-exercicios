//EXERCICIO PARA FIXAR 8.1
/* const morning = () => 'Acordando!!';

const afternoon = () => 'Bora tomar café!!';

const night = () => 'Partiu dormir!!';

const doingThings = (partOfTheDay) => console.log(partOfTheDay);

doingThings(night()); */

// EXERCICIOS 8.1 
// 1.

const person = (name)  => {
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

  console.log(newEmployees(person));
