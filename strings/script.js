const frase= 'A melhor linguagem';
const linguagem =' JavaScript';

const fraseCompleta=frase.concat(linguagem, '!!');
console.log(fraseCompleta);


const fruta='Banana';
const listaFruta='melancia, Banana, Laranja';

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi



const instrumento = 'Guitarra';

instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('r'); // 6
instrumento.indexOf('ta'); // 3




const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
})

listaPrecos[0].padStart(10, '.'); // .....R$ 99
listaPrecos[0].padEnd(10, '.');   // R$ 99.....

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';

listaItens= listaItens.replace(/[ ]+/g, ', ');

const arrayLista = listaItens.split(', ');

console.log(listaItens);
console.log(arrayLista);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');

