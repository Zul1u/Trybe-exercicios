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
function palíndromo(a) {
    let palavra = a
    palavra = palavra.split('').reverse().join('');
    if (palavra == a) {
        return true;
    } else {
        return false;
    }
}
console.log(palíndromo('arara'))