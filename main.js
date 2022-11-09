function toYellow(){
    let cleanclass = document.getElementById('corpo')
    let classe = cleanclass.classList.value
       if(cleanclass.classList != ''){
        cleanclass.classList.remove(`${classe}`)
    }
} 
    
function toBlue(){
    document.getElementById('corpo').classList.add("blue");
}

function toGreen(){
    document.getElementById('corpo').classList.add("green");
}

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
    createCard("21/11", "segunda", createGame('england','10:00','iran') + createGame('senegal','13:00','netherlands')) +
    createCard("22/11","terça",createGame('argentina','7:00','arab') + createGame('france','16:00','australia')) +
    createCard("23/11","quarta",createGame('germany','10:00','japan') + createGame('span','13:00','costarica') + createGame('belgium','16:00','canada'))+
    createCard("24/11","quinta",createGame('uruguay','10:00','southkorea') + createGame('portugal','13:00','ghana') + createGame('brazil','16:00','serbia'))+
    createCard("26/11","sábado",createGame('argentina','16:00','mexico')) +
    createCard("27/11","domingo",createGame('span','16:00','germany')) +
    createCard("28/11","segunda",createGame('brazil','13:00','switzerland') + createGame('portugal','16:00','uruguay'))+
    createCard("01/12","quinta",createGame('croatia','12:00','belgium') + createGame('japan','16:00','span') + createGame('costarica','16:00','germany'))+
    createCard("02/11","sexta",createGame('southkorea','12:00','portugal') + createGame('cameroon','16:00','brazil'))

