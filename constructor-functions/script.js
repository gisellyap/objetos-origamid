const carro={
    marca:'marca',
    preco:0,
}

const honda= carro ;
    honda.marca='Honda';                              //DESSA MANEIRA ESTÁ ERRADO POIS O OBJETO CARRO VAI SER ATRIBUIDO O ÚTIMO VALOR(FIAT),
    honda.preco= 20000;                               //ASSIM COMO HONDA TAMBÉM RECEBERÁ ESSE VALOR.
    

const fiat= carro ;
    fiat.marca='Fiat';
    fiat.preco= 30000;
    
// PARA ISSO USAMOS AS CONSTRUCTOR FUNCTIONS

function Carro(marcaAtribuida, precoAtribuido){
    this.marca= marcaAtribuida;
    this.preco= precoAtribuido;
}

const nissan= new Carro('Nissan', 5000);

function Carro2(marca, precoInicial){
    this.taxa=1.2;
    const precoFinal= precoInicial * this.taxa
    this.marca= marca;
    this.preco= precoFinal;
}

const mazda =new Carro2('Mazda', 50000);
