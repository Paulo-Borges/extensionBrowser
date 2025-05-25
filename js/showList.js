export default function showList() {

    function showActiveItems() {
    const data = fetch('data.json')
    const activeItems = data.filter(item => item.isActive);
    const outputDiv = document.getElementById('json-container'); // Crie uma div com id="output" no seu HTML

    outputDiv.innerHTML = ''; // Limpa o conteúdo anterior

    if (activeItems.length > 0) {
        activeItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <img src="${item.logo}" alt="${item.name} logo" width="50">
                <hr>
            `;
            outputDiv.appendChild(itemDiv);
        });
    } else {
        outputDiv.innerHTML = '<p>Nenhum item ativo encontrado.</p>';
    }
}
showActiveItems()
    
}


