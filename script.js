let url = 'https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-e/players'
async function fetchAllPlayers() {
    // try {
        let response = await fetch(url);
        // console.log(response);
        let data = await response.json();
        // console.log(data);
        let allPlayers = data.data.players;
        console.log(allPlayers)

       const display = document.createElement("div");
        document.getElementById('root').appendChild(display);
        display.innerHTML = " "
        allPlayers.map((values)=>{
            const card = document.createElement("div");
            card.innerHTML=
            `
        <div class="cards">
            <img src=${values.imageUrl} alt=${values.name}/>
            <h2>Name: ${values.name}</h2>
            <h2>Breed: ${values.breed}</h2>
            <h2>Status: ${values.status}</h2>
            <h2>playerId: ${values.id}</h2>
            <button class="detail" data-id =${values.id}>Display SinglePlayer</button>

        </div>
            `
            display.appendChild(card);

            
        });

        const detail = document.querySelector(".detail");
        detail.addEventListener('click', handleClick);

        function handleClick(event) {
            // console.log(event.target.dataset.id);


            const display2 = document.createElement("div");
        document.getElementById('root2').appendChild(display2);
        // display2.innerHTML = " 
        // allPlayers.map((values.id)=>{
            const card2 = document.createElement("div");
            card2.innerHTML=    `
        <div class="cards2">
            <img src=${values.imageUrl} alt=${values.name}/>
            <h2>Name: ${values.name}</h2>
            <h2>Breed: ${values.breed}</h2>
            <h2>Status: ${values.status}</h2>
            <h2>playerId: ${values.id}</h2>
            
        </div>
            `
        
            display2.appendChild(card2);

        
        };
     }
     fetchAllPlayers();
//       console.log(values.id);
//       const playerId = event.target.dataset.id;

    