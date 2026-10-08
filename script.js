

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
let alternar = false;
let contenedorMarcador1;
let contenedorMarcador2;
let botonReiniciar;
let btnStart;
let usado = false;



function crearInterfaz() {


  tablero = crearContenedor("tablero");

  botonReiniciar = crearBtn("btn-reiniciar", "Reiniciar juego");

  btnStart = crearBtn("btn-start", "comenzar");



  contenedorMarcador1 = crearContenedor("score");

  contenedorMarcador2 = crearContenedor("score");


  jugador1 = crearLabel("Jugador 1:");

  contenedorMarcador1.classList.add("jugando");

  jugador2 = crearLabel("Jugador 2:");


  let marcador = crearContenedor("contenedor-marcador");

  puntos1 = crearSpan();

  puntos2 = crearSpan();



  insertarImagenes();
  app.appendChild(marcador);

  app.appendChild(tablero);

  marcador.appendChild(contenedorMarcador1);
  marcador.appendChild(botonReiniciar);
  marcador.appendChild(btnStart);
  marcador.appendChild(contenedorMarcador2);
  contenedorMarcador1.appendChild(jugador1);
  contenedorMarcador1.appendChild(puntos1);
  contenedorMarcador2.appendChild(jugador2);
  contenedorMarcador2.appendChild(puntos2);


}

function crearSpan() {
  let puntos = document.createElement("span");
  puntos.textContent = "";
  return puntos

}

function insertarImagenes() {

  while (contador <= 2) {

    contador += 1;

    imagenes.sort(() => Math.random() - 0.5);

    imagenes.forEach(imagen => {

      carta = crearContenedor("cartas");

      let atras = crearContenedor("atras");

      let frente = crearContenedor("frente");




      let img = document.createElement("img");
      img.src = imagen;
      atras.appendChild(img);
      carta.appendChild(frente);
      carta.appendChild(atras);
      tablero.appendChild(carta);


    });

  }
  contador = 1;


};

function crearLabel(textContent) {

  const label = document.createElement("label");


  label.textContent = textContent;

  return label;
};

function OcultarmostrarCartas(clase) {
  for (const carta of tablero.children) {
    console.log("ddddddd");
    carta.classList.toggle(clase);
  }
};

function ocultarCartas() {

  for (const carta of tablero.children) {

    carta.classList.add("girar");
  }
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

      alternar = true;

    }, 2000)


  }
  else {

    setTimeout(() => {

      primeraCarta.classList.remove("girar");

      segundaCarta.classList.remove("girar");

      primeraCarta = null;

      segundaCarta = null;

      alternar = false;

    }, 2000);

  }


};

function crearContenedor(clase) {

  const contenedor = document.createElement("div");

  contenedor.classList.add(clase);

  return contenedor;
};

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

};

function verificarGanador(puntaje1, puntaje2) {

  if (puntaje1 + puntaje2 === 10) {

    if (puntaje1 > puntaje2) {

      console.log("ganador juagador 1");
    }
    else if (puntaje1 > puntaje2) {

      console.log("ganador juagador 2");

    }
    else {

      console.log("empate");
    }

  }
}

function alternarJugador() {


  if (alternar === false) {

    if (jugadorActual === 1) {

      jugadorActual = 2;

      contenedorMarcador1.classList.remove("jugando");

      contenedorMarcador2.classList.add("jugando");

    }
    else {
      jugadorActual = 1;

      contenedorMarcador1.classList.add("jugando");

      contenedorMarcador2.classList.remove("jugando");
    }

  }

};

function crearBtn(clase, txtcontent) {

  let boton = document.createElement("button");

  boton.classList.add(clase);

  boton.textContent = txtcontent;

  return boton;
};

function reinicioDeVariables() {

  puntosJugador1 = 0;
  puntosJugador2 = 0;

  puntos1.textContent = puntosJugador1;
  puntos2.textContent = puntosJugador2;
  primeraCarta = null;
  segundaCarta = null;

  jugadorActual = 1;
  alternar = false;

  usado = false;
};




// aquí se crea la interfaz y comienza la ejecución de eventos

crearInterfaz();

tablero.addEventListener("click", (e) => {

  const cartaClickeada = e.target.closest(".cartas");


  if (!cartaClickeada)
    return;

  if (primeraCarta === null) {

    primeraCarta = cartaClickeada;

    primeraCarta.classList.add("girar");

  } else if (segundaCarta === null && cartaClickeada !== primeraCarta) {

    segundaCarta = cartaClickeada;

    segundaCarta.classList.add("girar");

    compararCartas();

    setTimeout(() => {

      alternarJugador();

      verificarGanador(puntosJugador1, puntosJugador2);
    }, 2000)
  }


});





botonReiniciar.addEventListener("click", () => {


  reinicioDeVariables();

  if (tablero.children.length > 0) {
    tablero.innerHTML = "";

  }
  usado = false;
  btnStart.classList.remove("btn-usado")
  insertarImagenes();





});



btnStart.addEventListener("click", () => {


  if (usado) {
    return;
  }

  usado = true;
  btnStart.classList.add("btn-usado")
  OcultarmostrarCartas("girar");

  setTimeout(() => {
    OcultarmostrarCartas("girar");

  }, 2000);
})