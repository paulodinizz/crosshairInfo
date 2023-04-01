let cards =document.querySelector('.cards')
const searchBar = document.querySelector('[data-search]')

let content = [];

searchBar.addEventListener('input', (e) =>{
    const value = e.target.value.toLowerCase()

    content.forEach(player =>{
        const isVisible = player.nickname.toLowerCase().includes(value) || player.team.toLowerCase().includes(value)
        player.element.classList.toggle("hide", !isVisible)
    })
})

fetch('assets/json/players.json')
.then(response => response.json())
.then(data => {

    const shuffledData = shuffle(data);
    shuffledData.forEach((player, index) =>{

        let card = document.createElement('div')
        card.classList.add('card')
    
        cards.appendChild(card)
    
        card.innerHTML = `
        <span class="playerName">${player.nickname}</span>
        <a href="page/index.html?nickname=${player.nickname}">
        <img class="team" src="assets/images/team/${player.teamIcon}.png" alt="">
        <img class="player" src="assets/images/players/${player.profilePic}.png" alt="">
        <div class="cardBody">
            <div class="contentCard">
                <img src="assets/images/country/${player.nationalityIcon}.png" alt="">
                <div class="contentInfoCard">
                    <h1 class="cardTitle">${player.nickname}</h1>
                    <p class="cardSubtitle">${player.name}</p>
                    <div class="cardInfo">
                        <p><strong>Nationality:</strong> ${player.nationality}</p>
                        <p><strong>Born:</strong> ${player.born}</p>
                        <p><strong>Team:</strong> ${player.team}</p>
                    </div>
                </div>
            </div>
        </div>
        </a>
        `;
        
        VanillaTilt.init(card, {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 0.8,
        });
        
        content.push({nickname: player.nickname, team: player.team, element: card})

    });
});

function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}