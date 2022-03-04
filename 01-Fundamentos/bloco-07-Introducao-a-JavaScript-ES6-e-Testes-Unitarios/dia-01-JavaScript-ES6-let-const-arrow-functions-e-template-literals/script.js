 //  PARTE 1
// Exercicio Numero 1 

/* const testingScope = (escopo) => {
    if (escopo === true) {
        var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
        //console.log(ifScope);
        return ifScope
    } else {
        let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        //console.log(elseScope);
        return elseScope
    }
    //console.log(`${ifScope} o que estou fazendo aqui ? :O`);
}

console.log(testingScope(true)); */

// Exercicio Numero 2

/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordena = oddsAndEvens.sort((a, b) => a - b);
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente !`); */ 

//  PARTE 2
// Exercicio Numero 1

/* const factorial = n => {
  let fatorial = 1
  for (let i = 1; i <= n; i += 1) {
      fatorial *= i;
  }

  return fatorial;
}
console.log(factorial(5)); */

// Exercicio Numero 2

/* const maiorPalavra = frase => {
  let palavras = frase.split(' ');
  let comprimento = 0;
  let palavraMaior = '';
  for (let i = 0; i < palavras.length; i += 1){
      if (palavras[i].length > comprimento){
          comprimento = palavras[i].length;
          palavraMaior = palavras[i];
      }
  }
  console.log(palavraMaior);
}

maiorPalavra('A barata dis que tem sete saias de filo. É mentira da barata, ela tem é uma so'); */

// Exercicio Numero 3

/* const bnt = document.querySelector('#bnt');
let clickCount = 0;

bnt.addEventListener('click', () =>{
  const cliques = document.querySelector('#cliques');
  cliques.innerHTML = clickCount += 1;
}); */

// Exercicio Numero 4

const procuraX = String => {
  const frase = 'Tryber x aqui!'
  return frase.replace('x', String);
  /* let x = frase.split(' ');
  //console.log(x);
  for (let i = 0; i < x.length; i += 1){
    if (x[i] === 'x') {
        x[i] = String;
    }
  }
  const y = x.join(' ');

  return y */;
}

const skills = ['HTML', 'CSS', 'ES6', 'Github', 'DOM'];

const concatena = juncao => `${juncao} Minhas cinco principais skills são:
${skills.sort()}`

console.log(concatena(procuraX('Arthur')));