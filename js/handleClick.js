export default function handleClick() {

}

const all = document.querySelector('[data-todos]')
const active = document.querySelector('[data-ativo]')
const inativo = document.querySelector('[data-inativos]')
console.log(all, active, inativo)

all.addEventListener('click', click)
active.addEventListener('click', click)
inativo.addEventListener('click', click)

function click(event) {
    event.preventDefault()
    all.classList.add('active')
    all.classList.remove('choice-button')
    active.classList.add('active')
    active.classList.remove('choice-button')
    inativo.classList.add('active')
    inativo.classList.remove('choice-button')
    console.log(event)

}