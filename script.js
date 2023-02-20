var mensagem = document.getElementById('mensagem');
var lista = ['Nuri', 'Analua', 'Maya', 'Lua', 'Ravi'];

function selecionar(){
    var escolha = prompt("Escolha um número de 0 até" + " " + lista.length)
    mensagem.innerHTML = "Sua escolha é:" + lista[escolha];
}
function verificar(){
    var digitar = prompt("Verifique se o determinado item existe na lista")
    mensagem.innerHTML = "Este item se encontra na posição" + " " + lista.indexOf(digitar)
}

function alterar(){
    var mudar = prompt("Escolha um número de 0 a 4 para editar")
    var editar = prompt("Digite e salve")
    mensagem.innerHTML = "Item editado"
    lista[mudar] = editar
}

function adicionar(){
    var somar = prompt("Digite um item para adicionar")
    mensagem.innerHTML = "Item adicionado"
    lista.push(somar)
}

function total(){
    mensagem.innerHTML = lista.toString();
}