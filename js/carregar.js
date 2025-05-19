 export default function carregar() {

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('#json-container')
            
            data.map(dados => {
                const card = document.createElement('div')
                card.classList.add('card')

                const cardImg = document.createElement('div')
                cardImg.classList.add('card-img')

                const cardImgImagem = document.createElement('div')
                cardImgImagem.classList.add('card-img-imagem')

                const img = document.createElement('img')
                img.src = dados.logo
                img.alt = dados.name

                const cardImgDev = document.createElement('div')
                cardImgDev.classList.add('card-img-dev')

                const titulo = document.createElement('h3')
                titulo.textContent = dados.name

                const paragraph = document.createElement('p')
                paragraph.textContent = dados.description

                const cardButton = document.createElement('div')
                cardButton.classList.add('card-button')

                const cardButtonButton = document.createElement('div')
                cardButtonButton.classList.add('card-button-button')

                const buttonCard = document.createElement('button')

                const cardButtonH2 = document.createElement('h2')
                cardButtonH2.textContent = 'Remove'
                cardButtonH2.classList.add('card-button-button')

                const cardButtonLabel = document.createElement('div')
                cardButtonLabel.classList.add('card-button-label')

                const inputCnk = document.createElement('input')
                inputCnk.id = 'chk'
                inputCnk.classList.add('chk')

                const labelSwitch = document.createElement('label')
                labelSwitch.classList.add('switch')
                labelSwitch.classList.add('chk')
                
                const spanSlider = document.createElement('span')
                spanSlider.classList.add('slider')

                cardImg.appendChild(cardImgImagem)
                cardImgImagem.appendChild(img)
                cardImg.appendChild(cardImgDev)
                cardImgDev.appendChild(titulo)
                cardImgDev.appendChild(paragraph)

                labelSwitch.appendChild(spanSlider)
                cardButtonLabel.appendChild(labelSwitch)
                cardButtonLabel.appendChild(inputCnk)

                buttonCard.appendChild(cardButtonH2)
                cardButtonButton.appendChild(buttonCard)
                
                cardButton.appendChild(cardButtonButton)
                cardButton.appendChild(cardButtonLabel)

                card.appendChild(cardImg)
                card.appendChild(cardButton)
                
                container.appendChild(card)

            })
        })
}
