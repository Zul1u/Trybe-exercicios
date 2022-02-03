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

let nota = -1;

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
}