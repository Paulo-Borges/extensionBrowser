export default function nightDay() {

}


// --------------X ---GOSTEI ATE O NATAL -----X----------
// const agora = new Date()
// const futuro = new Date('Dec 24 2025 23:59')

// function transformarDias(tempo) {
//     return tempo / (24 * 60 * 60 * 1000)
// }
// const diasAgora = transformarDias(Math.floor(agora.getTime()))
// const diasFuturo = transformarDias(Math.floor(futuro.getTime()))

// console.log(Math.floor(diasFuturo - diasAgora))


// --------------X ---outro trabalho -----X----------

// const funcionamento = document.querySelector('[data-semana]')
// const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
// const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)

// const dataAgora = new Date()
// const diaAgora = dataAgora.getDay()
// const horarioAgora = dataAgora.getHours()

// const semanaAberto = diasSemana.indexOf(diaAgora) !== -1

// const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]) 

// if(semanaAberto && horarioAberto) {
//     funcionamento.classList.add('aberto')
// }

// --------------X ---NIGHT DAY -----X----------
const agora = new Date()
console.log(agora)
const horarioAgora = agora.getHours()
console.log(horarioAgora)
const imagem = document.querySelector('[data-troca]')
console.log(imagem)

 if(horarioAgora >= 18) {
    // imagem.appendChild()
    
}

