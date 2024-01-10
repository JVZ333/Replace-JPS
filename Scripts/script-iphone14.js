const botoesCores = document.querySelector('.cores');
botoesCores.addEventListener('click', function mudarIphone(event) {
    const botaoClicado = event.target.closest('button');
    if (botaoClicado) {
        const idDoBotao = botaoClicado.id;
        //const textoDoBotao = botaoClicado.textContent;
        const iphoneMostrado = document.querySelector('#iphone-mostrado');
        switch(idDoBotao) {
            case 'vermelho':
                iphoneMostrado.src = '../iphones/15.png';
                break;
            case 'amarelo':
                console.log('Botão 2 clicado');
                iphoneMostrado.innerHTML = 'Botão 2 clicado';
                break;
            case 'azul':
                console.log('Iphone azul');
                break;
            case 'branco':
                console.log('Iphone branco');
                break;
            case 'preto':
                console.log('Iphone preto');
                break;
            case 'roxo':
                console.log('Iphone roxo');
                break;
        }
    }
});
  