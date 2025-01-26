//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// essa é a lista de amigos, começa vazia
let amigosLista = [];


// essa é uma função que vai adicionar os amigos na lista array com os devidos tratametnos
function adicionarAmigo(){
    alvoAmigo = document.querySelector('#amigo').value;
    // se o valor tiver vazio ele vai dar um alerta
    if (alvoAmigo == '') {
        alert("Por favor, insira um nome.")
    } else{
    amigoInserir(alvoAmigo);
    console.log(amigosLista);
    limparCampo('#amigo');

// aqui vai o loop para criar <li> para cada nome, optei por usar while
    let listaCampo = document.querySelector('#listaAmigos');
    let i = 0;

    // se não limpar ele vai ficar colando o array repetido
    listaCampo.innerHTML = '';
    while (i < amigosLista.length){
        indexAmigoAtual = amigosLista[i];
        let novoItem = document.createElement('li');
    novoItem.textContent = indexAmigoAtual;
    listaCampo.appendChild(novoItem);

    // tem que lembrar de sempre somar pro i cumprir a condição e fechar o  loop
    i++;
    }
    }
}

// essa é uma função pra limpar o input quando adiciona um amigo
function limparCampo(tag){
    document.querySelector(tag).value = '';
}

// essa é a função injeta o amigo na array

function amigoInserir(amigo) {
    amigosLista.push(amigo);
}