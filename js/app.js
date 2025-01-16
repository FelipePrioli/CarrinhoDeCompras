let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0'

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidadeProduto = document.getElementById('quantidade').value
    let preco = quantidadeProduto * valorUnitario
    let carrinho = document.getElementById('lista-produtos')
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeProduto}X</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`
    totalGeral = totalGeral + preco;
    let total = document.getElementById('valor-total');
    total.textContent = `R$ ${totalGeral}`
      document.getElementById('quantidade').value = ''
    

}


function limpar(){
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0'
    totalGeral = 0;
}























// function adicionar(){
//     let produtoSelecionado = document.getElementById('produto').value
//     let quantidade = document.getElementById('quantidade').value
//     if(quantidade <= 0 ){
//         alert('Adicione a quantidade desejada');
//     }else{
//         ExibirNaLista(produtoSelecionado, quantidade)
//     }
    
// }

// let produtosSelecionados = [];

// function ExibirNaLista(a, b) {
//     let listaDeProdutos = document.getElementById('lista-produtos');
//     listaDeProdutos.innerHTML = `${b}X ${a}`
//     listaDeProdutos.appendChild(produtosSelecionados)
//     produtosSelecionados.push({ produto: a, quantidade: b })
//     }

// function limpar(){
//     document.getElementById('produto').value = ''
//     document.getElementById('quantidade').value = ''
//     document.getElementById('lista-produtos') = '<span class="texto-azul">1x</span> Celular <span class="texto-azul">R$1400</span>'
// }