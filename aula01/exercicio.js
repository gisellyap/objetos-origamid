//TRANSFORME O OBJETO ABAIXO EM UMA CONSTRUCTOR FUNCTION
 function Pessoa(nome,idade){
    this.nome= nome;
    this.idade=idade;
    this.andar= function andar(){
        console.log(this.nome + ' andou');
    }
};

// CRIE 3 PESSOAS, JOÃO - 20 ANOS
// MARIA - 25 ANOS, BRUNO - 15 ANOS

const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);

//CRIE UMA CONSTRUCTOR FUNCTION (DOM) PARA MANIPULAÇÃO DE LISTAS DE ELEMENTOS DO DOM.
//DEVE CONTER AS SEGUINTES PROPRIEDADES E MÉTODOS:
//
//ELEMENTS, RETORNA NODELIST COM OS ELEMENTOS SELECIONADOS ADDCLASS(CLASSE), ADICIONA CLASSE A TODOS OS ELEMENTOS
//REMOVECLASS(CLASSE), REMOVE A CLASSE A TODOS OS ELEMENTOS

function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.elements= elementList;
    this.addClass= function(classe){
        elementList.forEach((element)=>{
            element.classList.add(classe);
        })
    }
    this.remove= function(classe){
        elementList.forEach((element)=>{
            element.classList.remove(classe)
        })
    }
}

const listaItens = new Dom('li');
const ul = new Dom('ul');

ul.addClass('ativado')
listaItens.addClass('ativar');
