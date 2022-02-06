// 1.
/* let result = 1;

for (let index = 10; index >= 1; index -= 1){
    result *= index 
}
console.log(result) */

// 2.
/* let word = 'macaco';
let drow = '';
for (let i = word.length -1; i >= 0; i -= 1){
    drow += word[i]
}
console.log(drow); */

// 3.
/* let array = ['java', 'javascript', 'python', 'html', 'css'];
let menorPalavra ='macarraoComQueijo';
let maiorPalavra = '1'
for (let i = 0; i < array.length; i += 1) {
    if (menorPalavra.length > array[i].length) {
        menorPalavra =  array[i]
    }
    if (maiorPalavra.length < array[i].length) {
        maiorPalavra =  array[i]
    }
}

console.log(menorPalavra)

console.log(maiorPalavra)  */  

//4.
/* let numeroPrimo = null;
for (let i = 0; i <= 50; i += 1){
    let primo = true;
    //console.log(primo)
    for (let ii = 2; ii < i; ii += 1){
        if (i % ii === 0){
            primo = false;
        }
    if (primo) {
        numeroPrimo = i
    }
    }
}

console.log(numeroPrimo)  */