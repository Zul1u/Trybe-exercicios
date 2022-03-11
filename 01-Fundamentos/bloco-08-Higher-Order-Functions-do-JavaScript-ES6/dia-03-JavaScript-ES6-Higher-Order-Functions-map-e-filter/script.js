const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Nº 1.
function formatedBookNames(array) {
  const newArray = array.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`);
  return newArray;
};
//console.log(formatedBookNames(books));

// Nº 2.
function nameAndAge(array) {
  const newObj = array.map((element) => 
  ({age: element.releaseYear - element.author.birthYear, author: element.author.name}));
  newObj.sort((a, b) => a.age - b.age);
  return newObj;
};
//console.log(nameAndAge(books));

// Nº 3.
function fantasyOrScienceFiction(array) {
  const fictionFantasy = array.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia');
  return fictionFantasy
}
//console.log(fantasyOrScienceFiction(books));

// Nº 4.

function oldBooksOrdered(array) {
  const oldBooks = array.filter((element) => 2022 - element.releaseYear > 60);
  return oldBooks.sort((a, b) => a.releaseYear - b.releaseYear);
};
//console.log(oldBooksOrdered(books));

// Nº 5.
function fantasyOrScienceFictionAuthors(array) {
  const nameAuthorFiction = array.filter((elementA) => elementA.genre === 'Ficção Científica' || elementA.genre === 'Fantasia');
  return nameAuthorFiction.map((elementB) => elementB.author.name).sort();
}
//console.log(fantasyOrScienceFictionAuthors(books));

// N 6.
function oldBooks(array) {
  const oldBooksNames = array.filter((element) => 2022 - element.releaseYear > 60);
  return oldBooksNames.map((element) => element.name);
}
//console.log(oldBooks(books));

// N 7.
function authorWith3DotsOnName() {
};
console.log(authorWith3DotsOnName())