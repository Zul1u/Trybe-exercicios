// 1 ao 7.

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
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
for (let i = 0; i < numbers.length; i += 1) {
    soma = numbers[i] + soma
}
soma = soma / numbers.length

if (soma > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}