const sumAll = ((...numbers) => numbers.reduce((acc, item) => acc + item, 0));
console.log(sumAll(1, 2, 3, 4, 5));