/*
quando clicar na seta pra avançar, 
temos que esconder todas as imagens e mostrar a próxima imagem

    assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens
    pra poder saber que agora eu vou mostrar a segunda imagem

    esconder todas as imagens
        pegar todas as imagens usando o DOM e remover a classe mostrar

    mostrar a próxima imagem
        pegar todas as imagens, descobrir qual é a próxima, e colocar a classe
        mostrar nela
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

/*
quando clicar na seta pra avançar, 
temos que esconder todas as imagens e mostrar a próxima imagem
*/

setaAvancar.addEventListener('click', function () {
    const totalDeImagens = imagensPainel.length - 1;
    if (imagemAtual === totalDeImagens) {
        return;
    }

    /*assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens
    pra poder saber que agora eu vou mostrar a segunda imagem
    */
    imagemAtual++;

    /*esconder todas as imagens
        pegar todas as imagens usando o DOM e remover a classe mostrar
    */
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    /*mostrar a próxima imagem
        pegar todas as imagens, descobrir qual é a próxima, e colocar a classe
        mostrar nela
    */

    imagensPainel[imagemAtual].classList.add('mostrar');
})

/*quando clicar na seta pra voltar, 
esconder todas as imagens e mostrar a imagem anterior*/
setaVoltar.addEventListener('click', function () {
    if (imagemAtual === 0) {
        return;
    }
    imagemAtual--;

    /*esconder todas as imagens
        pegar todas as imagens usando o DOM e remover a classe mostrar*/
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    /*mostrar a próxima imagem anterior
    pegar todas as imagens, descobrir qual é a anterior, e colocar a classe
    mostrar nela*/
    imagensPainel[imagemAtual].classList.add('mostrar');
})

