function cor_iphone(corSelecionada) {
    const divCelular = document.getElementById('cartao-iphone');
    let caminhoImagem;
  
    switch (corSelecionada) {
      case 'vermelho':
        caminhoImagem = '../iphones/11.png';
        break;
      case 'azul':
        caminhoImagem = 'caminho/para/imagem/azul-celular.png';
        break;
      case 'verde':
        caminhoImagem = 'caminho/para/imagem/verde-celular.png';
        break;
      default:
        caminhoImagem = '../iphones/14 pro max.png';
    }
    
    divCelular.innerHTML = `<img src="${caminhoImagem}" alt="${corSelecionada} celular">`;
  }
  
  const botoesCor = document.querySelectorAll('.botao-cor');
  
  botoesCor.forEach(botao => {
    botao.addEventListener('click', () => {
      const corSelecionada = botao.getAttribute('data-cor');
      trocarImagemCelular(corSelecionada);
    });
  });
  