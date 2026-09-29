

const imagenes = [
  'imagenes/images.jpeg',
  'imagenes/images (2).jpeg',
  'imagenes/images (3).jpeg',
  'imagenes/images (4).jpeg',
  'imagenes/images (5).jpeg',
  'imagenes/images (6).jpeg',
  'imagenes/images (7).jpeg',
  'imagenes/images (8).jpeg',
  'imagenes/images (9).jpeg',
  'imagenes/images (10).jpeg'
];





const app = document.getElementById("app");

let jugadorActual = 1;

let puntosJugador1 = 0;
let puntosJugador2 = 0;


let primeraCarta = null;
let segundaCarta = null;
imagenes.sort(() => Math.random() - 0.5);

function crearInterfaz() {


    const tablero = document.createElement("tablero");

    tablero.classList.add("tablero");


    const botonReiniciar = document.createElement("botonReiniciar");

    const informacionDeJuego = document.createElement("informacion");

    informacionDeJuego.classList.add("informacion");

    const jugador1 = document.createElement("jugador1");

    const jugador2 = document.createElement("jugador2");


function insertarImagenes(){ 

imagenes.forEach(imagen => {

    const carta = document.createElement("cartas");

    carta.classList.add("cartas");

    const img = document.createElement("img");

    img.src = imagen;

    carta.appendChild(img);

    tablero.appendChild(carta);
    
});

};

}


tablero.addEventListener("click", (e) => {

  const cartaClickeada = e.target.closest(".carta");

  if (!cartaClickeada) 
    return;

  if (primeraCarta === null) {
    primeraCarta = cartaClickeada;
  } else if (segundaCarta === nul && cartaClickeada !== primeraCarta) {
    segundaCarta = cartaClickeada;
    compararCartas();
  }
});




function mostrarCartas () {



};




function compararCartas() {
  const img1 = primeraCarta.querySelector("img").src;
  const img2 = segundaCarta.querySelector("img").src;

  if (img1 === img2) {
    retirarCartas();
    asignarPuntos();
    
  } 
  else{
    alternarJugador();
  }

  primeraCarta = null;
  segundaCarta = null;
}



function retirarCartas () {
    primeraCarta.style.visibility = "hidden";
  segundaCarta.style.visibility = "hidden";
  

};

function asignarPuntos() {

    if (jugadorActual === 1) {
        puntosJugador1++;
    }
    else {
        puntosJugador2++;
    }

}


function alternarJugador(){

if(jugadorActual === 1){
    jugadorActual = 2;

}
else{
    jugadorActual = 1;
}


};