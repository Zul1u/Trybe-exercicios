// 1.
/* 
const a = 5;
const b = 2;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b) */

// 2.

/* const numb1 = 7;
const numb2 = 8;

if(numb1 > numb2) {
    console.log(numb1);
}else {
    console.log(numb2);
}*/

// 3.

/* const numb1 = 8;
const numb2 = 9;
const numb3 = 7;

if(numb1 > numb2 && numb1 > numb3){
    console.log(numb1);
} else if(numb2 > numb1 && numb2 > numb3) {
    console.log(numb2);
} else {
    console.log(numb3)
}*/

// 4.

/* const numb1 = 6;

if (numb1 > 0){
    console.log("positive")
} else {
    console.log("negative")
} */

// 5.

/* const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 60;

if(angulo1 + angulo2 + angulo3 === 180) {
    console.log("true")
} else if(angulo1 + angulo2 + angulo3 > 180 || angulo1 + angulo2 + angulo3 < 180 && angulo1 + angulo2 + angulo3 > 0 ) {
    console.log("false")
} else if (angulo1 + angulo2 + angulo3 <= 0) {
    console.log("erro")
} */

// 6.

/* const bispo = "DIAGONAIS"
const peao = "frentE"

switch(peao.toLowerCase()) {
    case "diagonais":
        console.log(bispo);
    break
    
    case "frente":
        console.log(peao);
    break

    default:
        console.log("erro")
} */

// 7. 

/* let nota = -1;

if(nota >= 90 && nota <= 100){
    console.log("A");
} else if(nota >= 80 && nota <= 89){
    console.log("B");
} else if(nota >= 70 && nota <= 79){
    console.log("C");
} else if(nota >= 60 && nota <= 69){
    console.log("D");
} else if(nota >= 50 && nota <= 59){
    console.log("E");
} else if(nota < 50 && nota >= 0){
    console.log("F");
} else if(nota < 0 || nota > 100){
    console.log("erro");
} */

// 8.

/* const numb1 = 5;
const numb2 = 5;
const numb3 = 3

if(numb1 % 2 === 0 || numb2 % 2 === 0 || numb3 % 2 === 0){
    console.log("true");
}else{
    console.log("false")
} */

// 9.

/* const numb1 = 6;
const numb2 = 4;
const numb3 = 1;

if(numb1 % 2 === 1 || numb2 % 2 === 1 || numb3 % 2 === 1){
    console.log("true");
}else{
    console.log("false")
}*/

// 10.

/* const valorCusto = 7.5
const valorVenda = 10

let valorCustoTotal = null;
let impostoSobreOCusto = 0.20;
let lucro = null;
let valorInposto = null;
let valorVendaTotal = null;

valorInposto = valorCusto * impostoSobreOCusto;

valorCustoTotal = valorCusto + valorInposto;

valorVendaTotal = valorVenda *1000;
valorCustoTotal = valorCustoTotal *1000;

lucro = valorVendaTotal - valorCustoTotal

if (lucro > 0){
    console.log(lucro)
} else if(lucro < 0){
    console.log("erro")
} */

// 11.
let inss = null;
let ir = null;

const salarioBruto = 10000;

if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11;
} else {
    inss = 570.88;
};
console.log(inss);
const salarioSemInss = salarioBruto - inss;
console.log(salarioSemInss);


if (salarioSemInss <= 1903.98) {
    ir =  0;
} else if (salarioSemInss <= 2826.65) {
    ir = (salarioSemInss * 0.075) - 142.80;
} else if (salarioSemInss <= 3751.05) {
    ir = (salarioSemInss * 0.15) - 354.80;
} else if (salarioSemInss <= 4664.68) {
    ir = (salarioSemInss * 0.225) - 636.13;
} else {
    ir =  (salarioSemInss * 0.275) - 869.36;
};

console.log(ir)

const salario = salarioSemInss - ir ;
console.log(salario);
