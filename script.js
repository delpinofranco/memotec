


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




function crearInterfaz() {



  let encabezado = crearContenedor("encabezado", "header");




  tablero = crearContenedor("tablero", "div");
  let adorno = crearContenedor("cartita", "div");
  let adorno1 = crearContenedor("cartita", "div");
  adorno.classList.add("cartita1");
  adorno1.classList.add("cartita2");




  let imagenAdorno = crearImagen(adorno, "imagenes/fondo_de _carta.jpg");
  let imagenAdorno2 = crearImagen(adorno1, "imagenes/fondo_de _carta.jpg");

  let contenedorAdorno = crearContenedor("contenedor-adorno", "div")
  contenedorAdorno.appendChild(adorno1);
  contenedorAdorno.appendChild(adorno);
  encabezado.appendChild(contenedorAdorno);

  let contenedorTitulo = crearContenedor("contenedor-titulo", "div");
  let titulo = document.createElement("h1");
  contenedorTitulo.appendChild(titulo)
  titulo.classList.add("titulo-juego");
  titulo.textContent = "Memotest"
  encabezado.appendChild(contenedorTitulo)
  app.appendChild(encabezado);

  let subTitulo = document.createElement("h2");
  subTitulo.classList.add("subtitulo-juego");
  subTitulo.textContent = "Encontra las imagenes iguales"
  contenedorTitulo.appendChild(subTitulo)




  seccionJugadores = crearContenedor("seccion-jugadores", "section");

  // contenedorJugador1 = crearContenedor("contenedor-jugador", "div");
  // let nombrejugado1 = crearSpan("nombre-jugador1")


  //sección jugador 2 
  //contenedor del jugador 2, contiene: icono, contenedor input jugador, contenedor jugador


  function crearJugador(numero) {
  let contenedorJugador = crearContenedor("contenedor-jugador" + numero  , "div");

    let imagenJugador = document.createElement("img");
    imagenJugador.classList.add("icono-usuario");
    imagenJugador.src = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/person-circle.svg";

    // contenedor que contiene : contenedor-label-span, input ingresar nombre y btn guardar 
    let contenedorInputNombre = crearContenedor("contenedor-input-jugador", "div");

    let btnGuardar = crearBtn("btn-guardar", "Guardar");

    let jugadorInput = document.createElement("input");
    jugadorInput.id = "input-jugador" + numero;

    jugadorInput.placeholder = "Ingresá tu nombre";




    // contiene el el label y el span
    let contenedorLabelSpan = crearContenedor("contenedor-label-span", "div");

    let label = crearLabel("nombre ingresado");

    let nombrejugador = crearSpan("nombre-jugador" + numero, "Jugador: " + numero);
    contenedorLabelSpan.appendChild(nombrejugador);
    contenedorLabelSpan.appendChild(label);



    // contiene: span y p
    let contenedorPuntaje = crearContenedor("contenedor-puntaje", "div");

    let puntaje = crearSpan("puntaje-jugador" + numero, "0");


    let textoPuntaje = document.createElement("p")
    textoPuntaje.append(" / 8");

    +


      contenedorPuntaje.appendChild(puntaje);
    contenedorPuntaje.appendChild(textoPuntaje);
    contenedorJugador.appendChild(imagenJugador);


    // contine el contenedor que tiene el label y el span
    contenedorInputNombre.appendChild(contenedorLabelSpan);

    //contenedor que contiene el input
    contenedorInputNombre.appendChild(jugadorInput);
    contenedorInputNombre.appendChild(btnGuardar);


    // es el contenedor principal de la informacion del jugador
    contenedorJugador.appendChild(contenedorInputNombre);
    contenedorJugador.appendChild(contenedorPuntaje)
    return contenedorJugador;
  }




 let contenedorJugador1 = crearJugador(1);
 let contenedorJugador2 = crearJugador(2);



  // seccionJugadores.appendChild(contenedorJugador2);
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




  // contenedorMarcador1 = crearContenedor("score", "div");

  // contenedorMarcador2 = crearContenedor("score", "div");


  // jugador1 = crearLabel("Jugador 1:");


  // jugador2 = crearLabel("Jugador 2:");


  // let marcador = crearContenedor("contenedor-marcador", "div");

  // puntos1 = crearSpan("puntaje");

  // puntos2 = crearSpan("puntaje");

  // let contenedorTablero;

  // contenedorTablero = crearContenedor("contenedor-botonera", "div");


  insertarImagenes();
  seccionTablero.appendChild(contenedorBotonera);
  seccionTablero.appendChild(tablero);
  seccionTablero.appendChild(contenedorReglas);


  app.appendChild(seccionTablero);

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

function crearSpan(clase, content = null) {
  let elemento = document.createElement("span");
  elemento.classList.add(clase)
  elemento.textContent = content;
  return elemento

}

function insertarImagenes() {

  while (contador <= 2) {

    contador += 1;

    imagenes.sort(() => Math.random() - 0.5);

    imagenes.forEach(imagen => {

      carta = crearContenedor("cartas", "div");

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

