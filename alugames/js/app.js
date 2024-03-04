let alugados = [document.getElementById('game-1')];

function alterarStatus(id) {
    let jogoEscolhido = document.getElementById(`game-${id}`);
    let imagem = jogoEscolhido.querySelector('.dashboard__item__img');
    let botao = jogoEscolhido.querySelector('.dashboard__item__button');
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        
    }
    if (botao.classList.contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML = 'Alugar';
        alert('Jogo devolvido com sucesso!')
        alugados.pop(jogoEscolhido);

    } else {
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = 'Devolver';
        alert('Jogo alugado com sucesso!')
        alugados.push(jogoEscolhido);
    }

    contadorDeAluguel();
}

function contadorDeAluguel() {
    console.log(`Há ${alugados.length} jogos alugados!`);
}