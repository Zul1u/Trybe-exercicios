// Nº 6.
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(estudantes) {
  return estudantes.map((elemento, index) =>  ({
      name: elemento,
      avarage: grades[index].reduce((acc, item) => acc + item, 0) / grades[index].length
  }));
}
console.log(studentAverage(students));
