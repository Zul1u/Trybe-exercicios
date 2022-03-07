const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};
  
const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};
  
const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addKey = (objeto, key, value) => {
  const newKey = key;
  const valueKey = value;
  objeto[newKey] = valueKey;
  return objeto;
};

addKey(lesson2, 'turno', 'noite');

const listkeys = objeto => console.log(Object.keys(objeto));
//listkeys(lesson2);

const sizeObj = objeto => console.log(Object.keys(objeto).length);
//sizeObj(lesson2);

const listValue = objeto => console.log(Object.values(objeto));
//listValue(lesson2);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
//console.log(allLessons);

const totalStudents = objeto => {
  const lessons = Object.keys(objeto);
  let total = 0;
  
  for (let i = 0; i < lessons.length; i += 1){
    total += objeto[lessons[i]].numeroEstudantes
  }
  return `O numero total de alunos é ${total}.`
}
//console.log(totalStudents(allLessons));

const valueKey = (obj, position) => {
  const objValues = Object.values(obj);
  console.log(objValues[position])
}
//valueKey(lesson1, 0);

const verifyPair = (obj, key, value) => {
  const arrayObj = Object.entries(obj);
  //console.log(arrayObj);
  //console.log('----------------');
  let tOurF = false;
  
  for (let keys in arrayObj){
    if (arrayObj[keys][0] === key && arrayObj[keys][1] === value) tOurF = true
  }
  return tOurF
}
console.log(verifyPair(lesson2, 'numeroEstudantes', 20));
