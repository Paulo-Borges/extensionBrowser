export default function replaceImg() {
document.addEventListener('DOMContentLoaded', function() {
   const botao = document.querySelector('[data-fetch]')
   const imagem = document.querySelector('[data-troca]')
   const fundo = document.querySelector('[data-base]')
   const button = document.querySelector('[data-fetch]')
   const imagemOriginal = './assets/images/icon-moon.svg'
   const novaImagem = './assets/images/icon-sun.svg'

botao.addEventListener('click', function() {
        if (imagem.getAttribute('src') === imagemOriginal) {
            imagem.src = novaImagem;
            fundo.classList.toggle('activeGroup')
            button.classList.add('activeGroup')
        } else {
            imagem.src = imagemOriginal;
            button.classList.remove('activeGroup')
        }
    });

})
}



   