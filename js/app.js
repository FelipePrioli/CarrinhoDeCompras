

function adicionar(){
    let produtoSelecionado = document.getElementById('produto').value
    let quantidade = document.getElementById('quantidade').value
    let listaDeProdutos = document.getElementById('lista-produtos')
    console.log(produtoSelecionado)
}

function ExibirNaLista(a, b){
    let listaDeProdutos = document.getElementById('lista-produtos')
    listaDeProdutos.innerHTML = `<span class="texto-azul">${a}</span> ${b} <span class="texto-azul">R$1400</span>`
}