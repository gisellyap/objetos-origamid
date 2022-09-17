console.log(Number.isNaN('string'))



console.log(parseFloat('99.50')); // Mesma função sem o Number
console.log(Number.parseFloat('99.50')); // 99.5
console.log(Number.parseFloat('100 Reais')); // 100
console.log(Number.parseFloat('R$ 100')); // NaN

console.log(parseInt('99.50', 10)); // 99
console.log(parseInt(5.43434355555, 10)); // 5
console.log(Number.parseInt('100 Reais', 10)); // 100