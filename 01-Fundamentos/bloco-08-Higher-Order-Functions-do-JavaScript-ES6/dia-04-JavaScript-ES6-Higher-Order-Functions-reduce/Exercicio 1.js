// EXERCICIOS DO DIA 8.4
// Nº 1.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(array) {
  return array.reduce((acc, item) => acc.concat(item))
};
//console.log(flatten(arrays));
