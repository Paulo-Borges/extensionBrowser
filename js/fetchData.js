export default function extract() {

    function fetchUsers() {
      fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('#json-container')
            
            data.map(item => {
               const itemDiv = document.createElement('div');
               itemDiv.classList.add('fetchCard')
               itemDiv.innerHTML = `
               <div class="fetchCardImg">
               <img src="${item.logo}" alt="${item.name}">
               <div class="fetchCardTitle limited-text">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                </div>
                </div>
                <div class="fetchCardButton">
                <button id="remove">remove</button>
                <div class="card-button-label">
                 <input type="checkbox" id="chk" class="chk" />
                 <label for="chk" class="switch" class="chk">
                 <span class="slider"></span>
                 </label>
                </div>
                </div>
            `;
            container.appendChild(itemDiv);

               

            })
        })
}
 fetchUsers()

//  const remove = document.querySelector('remove')
//   console.log(remove)

  

//     remove.addEventListener('click', filterFetch)

//  function filterFetch(event) {
// event.preventDefault()
//   console.log(event)
  
  
//  }
} 

