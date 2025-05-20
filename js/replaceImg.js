export default function replaceImg() {

}

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
            fundo.classList.toggle('active')
            button.classList.add('active')
        } else {
            imagem.src = imagemOriginal;
        }
    });

})

   