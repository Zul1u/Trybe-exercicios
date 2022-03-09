const {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate} = require('./script');

describe ('Fução sum', () => {

  it ('A função sum deve retornar que a soma de 4 e 5 é igual a 9 ', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it ('A função sum deve retornar que a soma de 0 e 0 é igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it ('A função sum deve retornar um erro quando tentar somar 4 e "5"', () => {
    expect(() => sum(4, '5')).toThrowError();
  });

  it ('A mensagem de erro deve ser "parameters must be numbers"', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });

});

describe ('Função myRemove', () => {

  it ('A função myRemove deve retornar [1, 2, 4]', () => {
    const array = [1, 2, 3, 4]
    expect(myRemove(array, 3)).toEqual([1, 2, 4]);
  });

  it ('A função myRemove não deve retornar [1, 2, 3, 4]', () => {
    const array = [1, 2, 3, 4]
    expect(myRemove(array, 3)).not.toEqual([1, 2, 3, 4]);
  });

  it ('A função myRemove deve retornar [1, 2, 4]', () => {
    const array = [1, 2, 3, 4]
    expect(myRemove(array, 5)).toEqual([1, 2, 3, 4]);
  });

})

describe ('Função myFizzBuzz', () => {

  it ('A função myFizzBuzz deve retornar fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it ('A função myFizzBuzz deve retornar fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it ('A função myFizzBuzz deve retornar fizz', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });

  it ('A função myFizzBuzz deve retornar fizz', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });

  it ('A função myFizzBuzz deve retornar false', () => {
    expect(myFizzBuzz('a')).toBe(false);
  })

});

describe ('Funções encode e decode', () => {

  it ('Verifica se são funçoes', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  it ('A função encode deve retornar "1, 2, 3, 4, 5"', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });

  it ('A função decode deve retornar "a, e, i, o, u"', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });

  it ('A função encode não deve retornar "a, e, i, o, u"', () => {
    expect(encode('a, e, i, o, u')).not.toBe('a, e, i, o, u');
  });

  it ('A função decode não deve retornar "1, 2, 3, 4, 5"', () => {
    expect(decode('1, 2, 3, 4, 5')).not.toBe('1, 2, 3, 4, 5');
  });

  it ('Verifica o numero de caractere de que cada função retorna ', () => {
    expect(encode('a Bola é bunita').length).toBe(15);
    expect(decode('1 B4l1 é b5n3t1').length).toBe(15);
  });

});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});