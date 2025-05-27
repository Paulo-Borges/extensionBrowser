export default function handleClick() {

    const all = document.querySelector('[data-todos]')
    const active = document.querySelector('[data-ativo]')
    const inativo = document.querySelector('[data-inativos]')
    console.log(all, active, inativo)

    all.addEventListener('click', click)
    active.addEventListener('click', click)
    inativo.addEventListener('click', click)

    function click(event) {
        event.preventDefault()
        event.currentTarget.classList.toggle('active')
        event.currentTarget.classList.toggle('choice-button')
    
    }
}

