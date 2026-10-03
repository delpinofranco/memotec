

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
let puntos1 = 0;
let puntos2 = 0;
let jugador1;
let jugador2;
function crearInterfaz() {


  tablero = document.createElement("div");
  tablero.classList.add("tablero");


  const botonReiniciar = crearContenedor("btn-reiniciar");


  let contenedorMarcador1 = crearContenedor("score");

  let contenedorMarcador2 = crearContenedor("score");


  jugador1 = crearLabel("Jugador 1:", "puntaje");
  jugador2 = crearLabel("Jugador 2:", "puntaje");


  const marcador = crearContenedor("contenedor-marcador");


  puntos1 = document.createElement("span");
  puntos1.textContent = "";

  puntos2 = document.createElement("span");
  puntos2.textContent = "";


  insertarImagenes();
  app.appendChild(marcador);

  app.appendChild(tablero);

  marcador.appendChild(contenedorMarcador1);
  marcador.appendChild(contenedorMarcador2);
  contenedorMarcador1.appendChild(jugador1);
  contenedorMarcador1.appendChild(puntos1);
  contenedorMarcador2.appendChild(jugador2);
  contenedorMarcador2.appendChild(puntos2);







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


function crearLabel(textContent, clase) {

  const label = document.createElement("label");
  label.classList.add(clase);

  label.textContent = textContent;

  return label;
}


function mostrarCartas() {



};


function compararCartas() {
  const img1 = primeraCarta.querySelector("img");
  const img2 = segundaCarta.querySelector("img");



  if (img1.src === img2.src) {

    setTimeout(() => {

      retirarCartas();
      asignarPuntos();
      primeraCarta = null;
      segundaCarta = null;


    }, 2000)


  }
  else {
    setTimeout(() => {

      primeraCarta.classList.remove("mostrar");
      segundaCarta.classList.remove("mostrar");
      primeraCarta = null;
      segundaCarta = null;

    }, 2000);

  }


}

function crearContenedor(clase) {
  const contenedor = document.createElement("div");

  contenedor.classList.add(clase);

  return contenedor;
}


function retirarCartas() {
  primeraCarta.style.visibility = "hidden";
  segundaCarta.style.visibility = "hidden";


};

function asignarPuntos() {

  if (jugadorActual === 1) {
    puntosJugador1++;
    puntos1.textContent = puntosJugador1;
    console.log("puntos para el 1")
  }
  else {
    puntosJugador2++;
    puntos2.textContent = puntosJugador2;
     console.log("puntos para el 2")
  }

}


function alternarJugador() {

  if (jugadorActual === 1) {
    jugadorActual = 2;
    jugador1.classList.remove("jugando");
    jugador2.classList.add("jugando");

  }
  else {
    jugadorActual = 1;

    jugador1.classList.add("jugando");
    jugador2.classList.remove("jugando");
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
    setTimeout(() => {
      alternarJugador();
    },2000)

  }
});