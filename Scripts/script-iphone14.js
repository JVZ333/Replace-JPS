// Alterar iphone quando clicar em celular de determinada cor.
const botoesCores = document.querySelector('.cores'); //Selecionando o pai
botoesCores.addEventListener('click', function mudarIphone(event) { //Adicionando um ouvinte que vai detectar os cliques dentro dessa "div"
    const botaoClicado = event.target.closest('button'); //Certificando que só vai aceitar os cliques nos botões
    if (botaoClicado) { //Caso seja true(o clique no botão) ele prossegue.
        const idDoBotao = botaoClicado.id; //Pegando o ID do botão que foi clicado
        //const textoDoBotao = botaoClicado.textContent;
        const iphoneMostrado = document.querySelector('#iphone-mostrado'); // Pegando ID da imagem do Iphone pra ser possível alterar.
        switch(idDoBotao) {  // Pra cada ID uma imagem diferente, é tipo um If, else.
            case 'vermelho': //Se o ID for vermelho...
                iphoneMostrado.src = '../iphones/iphone14/iphone14-vermelho.png'; // O SRC da imagem será mudado por esse.
                break;  //Para parar, caso contrário, ele continuaria executando os d+
            case 'amarelo':
                iphoneMostrado.src = '../iphones/iphone14/iphone14-amarelo.png';
                break;
            case 'azul':
                iphoneMostrado.src = '../iphones/iphone14/iphone14-azul.png';
                break;
            case 'branco':
                iphoneMostrado.src = '../iphones/iphone14/iphone14-branco.png';
                break;
            case 'preto':
                iphoneMostrado.src = '../iphones/iphone14/iphone14-preto.png';
                break;
            case 'roxo':
                iphoneMostrado.src = '../iphones/iphone14/iphone14-roxo.png';
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
        switch(idDoBotao) { 
            case 'memoria-128':
                titulo.textContent = 'Iphone 14 (128 GB) '; 
                break;  
            case 'memoria-256':
                titulo.textContent = 'Iphone 14 (256 GB) ';
                break;
            case 'memoria-512':
                titulo.textContent = 'Iphone 14 (512 GB) ';
                break;
        }
    }
});