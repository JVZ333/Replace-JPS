const botoesCores = document.querySelector('.cores');
botoesCores.addEventListener('click', function mudarIphone(event) {
    const botaoClicado = event.target.closest('button');
    if (botaoClicado) {
        const idDoBotao = botaoClicado.id;
        //const textoDoBotao = botaoClicado.textContent;
        const iphoneMostrado = document.querySelector('#iphone-mostrado');
        switch(idDoBotao) {
            case 'vermelho':
                iphoneMostrado.src = '../iphones/iphone14/iphone14-vermelho.png';
                break;
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
  