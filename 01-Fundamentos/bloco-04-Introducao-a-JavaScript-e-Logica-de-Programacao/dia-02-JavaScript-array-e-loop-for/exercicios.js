// 1 ao 7.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1.
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i])
} */

// 2.
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
for (let i = 0; i < numbers.length; i += 1) {
    soma = numbers[i] + soma
}

console.log(soma); */

// 3.
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
for (let i = 0; i < numbers.length; i += 1) {
    soma = numbers[i] + soma
}
soma = soma / numbers.length
console.log(soma); */

// 4.
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
for (let i = 0; i < numbers.length; i += 1) {
    soma = numbers[i] + soma
}
soma = soma / numbers.length

if (soma > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
} */

// 5.
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;
for (let i = 0; i < numbers.length; i += 1){
    if(maiorNumero < numbers[i]){
        maiorNumero = numbers[i]
    }
}
console.log(maiorNumero) */

// 6.
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = [];
for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] % 2 === 1){
        impar.push(numbers[i])
        console.log(impar);
    } else {
        console.log("nenhum valor ímpar encontrado");
    }
} */

// 7.
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = 101;
for (let i = 0; i < numbers.length; i += 1) {
    if (menorNumero > numbers[i]) {
        menorNumero = numbers[i]
    }
}
console.log(menorNumero) */

// 8.
/* let numb = [];
let numb2 = 2;
for (let i = 1; i <= 25; i += 1) {
    numb.push([i])
} */

// 9.
/* for (let ii = 0; ii < numb.length; ii += 1){
   console.log(numb[ii] / 2) 
} */