//const instrumentos= ['Guitarra', 'Baixo', 'Violão'];
const precos=[49, 99, 68, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];
function andar(nome){ 
    console.log(nome);
}


const carros = new Array('Corola', 'Mustang', 'Honda');

carros[2]='ferrari'; // substitue honda por ferrari
carros[3]='kia'; // adiciona mais um item
carros[20]='Ram'; // adiciona o item 20, mas fica com espaços vazios
console.log(carros.length); //mostra o tamanho da array

const li= document.querySelectorAll('li');
const arrayli = Array.from(li);

const obj ={
    0:'andre',
    1:'rafael',
    2:'teste',
    length:3
}
const objArray= Array.from(obj);
console.log(objArray);


console.log(li);
console.log(arrayli);

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
console.log(frutas.length);

const instrumentos= ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort();

const idades= [32,21,33,43,1,12,8];
idades.sort();

console.log(instrumentos);
console.log(idades);

console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].copyWithin(2, 0, 2));