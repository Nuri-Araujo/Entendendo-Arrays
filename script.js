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

//O método toString() converte um array em uma string de valores(separados por vírgula).
//O método join() permite especificar um separador:
//O método push() adiciona um novo elemento ao final de um array.
//Podemos usar o método unshift() incluir um novo elemento no início do array.
//O método pop() remove o último elemento de um array.
//Podemos usar o método shift() para remover o primeiro elemento e deslocar os demais elementos para um índice menor.
//O método concat() cria um novo array mesclando arrays existentes.
