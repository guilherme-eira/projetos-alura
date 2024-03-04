let totalGeral = 0
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = '';


function adicionar() {
    let produto = document.getElementById('produto').value;
    let valorNumerico = produto.split('- R$')[1];
    let nomeProduto = produto.split('- R$')[0];
    let quantidade = document.getElementById('quantidade').value;
    let listaDeProdutos = document.getElementById('lista-produtos');
    listaDeProdutos.innerHTML = listaDeProdutos.innerHTML + ` <section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x </span> ${nomeProduto} <span class="texto-azul"> R$${valorNumerico}</span>
  </section>`;
    
    if (quantidade == 0){
        alert('Selecione a quantidade de produtos.')
        listaDeProdutos.innerHTML = '';
        total.innerHTML = ``;

    }
    let total = document.getElementById('valor-total');
    let calculo = valorNumerico * quantidade;
    let registro = totalGeral = totalGeral + calculo
    total.innerHTML = `R$ ${registro}`;

}

function limpar() {
    let lista = document.getElementById('lista-produtos');
    lista.innerHTML = '';
    let total = document.getElementById('valor-total');
    total.innerHTML = '';
    let quantidade = document.getElementById('quantidade').value = '';
}
