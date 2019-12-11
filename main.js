
let memotest = {};
memotest.deck = ['carta01', 'carta01', 'carta02', 'carta02', 'carta03', 'carta03', 'carta04', 'carta04', 'carta05', 'carta05', 'carta06', 'carta06', 'carta07', 'carta07',
    'carta08', 'carta08']

function shuffleDeck(deck) {
    
    for (let index = deck.length - 1; index > 0; index--) {
        
        let randomIndex = Math.floor((Math.random() * (index + 1)));

        let b = deck[randomIndex];
        deck[randomIndex] = deck[index];
        deck[index] = b;

    }
}

let playGame = false;


function manejarInputUsuario(e) {
    let $carta = event.target;
    let $cantidadReversas = document.querySelectorAll(".flipped").length;

    if ($carta.classList.match("flipped")){
        return false;
    }
    
    if  (numberFlipped)



function dealCards() {

}





function manejarRonda() {

}




function borrarCarta() {

}

function bloquearInputUsuario() {

}

function mostrarCarta($carta) {
    $carta.classList.add('flipped');
}

function ocultarCarta($carta) {
    $carta.classList.remove('flipped');
}


function estaBocaAbajo($carta){
    if ($carta.classList.match("flipped")){
        return false;
    }else
    return true;

}








