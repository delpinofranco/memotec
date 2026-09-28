

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

let primeraCarta = null;
let segundaCarta = null;

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


function elegirCartas () {

};

function compararCartas () {

};

function retirarCartas () {

};

function asignarPuntos () {

};

function verificarCantidadDeCartas() {

};

function alternarJugador(){

};