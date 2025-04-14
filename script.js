function carregar() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('#json-container')
            

            data.map(dados => {
                const card = document.createElement('div')
                card.classList.add('card')

                const img = document.createElement('img')
                img.src = dados.logo
                img.alt = dados.name

                const titulo = document.createElement('h3')
                titulo.textContent = dados.description

                card.appendChild(img)
                card.appendChild(titulo)
                container.appendChild(card)

            })
        })
}

carregar()