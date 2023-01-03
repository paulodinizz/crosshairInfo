let cards =document.querySelector('.cards')
const searchBar = document.querySelector('[data-search]')

let content = []

searchBar.addEventListener('input', (e) =>{
    const value = e.target.value.toLowerCase()
    console.log(content)
    content.forEach(player =>{
        const isVisible = player.nickname.toLowerCase().includes(value) || player.team.toLowerCase().includes(value)
        player.element.classList.toggle("hide", !isVisible)
    })
})
fetch('../assets/json/streamers.json')
.then(response => response.json())
.then(data => content = data.map((player, indice) =>{

    let card = document.createElement('div')
    card.classList.add('card')

    cards.appendChild(card)

    card.innerHTML = `
    <span class="playerName">${player.nickname}</span>
    <a href="../${player.settings}/${player.settings}.html">
    <img class="team" src="../assets/images/team/${player.teamIcon}.png" alt="">
    <img class="player" src="../assets/images/streamers/${player.profilePic}.png" alt="">
    <div class="cardBody">
        <div class="contentCard">
            <img src="../assets/images/country/${player.nationalityIcon}.png" alt="">
            <div class="contentInfoCard">
                <h1 class="cardTitle">${player.nickname}</h1>
                <p class="cardSubtitle">${player.name}</p>
                <div class="cardInfo">
                    <p><strong>Nationality:</strong> ${player.nationality}</p>
                    <p><strong>Born:</strong> ${player.born}</p>
                    <p><strong>Streamer At:</strong> ${player.team}</p>
                </div>
            </div>
        </div>
    </div>
    </a>
    `
    VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.8,
    });
    return {nickname: player.nickname, team: player.team, element: card}
}))