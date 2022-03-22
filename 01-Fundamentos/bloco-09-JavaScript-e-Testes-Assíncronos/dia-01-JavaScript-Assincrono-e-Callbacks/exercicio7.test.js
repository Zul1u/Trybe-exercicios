const { uppercase } = require('./exercicio7.js');

describe('Exercicio 7 uppercase', () => {

  it ('deve retornar "BANANA"', (done) => {
    uppercase ('banana', (str) => {
      try {
          expect(str).toBe('BANANA');
          done();
      } catch (error) {
          done(error)
    }
    });
  });

});