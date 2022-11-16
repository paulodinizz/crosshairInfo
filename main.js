let cards =document.querySelector('.cards')

fetch('assets/json/players.json')
.then(response => response.json())
.then(data => data.forEach((player, indice) =>{

    let card = document.createElement('div')
    card.classList.add('card')

    cards.appendChild(card)

    card.innerHTML = `
    <a href="${player.settings}/${player.settings}">
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
    `
    VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 400,
        scale: 1.1,
        glare: true,
        "max-glare": 0.8,
    });
}))