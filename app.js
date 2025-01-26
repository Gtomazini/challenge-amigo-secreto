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
    limparCampo('#amigo', 'valor');

// aqui vai o loop para criar <li> para cada nome, optei por usar while
    let listaCampo = document.querySelector('#listaAmigos');
    let i = 0;

    // se não limpar ele vai ficar colando o array repetido
    limparCampo('#listaAmigos', 'elemento');
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

// essa é uma função pra limpar o valor de um elemento HTML ou o elemento em si
function limparCampo(tag, parameter){
    if(parameter == 'valor'){
    document.querySelector(tag).value = '';
    }
    else{
        if(parameter == 'elemento'){
            elemento = document.querySelector(tag);
            elemento.innerHTML = '';
        }
    }
}

// essa é a função injeta o amigo na array

function amigoInserir(amigo) {
    amigosLista.push(amigo);
}

// função para escolher o amigo secreto
function sortearAmigo(){

    if(amigosLista.length == 0)
    {
        alert('Não há mais amigos a serem sorteados !');
        //resultado = document.getElementById('resultado');
        //resultado.innerHTML = "Não há mais amigos a serem sorteados!";
    }else{

    limparCampo('#listaAmigos', 'elemento');

    // o numero limite diferente do jogo numero secreto que é fixo tem seu tamanho variante de acordo com a entrada de amigos no input
    let numeroLimite = amigosLista.length;

    // primeiro testei com parseInt e vi bons resultados
    //let amigoEscolhido = parseInt(Math.random() * numeroLimite);
    
    // mas segundo a documentação para o caso do amigo secreto o Math floor respeita melhor os limites do array
    let amigoEscolhido = Math.floor(Math.random() * numeroLimite);


    resultado = document.getElementById('resultado');
    amigoSortudo = amigosLista[amigoEscolhido];

    resultado.innerHTML = `Amigo Sorteado: ${amigoSortudo}`;


    // eu tentei com pop mas descobri que ele só remove em formato de pilha, o ultimo elemento inserido
    //amigosLista.pop(amigosLista[amigoEscolhido]);

    //  a função splice remove o item especifico na array
    amigosLista.splice(amigoEscolhido, 1);
}
}