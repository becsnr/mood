const imagem = document.getElementById('imagem');
const botoes = document.querySelectorAll('#botoes button');

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const emocao = botao.dataset.emocao;
        const backCor = botao.dataset.cor;
        const imgPng = botao.dataset.img;

        document.body.style.backgroundColor = backCor;

        imagem.src = imgPng;
        imagem.style.filter = 'drop-shadow(0 10px 20px #0000005e)';

        console.log(emocao);
        console.log(backCor);
    })
});