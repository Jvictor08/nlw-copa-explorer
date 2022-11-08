function createGame (player1, hour, player2) {
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}">
    </li>
    
    `
}

let delay = -0.2;
function createCard(date, day, games) {
    delay = delay + 0.2
    return`    
    <div class="card" style="animation-delay:${delay}s">
    <h2>${date}<span>${day}</span></h2>
    <ul>
        ${games}
    </ul>
</div>`
}
   
document.querySelector(".cards").innerHTML=
    createCard("21/11", "quinta", createGame('brazil','13:00','serbia') + createGame('japan','16:00','colombia') + createGame('switzerland','18:00','cameroon')) +
    createCard("25/11","quinta",createGame('portugal','13:00','argentina') + createGame('brazil','16:00','southkorea') + createGame('serbia','18:00','japan')) +
    createCard("25/11","quinta",createGame('portugal','13:00','argentina') + createGame('brazil','16:00','southkorea') + createGame('serbia','18:00','japan'))

