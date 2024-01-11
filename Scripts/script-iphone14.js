// Alterar iphone quando clicar em celular de determinada cor.
const botoesCores = document.querySelector('.cores'); //Selecionando o pai
botoesCores.addEventListener('click', function mudarIphone(event) { //Adicionando um ouvinte que vai detectar os cliques dentro dessa "div"
    const botaoClicado = event.target.closest('button'); //Certificando que só vai aceitar os cliques nos botões.
    if (botaoClicado) { //Caso seja true(o clique no botão) ele prossegue.
        const idDoBotao = botaoClicado.id; //Pegando o ID do botão que foi clicado
    const botaoClicado = event.target.closest('button');
        //const textoDoBotao = botaoClicado.textContent;
        const iphoneMostrado = document.querySelector('#iphone-mostrado'); // Pegando ID da imagem do Iphone pra ser possível alterar.
        switch(idDoBotao) {  // Pra cada ID uma imagem diferente, é tipo um If, else.
            case 'vermelho': //Se o ID for vermelho...
                iphoneMostrado.src = '../iphones/iphone14/iphone14-vermelho.png'; // O SRC da imagem será mudado por esse.
                break;  //Para parar, caso contrário, ele continuaria executando os d+
            case 'amarelo':
                iphoneMostrado.src = '../iphones/iphone14/iphone14-amarelo.png';
                iphoneMostrado.src = '../iphones/iphone14/iphone14-amarelo-usa.jpg';
                break;
            case 'azul':
                iphoneMostrado.src = '../iphones/iphone14/iphone14-azul.png';
                console.log('Iphone azul');
                break;
            case 'branco':
                iphoneMostrado.src = '../iphones/iphone14/iphone14-branco.png';
                console.log('Iphone branco');
                break;
            case 'preto':
                iphoneMostrado.src = '../iphones/iphone14/iphone14-preto.png';
                console.log('Iphone preto');
                break;
            case 'roxo':
                iphoneMostrado.src = '../iphones/iphone14/iphone14-roxo.png';
                console.log('Iphone roxo');
                break;
        }
    }
});

//Alterar memórias

const memorias = document.querySelector('.memorias');
memorias.addEventListener('click', function mudarIphone(event) {
    const botaoClicado = event.target.closest('button'); 
    if (botaoClicado) { 
        const idDoBotao = botaoClicado.id; 
        const titulo = document.querySelector('.nome-cell')
        const preco = document.querySelector('#preco')
        const precoParcelado = document.querySelector('#preco-parcelado')
        switch(idDoBotao) { 
            case 'memoria-128':
                titulo.textContent = 'Iphone 14 (128 GB) ';
                preco.innerHTML = '<h2 id="preco" class="valor"><sup>R$</sup>4.481<sup>00</sup> <span class="beneficio">18% OFF no Pix</span></h2>'
                precoParcelado.innerHTML = '<p id="preco-parcelado" class="segundo-valor">ou R$4.735 em <span class="beneficio">10x de 473.50 sem juros</span></p>'
                break;  
            case 'memoria-256':
                titulo.textContent = 'Iphone 14 (256 GB) ';
                preco.innerHTML = '<h2 id="preco" class="valor"><sup>R$</sup>5.449<sup>00</sup> <span class="beneficio">18% OFF no Pix</span></h2>';
                precoParcelado.innerHTML = '<p id="preco-parcelado" class="segundo-valor">ou R$5.635 em <span class="beneficio">10x de 563.50 sem juros</span></p>';
                break;
            case 'memoria-512':
                titulo.textContent = 'Iphone 14 (512 GB) ';
                preco.innerHTML = '<h2 id="preco" class="valor"><sup>R$</sup>6.298<sup>99</sup> <span class="beneficio">10% OFF no Pix</span></h2>';
                precoParcelado.innerHTML = '<p id="preco-parcelado" class="segundo-valor">ou R$6.988.88 em <span class="beneficio">10x de 699.89 sem juros</span></p>';
                break;
        }
    }
})
  