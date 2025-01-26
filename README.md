# Amigo Secreto Challenge
![contém um titulo escrito Amigo Secreto e uma pessoa utilizando um dispositivo multimidia, arte de Alura LATAM](https://github.com/user-attachments/assets/a03a7fdc-4c49-4bde-90fb-73a178b28479)

Arte obtida de Alura LATAM

![Badge em Desenvolvimento Concluído](https://img.shields.io/badge/status-concluido-red)

# Teste Agora
[Clique aqui para jogar o jogo do Amigo Secreto !](https://gtomazini.github.io/challenge-amigo-secreto)
# 📁 Acesso ao projeto

Você pode [clicar aqui para baixar o código fonte via zip](https://github.com/Gtomazini/challenge-amigo-secreto/archive/refs/heads/main.zip) ou usar git clone no seguinte endereço git@github.com:Gtomazini/challenge-amigo-secreto.git

# 🛠️ Abrir e rodar o projeto

O código pode ser aberto diretamente após extrar ou clonar o repositório, é necessário apenas abrir o HTML e para editar o código qualquer editor de texto é compatível.

# Manipulação por ID no document.querySelector
Manipulação de elementos HTML para evitar generalizar o tipo utilizando id no document.querySelector. Consultado na seguinte documentação recomendada pelo curso da Alura:
https://www.w3schools.com/jsref/met_document_queryselector.asp

# adicionarAmigo()
É a função responsável pelo input, ela trata casos de entrada vazia e adiciona na lista usando um .push da função amigoInserir(). É acionada ao clicar no botão adicionar.

![um campo input escrito Digite um nome e um botão Adicione](https://github.com/user-attachments/assets/df446504-4781-4562-a397-21f325b12bb2)

Com o uso de document.querySelector(), é incrementado o item dentro do array em um elemnto <li> com o uso de um loop while.

# sortearAmigo()
Função para sorteador o amigo, ativada quando clicar no botão Sortear Amigo, usando a função Math.random para gerar um número aleatório e Math.floor para arredondar o número para um inteiro mais próximo. Este número gerado é a posição que será acessada na lista para trazer um nome na tela como pode ser vista na imagem:

![Um texto Amigo Sorteado: Gabriel e o botão Sortear Amigo](https://github.com/user-attachments/assets/c5456985-807e-4252-99c6-3c0be7246ae9)

No projeto foi preciso remover um indice aleatorio recorrente então consultando a documentação foi possível achar uma função que remove o indice especificado e a quantidade de itens apartir daquele índice para o nome não se repetir.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

Quando todos os amigos forem sorteados um alert será ativado informando.

