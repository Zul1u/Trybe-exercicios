// Exercicio Numero 1 

const testingScope = (escopo) => {
    if (escopo === true) {
        var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
        /* console.log(ifScope); */
        return ifScope
    } else {
        let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        /* console.log(elseScope); */
        return elseScope
    }
    //console.log(`${ifScope} o que estou fazendo aqui ? :O`);
}

console.log(testingScope(true));

// Exercicio Numero 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordena = oddsAndEvens.sort((a, b) => a - b);
console.log(oddsAndEvens)
