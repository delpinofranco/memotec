

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
let carta;
let tablero ;
let primeraCarta = null;
let segundaCarta = null;
let contador= 1;



function crearInterfaz() {


   
    tablero = document.createElement("div");
    tablero.classList.add("tablero");
    app.appendChild(tablero);

    const botonReiniciar = document.createElement("div");

    const informacionDeJuego = document.createElement("informacion");

    informacionDeJuego.classList.add("informacion");

    const jugador1 = document.createElement("div");

    const jugador2 = document.createElement("jugador2");
    insertarImagenes();

function insertarImagenes(){ 

while (contador <= 2) {
  contador += 1;
  imagenes.sort(() => Math.random() - 0.5);
  imagenes.forEach(imagen => {

    carta = document.createElement("div");

    carta.classList.add("cartas");

    const img = document.createElement("img");

    img.src = imagen;

    carta.appendChild(img);

    tablero.appendChild(carta);
    
});
  
}



};

}







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
        console.log("puntos para el 1")
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



crearInterfaz();

tablero.addEventListener("click", (e) => {

  const cartaClickeada = e.target.closest(".cartas");

  if (!cartaClickeada) 
    return;

  if (primeraCarta === null) {
    primeraCarta = cartaClickeada;
    primeraCarta.classList.toggle("mostrar");
  } else if (segundaCarta === null && cartaClickeada !== primeraCarta) {
    segundaCarta = cartaClickeada;
    segundaCarta.classList.toggle("mostrar");
    compararCartas();
  }
});