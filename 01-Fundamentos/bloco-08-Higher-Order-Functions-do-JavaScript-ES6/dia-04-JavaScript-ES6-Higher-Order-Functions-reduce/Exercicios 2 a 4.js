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
    
  // Nº 2.
  function reduceNames(array) {
    return array.reduce((acc, item) => {
      if (item.id === 6) return `${acc} ${item.author.name}.`
      return `${acc} ${item.author.name},`
    }, '');
  };
  //console.log(reduceNames(books));
  
  // Nº 3.
  function averageAge(array) {
    const mediuTime = array.reduce((acc, item, index, array) => {
      return acc + (item.releaseYear - item.author.birthYear) / array.length
    }, 0);
    return Math.floor(mediuTime);
  };
  //console.log(averageAge(books));
  
  // Nº 4.
  function longestNamedBook(array) {
    return array.reduce((acc, item) => acc.name.length > item.name.length ? acc : item);
  };
  //console.log(longestNamedBook(books));