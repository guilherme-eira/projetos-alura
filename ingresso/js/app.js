function comprar() {
    let pista = parseInt(document.getElementById('qtd-pista').textContent);
    let cadeiraSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let cadeiraInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (quantidade < 0) {
        alert('A quantidade é inválida');
    }
    
    else if (tipoDeIngresso == 'pista') {
        pista = pista - quantidade;
        if (pista < 0){
            alert('Quantidade indisponível para pista!');
        } else {
            document.getElementById('qtd-pista').innerHTML = pista;
        }
    }

    else if (tipoDeIngresso == 'superior') {
        cadeiraSuperior = cadeiraSuperior - quantidade;
        if (cadeiraSuperior < 0) {
            alert('Quantidade indisponível para cadeiras superiores!');
        } else {
            document.getElementById('qtd-superior').innerHTML = cadeiraSuperior;
        }
    }

    else if (tipoDeIngresso == 'inferior') {
        cadeiraInferior = cadeiraInferior - quantidade;
        if (cadeiraInferior < 0){
        alert('Quantidade indisponível para cadeiras inferiores!');
        } else {
        document.getElementById('qtd-inferior').innerHTML = cadeiraInferior;
        }
    }

    document.getElementById('qtd').value = '';
}
