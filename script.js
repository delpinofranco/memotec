

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
let tablero;
let primeraCarta = null;
let segundaCarta = null;
let contador = 1;
let jugador1;
let jugador2;


function crearInterfaz() {


  tablero = document.createElement("div");
  tablero.classList.add("tablero");


  const botonReiniciar = crearContenedor("btn-reiniciar");

 

let contenedorMarcador1 = crearContenedor("score");

let contenedorMarcador2 =  crearContenedor("score");
  

const jugador1 = crearLabel("Jugador 1:");
const jugador2 = crearLabel("Jugador 2:");





  const marcador = document.createElement("div");
  marcador.classList.add("contenedor-marcador")

  const puntos1 = document.createElement("span");
 puntos1.textContent = " 0";

 const puntos2 = document.createElement("span");
 puntos2.textContent = " 0";


  insertarImagenes();
  app.appendChild(marcador);
  
  app.appendChild(tablero);
  
  marcador.appendChild(contenedorMarcador1);
  marcador.appendChild(contenedorMarcador2);
  contenedorMarcador1.appendChild(jugador1);
  contenedorMarcador1.appendChild(puntos1);
  contenedorMarcador2.appendChild(jugador2);
  contenedorMarcador2.appendChild(puntos2);










  function crearContenedor(clase) {
    const contenedor = document.createElement("div");

    contenedor.classList.add(clase);

    return contenedor;
}

  function insertarImagenes() {

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


function crearLabel(textContent) {

    const label = document.createElement("label");

    label.textContent = textContent;

    return label;
}


function mostrarCartas() {



};


function compararCartas() {
  const img1 = primeraCarta.querySelector("img");
  const img2 = segundaCarta.querySelector("img");

  if (img1.src === img2.src) {
    retirarCartas();
    asignarPuntos();

  }
  else {
    setTimeout(() => {

    img1.style.display = "none";
    img2.style.display = "none";

    alternarJugador();

}, 4000);
    alternarJugador();
  }

  primeraCarta = null;
  segundaCarta = null;
}


function retirarCartas() {
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


function alternarJugador() {

  if (jugadorActual === 1) {
    jugadorActual = 2;

  }
  else {
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