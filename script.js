alert(`Bah tche, seja muito mais que bem vindo ao mercadinho do seu Gusmão`)
alert(`Esqueci meus óculos em casa, então tu vai ter que me falar o valor das coisas que tão no Balcão`)
alert(`Aproveita que hoje nois tamo com desconto no Chimas`)

let quantidadeRefri = parseInt(prompt(`Bah, quantos Refrigerantes tu vai comprar?`));
let precoRefri = parseFloat(prompt(`Qual o preço de cada Refrigerante tche?`));
let totalRefri = quantidadeRefri * precoRefri; 
alert(`O total em Refrigerante ficou em ${totalRefri} reais`);

let quantidadeMacarrao = parseInt(prompt(`Bah, quantos Macarrões tu vai comprar?`));
let precoMacarrao = parseFloat(prompt(`Qual o preço de cada Macarrão tche?`));
let totalMacarrao = quantidadeMacarrao * precoMacarrao; 
alert(`O total em Macarrão ficou em ${totalMacarrao} reais`);

let quantidadeErvilha = parseInt(prompt(`Bah, quantas Ervilhas tu vai comprar?`));
let precoErvilha = parseFloat(prompt(`Qual o preço de cada Ervilha tche??`));
let totalErvilha = quantidadeErvilha * precoErvilha;
alert(`O total em Ervilhas ficou em ${totalErvilha} reais`);

let quantidadeChimas = parseInt(prompt(`Bah, quantos Chimas tu vai comprar? Aproveita que tá com desconto de 10%`));
let precoChimas = parseFloat(prompt(`Qual o preço de cada Chimas tche?`));
let totalChimas = (quantidadeChimas * precoChimas) - (quantidadeChimas * precoChimas * 0.1);
alert(`O total em Chimas ficou em ${totalChimas} reais`);

let quantidadeArroz = parseInt(prompt(`Bah, quantos Arroz tu vai comprar?`));
let precoArroz = parseFloat(prompt(`Qual o preço de cada Arroz tche??`));
let totalArroz = quantidadeArroz * precoArroz;
alert(`O total em Arroz ficou em ${totalArroz} reais`);

let quantidadeFeijao = parseInt(prompt(`Bah, quantos Feijões tu vai comprar?`));
let precoFeijao = parseFloat(prompt(`Qual o preço de cada Feijão tche??`));
let totalFeijao = quantidadeFeijao * precoFeijao;
alert(`O total em Feijão ficou em ${totalFeijao} reais`);

const precoVinho = 70;
alert(`Bah compadre, o Vinho tá por uma bagatela de ${precoVinho} reais.`);
let quantidadeVinho = parseInt(prompt(`Quantos Vinhos tu vai comprar tche?`));
let totalVinho = quantidadeVinho * precoVinho;
alert(`O total em Vinho ficou em ${totalVinho} reais`);


let totalCompra = parseFloat(totalRefri) + parseFloat(totalMacarrao) + parseFloat(totalErvilha) + parseFloat(totalChimas) + parseFloat(totalArroz) + parseFloat(totalFeijao) + parseFloat(totalVinho);

alert(`Tudo as compra ficou em ${totalCompra} reais`)

console.log(`No total a compra ficou em ${totalCompra} reais`);

let metadeCompra = totalCompra / 2;

let resultadoCompra;
let valorVoce;
let valorAmigo;

if(totalCompra % 2 == 0){
    resultadoCompra = "Par";
    valorVoce = metadeCompra - totalVinho;
    valorAmigo = metadeCompra + totalVinho;
}else{
    resultadoCompra = "Ímpar";
    valorVoce = metadeCompra;
    valorAmigo = metadeCompra;
}



valorVoce = Math.abs(valorVoce);
valorAmigo = Math.abs(valorAmigo);

console.log(`Então seguindo o combinado Você vai pagar ${valorVoce} e Seu Amigo vai pagar ${valorAmigo} porque a compra deu um valor ${resultadoCompra}.`)