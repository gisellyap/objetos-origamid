function Pessoa(nome, idade){
    this.nome= nome;
    this.idade= idade;
    this.abraçar= function(){
        return 'Abraçou';
    };
}

Pessoa.prototype.andar= function(){
    return this.nome + ' Pessoa andou';
}

Pessoa.prototype.nadar= function(){
    return this.nome + ' Pessoa nadou';
}

const andre = new Pessoa('André', 28)

// console.log(Pessoa.prototype)
// console.log(andre.prototype)

const pais = 'Brasil';
const cidade = new String('Rio');

const listaAnimais = ['cachorro', 'Gato', 'Cavalo']; 

const lista =document.querySelectorAll('li');

const listArray= Array.prototype.slice.call(lista);


const Carro={
    marca:'Ford',
    preco:2000,
    andar(){
        return true;
    }
}


