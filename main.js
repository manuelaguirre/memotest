
let memotest = {};
memotest.deck = ['carta01', 'carta01', 'carta02', 'carta02', 'carta03', 'carta03', 'carta04', 'carta04', 'carta05', 'carta05', 'carta06', 'carta06', 'carta07', 'carta07',
    'carta08', 'carta08']

let diccionarioImagenes = {"carta01":"img/200px-Cristinakirchnermensaje2010.jpg",
"carta02": "img/220px-Eduardo_duhalde_presidente.jpg",
"carta03": "img/220px-Mauricio_Macri_2016.jpg",
"carta04":"img/220px-Raúl_Alfonsin.jpg",
"carta05":"img/250px-Fernando_de_la_Rúa_con_bastón_y_banda_de_presidente.jpg",
"carta06":"img/250px-Menem_con_banda_presidencial.jpg",
"carta07":"img/270px-Alberto_fernandez_presidente_(cropped).jpg",
"carta08":"img/Presidente_Nestor_Kirchner_(cropped).jpg"};

function shuffleDeck(deck) {

    for (let index = deck.length - 1; index > 0; index--) {

        let randomIndex = Math.floor((Math.random() * (index + 1)));

        let b = deck[randomIndex];
        deck[randomIndex] = deck[index];
        deck[index] = b;

    }
}

function repartirMazo(deck, $listaCuadros){
    //aquí se requiere que el mazo y la lista de los cuadros tengan el mismo tamaño
    shuffleDeck(deck);
    for (let index = 0; index < $listaCuadros.length; index++) {
        $listaCuadros[index].setAttribute("data-pattern", deck[index]);
    
    }





}

let playGame = false;

let $listaCuadros = document.querySelectorAll(".cuadro")

repartirMazo(memotest.deck, $listaCuadros );

document.querySelectorAll('.cuadro').forEach(function($cuadro){
    $cuadro.onclick = manejarInputUsuario;
    
});


function manejarInputUsuario(e) {

    let $carta = e.currentTarget;
    /*if (!estaBocaAbajo($carta)) {
        return
    } else {
        mostrarCarta($carta);
    }
*/
    mostrarCarta($carta);
    $cartasDescubiertas = document.querySelectorAll(".flipped");

    if ($cartasDescubiertas.length == 2) {

        comprobarMatch($cartasDescubiertas)



    }


}





function comprobarMatch(nodeList) {

    let esMatch = (nodeList[0]["data-pattern"] === nodeList[1]["data-pattern"]);

    return esMatch;


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


function estaBocaAbajo($carta) {
    if ($carta.classList.contains("flipped")) {
        return false;
    } else
        return true;

}








