// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./exercicio8');

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const errorMesage = new Error('Não temos esse pokémon para você :(')

  getPokemonDetails(
      (pokemon) => pokemon.name === 'pikachu',
      (error, mesage) => {
        try {
            expect(error).toEqual(errorMesage)
            done();
          } catch (erro) { 
            done(erro);
          }
      }
  )

});

it("retorna um pokemon que existe no banco de dados", (done) => {
  const mesage = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';

    getPokemonDetails(
      (pokemon) => pokemon.name === 'Bulbasaur',
      (error, mesage) => {
        try {
            expect(mesage).toEqual(mesage)
            done();
          } catch (erro) { 
            done(erro);
          }
      }
  )

});
});