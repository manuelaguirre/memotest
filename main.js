
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


let $containerJuego = document.querySelector("#juego");
let $mensajeFinal = document.querySelector("#fin-juego");
let $botonComenzarJuego = document.querySelector("#comenzar");
$botonComenzarJuego.onclick = function () {
    $containerJuego.classList.add("juego-activo");

}



let $listaCuadros = document.querySelectorAll(".cuadro");
repartirMazo(memotest.deck, $listaCuadros);
desbloquearInputUsuario();
let turnos = 0;

function manejarInputUsuario(e) {

    let $carta = e.currentTarget;
    if (!estaBocaAbajo($carta)) {
        return
    } else {
        mostrarCarta($carta);

    }
    $cartasDescubiertas = document.querySelectorAll(".flipped");
    if ($cartasDescubiertas.length == 2) {
        bloquearInputUsuario();
        if (esMatch($cartasDescubiertas)) {
            setTimeout(function () {
                turnos++;
                $cartasDescubiertas.forEach(element => {
                    borrarCarta(element);
                    desbloquearInputUsuario();
                    let cantidadCartasResueltas = document.querySelectorAll(".solved").length;
                    if (cantidadCartasResueltas === 16) {
                        terminarJuego();

                    };
                })
            }, 1000);
        } else {
            setTimeout(function () {
                turnos++;
                $cartasDescubiertas.forEach(element => {
                    ocultarCarta(element);
                    desbloquearInputUsuario();
                })
            }, 1000);
        }




    }
}



function repartirMazo(deck, $listaCuadros) {
    //aquí se requiere que el mazo y la lista de los cuadros tengan el mismo tamaño
    shuffleDeck(deck);
    for (let index = 0; index < $listaCuadros.length; index++) {
        $listaCuadros[index].setAttribute("data-pattern", deck[index]);
    }
}

function esMatch(nodeList) {
    let esMatch = (nodeList[0].dataset.pattern === nodeList[1].dataset.pattern);
    return esMatch;
}

function borrarCarta($carta) {
    ocultarCarta($carta);
    $carta.classList.add("solved");
}


function desbloquearInputUsuario() {
    document.querySelectorAll('.cuadro').forEach(function ($cuadro) {
        $cuadro.onclick = manejarInputUsuario;
    });
}

function bloquearInputUsuario() {
    document.querySelectorAll('.cuadro').forEach(function ($cuadro) {
        $cuadro.onclick = function () { };
    });
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

function terminarJuego() {
    ocultarTablero();
    mostrarMensajeFinal();
}

function ocultarTablero() {
    $containerJuego.style.visibility = "hidden";
}

function mostrarMensajeFinal() {
    $cantidadTurnos = document.querySelector("strong");
    $cantidadTurnos.innerText = String(turnos);
    $mensajeFinal.style.visibility = "visible";

}








