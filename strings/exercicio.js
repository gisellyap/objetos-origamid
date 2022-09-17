// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

  let taxaTotal= 0;
  let recebimentoTotal= 0;


  transacoes.forEach((item) =>{
    const numeroLimpo= +item.valor.replace('R$ ', '');

    if(item.descricao.slice(0, 4) === 'Taxa'){
      taxaTotal= taxaTotal+ numeroLimpo
    }else{
      recebimentoTotal= recebimentoTotal+= numeroLimpo
    }
  })
  console.log(taxaTotal);
  console.log(recebimentoTotal);



  
  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
  
  const transportesArray= transportes.split(';');
  console.log(transportesArray);

  
  // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;
  
  const htmlArray = html.split('span');
  const NovoHtmlArray = htmlArray.join('a');
  console.log(NovoHtmlArray);
  

  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';
 
  console.log(frase.charAt(frase.length -1));


  
  // Retorne o total de taxas
  const transacoes2 = ['Taxa do Banco','   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  let taxasTotal=0;

transacoes2.forEach((item)=>{
  item= item.toLowerCase();
  item= item.trim();
  item= item.slice(0,4);

  if(item === 'taxa'){
    taxasTotal++
  }

 
});
console.log(taxasTotal);
  