// Exercicicos Parte 1

// 1.
/* let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do Personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda, ' + info.personagem + '!') */

// 2.
/* info.recorrente = 'sim'
console.log(info) */

// 3 e 4.
/* for (key in info) {
    console.log(key)
    console.log(info[key])
} */

// 5.
/* let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do Personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim',
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Cristimas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
};

for (let key in info) {
    if (key === 'recorrente' && info[key] === 'sim' && info2[key] === 'sim'){
        console.log('Ambos recorrenrtes');
    } else {
        console.log(info[key] + ' e ' + info2[key])
    }
} */

// 6.
/* let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};
console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo) */

// 7.
/* leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
})
console.log(leitor['livrosFavoritos']) */

//8.
/* console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.') */

// Exercicicos Parte 2

// 1.
/* function palíndromo(a) {
    let palavra = a
    palavra = palavra.split('').reverse().join('');
    if (palavra == a) {
        return true;
    } else {
        return false;
    }
}
console.log(palíndromo('arara')); */

// 2.
/* function maiorNumero(array) {
    let numero = [];
    let numero2 = -1
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] > numero2){
            numero2 = array[i]
            numero.push(array[i]);
        } 
    }
    return numero.length -1;
}
console.log(maiorNumero([2, 3, 6, 7, 10, 1])); */

// 3.
/* function menorNumero(array){
    let numero = [];
    let numero2 = 100;
    for (let i = 0; i < array.length; i += 1){
        if (array[i] < numero2){
            numero.push(array[i]);
        }
    }
    return numero.length -1;
}
console.log(menorNumero([2, 4, 6, 7, 10, 0, -3,])); */

// 4.
/* function maiorNome(array) {
    let tamanhosNomes = [];
    for (let i = 0; i < array.length; i += 1){
        tamanhosNomes.push(array[i].length)
    }
    let nomeMaior = -Infinity
    for (let ii = 0; ii < tamanhosNomes.length; ii +=1){
        if (nomeMaior < tamanhosNomes[ii]) {
            nomeMaior = tamanhosNomes[ii]
        }
    }
    let indexMaiorNome = tamanhosNomes.indexOf(nomeMaior)
    return console.log(array[indexMaiorNome])
}
maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']) */

// 5.
/* function maisRepetido(array) {
    let contador = 0;
    let maiorContador = 0;
    for (let i = 0; i < array.length; i += 1) {
        for(let ii = 0; ii < array.length; ii += 1) {
            if (array[i] === array[ii]) {
                contador += 1;
            }
        }
        if (contador > maiorContador){
            maiorContador = contador;
            return array[i];
        }
    }
}
console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]))*/

// 6.
function somatorio(N) {
    let soma = 0;
    for (let i = 1; i <= N; i +=1) {
        soma += i
    }
    return soma
}
console.log(somatorio(5))

// 7.
function palavraFinal(word, ending) {
    if (word.slice(- ending.length) === ending) {
        return true;
    } else {
        return false
    }
}
console.log(palavraFinal('joaofernando', 'fernan'))