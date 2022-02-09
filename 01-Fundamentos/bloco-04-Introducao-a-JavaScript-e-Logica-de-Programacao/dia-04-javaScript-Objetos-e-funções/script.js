// Para fixar 1.
/* let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
};

console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade.")

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes'  )

console.log('A jogadora possui ' + player.medals.golden  + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata'); */

// Para fixar 2.
/* let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (let pessoa in names) {
    console.log('Olá ' + names[pessoa])
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let key in car) {
    console.log(key, car[key])
} */

// Para fixar 3.

// 1.
/* function soma(a, b){
    return a + b;
}
console.log(soma(1, 5))

function subitracao(a, b){
    return a - b;
}
console.log(subitracao(5, 8))

function multiplicacao(a, b){
    return a * b;
}
console.log(multiplicacao(3, 7))

function divisao(a, b){
    return a / b;
}
console.log(divisao(8, 2))

function modulo(a, b){
    return a % b;
}
console.log(modulo(10, 2)) */

// 2.
/* function maiorNumero(a, b){
    if (a > b) {
        return a  + ' é maior';
    } else {
        return b +' é maior';
    }
}
console.log(maiorNumero(5, 8)) */

// 3.
/* function maiorNumero(a, b, c){
    if (a > b && a > c) {
        return a  + ' é maior';
    } else if (b > a && b > c) {
        return b +' é maior';
    }else {
        return c + ' é maior'
    }
}
console.log(maiorNumero(5, 4, 1)) */

// 4.
/* function positiveNegative (a){
    if (a > 0){
        return 'Positive'
    }else  {
        return 'Negative'
    }
}
console.log(positiveNegative(-1)) */

// 5.
/* function triangulo(a, b, c){
    let angulosIguais = true;
    if (a + b + c === 180){
        return angulosIguais =  true;
    } else if (a + b + c > 180) {
        return angulosIguais =  false;
    } else if (a + b + c > 0 && a + b + c < 180){
        return angulosIguais = false;
    } else {
        return "Error 404!"
    }
}
console.log(triangulo(60, 60, 60)) */