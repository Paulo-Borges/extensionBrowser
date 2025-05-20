export default function replaceImg() {

}

document.addEventListener('DOMContentLoaded', function() {
   const botao = document.querySelector('[data-fetch]')
   const imagem = document.querySelector('[data-troca]')
   const imagemOriginal = './assets/images/icon-moon.svg'
   const novaImagem = './assets/images/icon-sun.svg'

   botao.addEventListener('click', function() {
    if (imagem.src = imagemOriginal) {
        imagem.src = novaImagem
    } else if (imagem.src = novaImagem){
        imagem.src = imagemOriginal
    } else {
        imagem.src = imagemOriginal
    }
   })

})

   