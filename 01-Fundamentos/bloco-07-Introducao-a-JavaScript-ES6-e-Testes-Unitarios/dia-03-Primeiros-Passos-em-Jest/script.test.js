const {sum, myRemove} = require('./script');

describe('Fução sum', () => {

  it('A função sum deve retornar que a soma de 4 e 5 é igual a 9 ', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('A função sum deve retornar que a soma de 0 e 0 é igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('A função sum deve retornar um erro quando tentar somar 4 e "5"', () => {
    expect(() => sum(4, '5')).toThrowError();
  });

  it('A mensagem de erro deve ser "parameters must be numbers"', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });

});

describe('Função myRemove', () =>{

  it('A função myRemove deve retornar [1, 2, 4]', () => {
    const array = [1, 2, 3, 4]
    expect(myRemove(array, 3)).toEqual([1, 2, 4]);
  });

  it('A função myRemove não deve retornar [1, 2, 3, 4]', () => {
    const array = [1, 2, 3, 4]
    expect(myRemove(array, 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('A função myRemove deve retornar [1, 2, 4]', () => {
    const array = [1, 2, 3, 4]
    expect(myRemove(array, 5)).toEqual([1, 2, 3, 4]);
  });

})