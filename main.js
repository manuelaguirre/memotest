
let memotest = {};
memotest.deck = ['carta01', 'carta01', 'carta02', 'carta02', 'carta03', 'carta03', 'carta04', 'carta04', 'carta05', 'carta05', 'carta06', 'carta06', 'carta07', 'carta07',
    'carta08', 'carta08']

function shuffleDeck(deck) {
    for (let index = 1; index < deck.length; index++) {
        
        let randomSmallerIndex = Math.floor((Math.random() * index));
        let b = deck[index];
        deck[index] = deck[randomSmallerIndex];
        deck[randomSmallerIndex] = b;
    }
}


function dealCards() {

}





function manejarRonda() {

}


function mostrarCarta() {

}

function borrarCarta() {

}

function bloquearInputUsuario() {

}

function ocultarCarta() {

}










