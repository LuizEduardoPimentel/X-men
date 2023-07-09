const personagens = document.querySelectorAll('.personagem');

//passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        if(window.innerWidth < 450){
            window.scrollTo({top:0 , behavior:"smooth"})
        }
        //remover personagem não selecionado
        RemoverPersonagemNaoSelecionado();

        personagem.classList.add('selecionado');

        //OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        //passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        const imgPersonagemGrande = document.querySelector('.personagem-grande');

        //passo 2 - alterar a imagem do personagem grande
        AlterarImagem(personagem, imgPersonagemGrande);

        //passo 3 - alterar o nome do personagem 
        AlterarNome(personagem);

        //passo 4 - alterar a descrição do personage
        DescricaoPersonagem(personagem);

    })
})



function RemoverPersonagemNaoSelecionado() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

function AlterarImagem(personagem, imgPersonagemGrande) {
    const idPersonagem = personagem.attributes.id.value;

    imgPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function AlterarNome(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-nome');
}

function DescricaoPersonagem(personagem) {
    const descriçãoPersonagem = document.getElementById('descricao-personagem');
    descriçãoPersonagem.innerText = personagem.getAttribute('data-description');
}

