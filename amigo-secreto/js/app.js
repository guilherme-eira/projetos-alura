let listaDeNomes = [];

function adicionar() {
    
    let nome = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if (lista.textContent == '') {
        if (nome.value == 0) {
        return;
        } else {
        listaDeNomes.push(nome.value)
        lista.textContent = nome.value;
        }
    } else if (listaDeNomes.includes(nome.value)) {
        alert('O nome digitado já está contido na lista de nomes.');
        nome.value = '';
        return;
    } else {
        if (nome.value == 0) {
        return;
        } else {
        lista.textContent = lista.textContent + ', ' + nome.value;
        listaDeNomes.push(nome.value);  
        }
    }

    nome.value = '';
    console.log(listaDeNomes)
}

function sortear() {

    embaralha(listaDeNomes);
    console.log(listaDeNomes);
    let listaSorteio = document.getElementById('lista-sorteio');

    for (i=0; i < listaDeNomes.length; i++) {
        if (i == listaDeNomes.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaDeNomes[i] + '-->' + listaDeNomes[0] + '<br>';
        } else {
            console.log(listaSorteio);
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaDeNomes[i] + '-->' + listaDeNomes[i + 1] + '<br>';
        }
    }

    if (listaDeNomes.length < 4) {
        alert('A lista precisa conter no mínimo 4 pessoas.')
        document.getElementById('lista-sorteio').textContent = '';
    }
}


function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {
        let = indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    listaDeNomes.splice(0, listaDeNomes.length);
    console.log(listaDeNomes);
    document.getElementById('lista-sorteio').textContent = '';
    document.getElementById('lista-amigos').textContent = '';
}


