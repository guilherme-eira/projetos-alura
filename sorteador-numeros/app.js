function sortear() {
    let quantidadeDeNumeros = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;
    console.log(`Quantidade: ${quantidadeDeNumeros}    De: ${de}     Até: ${ate}`);
    
    if (de >= ate) {
        alert('Não é possível sortear pois o número incial é maior que o número limite.');
        de = document.getElementById('de').value = '';
        ate = document.getElementById('ate').value = '';
        return;
    }
    
    if (quantidadeDeNumeros > ate - de + 1) {
        alert('Não é possível sortear pois a quantidade de números é maior que o intervalo.');
        return;
    }

    let sorteados = [];
    let numeroAleatorio;

    for( i = 0; i < quantidadeDeNumeros; i++ ) {
        let numeroAleatorio = gerarNumeroAleatorio(de, ate);

        while(sorteados.includes(numeroAleatorio)) {
            numeroAleatorio = gerarNumeroAleatorio(de, ate)
        }
    
        sorteados.push(numeroAleatorio);
    }
    
    exibirTextoNaTela ('resultado', `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`);
    alterarStatusBotao();
}

function gerarNumeroAleatorio(min, max) {
    let minimo = Math.ceil(min);
    const maximo = Math.floor(max);
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}
      
function exibirTextoNaTela(tag, texto) {
    let html = document.getElementById(tag);
    html.innerHTML = texto;
}

function reiniciar() {
    quantidade = document.getElementById('quantidade').value = '';
    de = document.getElementById('de').value = '';
    ate = document.getElementById('ate').value = '';
    exibirTextoNaTela ('resultado', `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`);
    alterarStatusBotao();
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}