

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
let imagen;
let contenedoReloj;
let reloj;
let seccionTablero;
let cronometro = 0;
let contenedorReglas;
let contenedorbotonera;
let seccionJugadores;
let contenedorJugador1;
let contenedorJugador2;
let encabezado;

function crearInterfaz() {





encabezado =crearContenedor("encabezado","header");
app.appendChild(encabezado)
  tablero = crearContenedor("tablero","div");

  seccionJugadores = crearContenedor("seccion-jugadores", "seccion");

  contenedorJugador1 = crearContenedor("contenedor-jugador","div");

  contenedorJugador2 = crearContenedor("contenedor-jugador","div");



  seccionJugadores.appendChild(contenedorJugador1);

  seccionJugadores.appendChild(contenedorJugador2);
  app.appendChild(seccionJugadores);

  seccionTablero = crearContenedor("seccion-tablero", "seccion");

  contenedorReglas = crearContenedor("reglas-juego", "article");

  contenedorBotonera = crearContenedor("contenedor-botonera", "div");









  // botonReiniciar = crearBtn("btn-reiniciar", "Reiniciar juego");

  // btnStart = crearBtn("btn-start", "comenzar");

  // contenedoReloj = crearContenedor("contenedor-reloj", "div");

  // reloj = crearLabel();

  // contenedoReloj.appendChild(reloj);




  contenedorMarcador1 = crearContenedor("score", "div");

  contenedorMarcador2 = crearContenedor("score", "div");


  jugador1 = crearLabel("Jugador 1:");


  jugador2 = crearLabel("Jugador 2:");


  // let marcador = crearContenedor("contenedor-marcador", "div");

  // puntos1 = crearSpan("puntaje");

  // puntos2 = crearSpan("puntaje");

  // let contenedorTablero;

  // contenedorTablero = crearContenedor("contenedor-botonera", "div");


  insertarImagenes();
  seccionTablero.appendChild(contenedorBotonera);
  seccionTablero.appendChild(tablero);
  seccionTablero.appendChild(contenedorReglas);
  
  // app.appendChild(contenedorTablero);
  app.appendChild(seccionTablero);
  // contenedorTablero.appendChild(marcador);
  // contenedorTablero.appendChild(contenedoReloj);


  // marcador.appendChild(contenedorMarcador1);
  // marcador.appendChild(botonReiniciar);
  // marcador.appendChild(btnStart);
  // marcador.appendChild(contenedorMarcador2);
  contenedorMarcador1.appendChild(jugador1);
  contenedorMarcador1.appendChild(puntos1);
  contenedorMarcador2.appendChild(jugador2);
  contenedorMarcador2.appendChild(puntos2);


}




function obtenerSegundos() {

  cronometro += 1
  reloj.textContent = cronometro;
  if (cronometro === 6) {
    alternarJugador();
    cronometro = 0;

  }
  if (usado) {
    setTimeout(obtenerSegundos, 1000);
  }
  else {
    reiniciarJugo();
  }




}

function crearSpan(clase) {
  let puntos = document.createElement("span");
  puntos.classList.add(clase)
  puntos.textContent = "";
  return puntos

}

function insertarImagenes() {

  while (contador <= 2) {

    contador += 1;

    imagenes.sort(() => Math.random() - 0.5);

    imagenes.forEach(imagen => {

      carta = crearContenedor("cartas","div");

      let atras = crearContenedor("atras", "div");

      let frente = crearContenedor("frente", "div");


      crearImagen(frente, 'imagenes/fondo_de _carta.jpg');
      crearImagen(atras, imagen);

      carta.appendChild(frente);
      carta.appendChild(atras);
      tablero.appendChild(carta);


    });

  }
  contador = 1;


};

function crearImagen(contenedor, img) {

  imagen = document.createElement("img");
  imagen.src = img;
  contenedor.appendChild(imagen);

}

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

  const img1 = primeraCarta.querySelector(".atras img");

  const img2 = segundaCarta.querySelector(".atras img");



  if (img1.src === img2.src) {

    console.log("lo rompi");
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
      alternarJugador();

      primeraCarta.classList.remove("girar");

      segundaCarta.classList.remove("girar");

      primeraCarta = null;

      segundaCarta = null;

      alternar = false;

    }, 2000);

  }


};

function crearContenedor(clase, etiqueta) {

  const contenedor = document.createElement(etiqueta);


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

      alert("¡Ganó el Jugador 1!");
    }
    else if (puntaje1 < puntaje2) {

      alert("¡Ganó el Jugador 2!");

    }
    else {

      alert("¡Empate!");
    }
    reiniciarJugo();

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
  cronometro = 0;
  reloj.textContent = cronometro;
  usado = false;
};

function reiniciarJugo() {

  reinicioDeVariables();

  if (tablero.children.length > 0) {
    tablero.innerHTML = "";

  }
  usado = false;
  btnStart.classList.remove("btn-usado")
  insertarImagenes();

};

function verificarCartasSeleccionadasDistintas(cartaClickeada) {

  if (!cartaClickeada)
    return;

  if (primeraCarta === null) {

    primeraCarta = cartaClickeada;

    primeraCarta.classList.add("girar");

  } else if (segundaCarta === null && cartaClickeada !== primeraCarta) {

    segundaCarta = cartaClickeada;

    segundaCarta.classList.add("girar");
    compararCartas();

  }

}


// aquí se crea la interfaz y comienza la ejecución de eventos

crearInterfaz();

tablero.addEventListener("click", (e) => {


  if (!usado) {
    return;
  }
  let cartaClickeada = e.target.closest(".cartas");

  verificarCartasSeleccionadasDistintas(cartaClickeada);


  setTimeout(() => {



    verificarGanador(puntosJugador1, puntosJugador2);
  }, 2000)
}
);

botonReiniciar.addEventListener("click", () => {

  reiniciarJugo();

});



btnStart.addEventListener("click", () => {

  contenedorMarcador1.classList.add("jugando");
  if (usado) {
    return;
  }

  usado = true;
  btnStart.classList.add("btn-usado")
  OcultarmostrarCartas("girar");

  setTimeout(() => {
    OcultarmostrarCartas("girar");
    obtenerSegundos();
  }, 2000);
})

