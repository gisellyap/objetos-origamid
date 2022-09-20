// // const carros=['Ford', 'Fiat', 'Honda'];

// // carros.forEach((item, index, array) => {
// //     console.log(item.toUpperCase(), index, array);
// // });

// // console.log(carros);


// const li = document.querySelectorAll('li');
 
// const retornoForeach= li.forEach((item,index) => {
//     item.classList.add('ativa'+ index)
// });

// console.log(retornoForeach);


// const carros=['Ford', 'Fiat', 'Honda'];

// const novaArray =carros.map((item,index,array)=>{
//     console.log(item.toUpperCase(),index,array)
// })

// console.log(novaArray);






// const aulas = [
//     {
//       nome: 'HTML 1',
//       min: 15
//     },
//     {
//       nome: 'HTML 2',
//       min: 10
//     },
//     {
//       nome: 'CSS 1',
//       min: 20
//     },
//     {
//       nome: 'JS 1',
//       min: 25
//     },
//   ]
  
//   const tempoAulas = aulas.map(aula => aula.min);
//   console.log(tempoAulas);
//   // [15, 10, 20, 25];
  
//   const puxarNomes = (aula) => aula.nome;
//   const nomesAulas = aulas.map(puxarNomes);
//   console.log(nomesAulas); 
//   // ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']


//   const aulas2 = [10, 25, 30];

//   const reduceAulas= aulas2.reduce((acumulador, item, index, array)=>{
//     console.log(acumulador,item,index)
//     return acumulador + item
//   },0 )

//   console.log(reduceAulas);


// const frutas = ['Banana', '', 'Pêra', 'Uva'];

// // const temUva= frutas.some((item)=>{
// //   return item === 'Uva'
// // });

// const every= frutas.every((fruta)=>{
//   return fruta;
// });

// console.log(every);


// const numeros = [6, 32, 56 , 89, 150, 29];
// const maiorQue3= numeros.every(n => n >= 6);
// console.log(maiorQue3);



const frutas = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = frutas.findIndex((fruta) => {
  return fruta === 'Uva'; 
}); // 2

console.log(buscaUva);

const numeros = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros.find(x => x > 45); // 88
console.log(buscaMaior45);


const frutas1 = ['Banana', undefined, null,'', 0,  'Pêra', 'Uva'];
const arrayFrutas= frutas1.filter((item) =>{
  console.log(item);
  return item 
});


console.log(arrayFrutas)
