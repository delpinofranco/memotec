


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
let alternar = false;
let contenedorMarcador1;
let contenedorMarcador2;
let usado = false;
let imagen;
let contenedoReloj;
let seccionTablero;
let cronometro = 0;
let contenedorReglas;
let contenedorbotonera;
let seccionJugadores;
let contenedorJugador1;
let contenedorPalabraVs;
let encabezado 




function crearInterfaz() {
  encabezado = crearContenedor("encabezado", "header");

  tablero = crearContenedor("tablero", "div");
  let adorno = crearContenedor("cartita", "div");
  let adorno1 = crearContenedor("cartita", "div");
  adorno.classList.add("cartita1");
  adorno1.classList.add("cartita2");

  let imagenAdorno = crearImagen(adorno, "imagenes/fondo_de _carta.jpg");
  let imagenAdorno2 = crearImagen(adorno1, "imagenes/fondo_de _carta.jpg");

  let contenedorAdorno = crearContenedor("contenedor-adorno", "div");
  contenedorAdorno.appendChild(adorno1);
  contenedorAdorno.appendChild(adorno);
  encabezado.appendChild(contenedorAdorno);

  let contenedorTitulo = crearContenedor("contenedor-titulo", "div");
  let titulo = document.createElement("h1");
  contenedorTitulo.appendChild(titulo);
  titulo.classList.add("titulo-juego");
  titulo.textContent = "Memotest";
  encabezado.appendChild(contenedorTitulo);
  app.appendChild(encabezado);

  let subTitulo = document.createElement("h2");
  subTitulo.classList.add("subtitulo-juego");
  subTitulo.textContent = "Encontra las imagenes iguales";
  contenedorTitulo.appendChild(subTitulo);

  seccionJugadores = crearContenedor("seccion-jugadores", "section","seccion-jugadores");
  // seccionJugadores.id = "seccion-jugadores";

  contenedorPalabraVs = crearContenedor("contenedor-palabra-vs", "div");

  let palabraVs = document.createElement("h1");
  palabraVs.textContent = "VS";
  contenedorPalabraVs.appendChild(palabraVs);

  let contenedorJugador1 = crearJugador(1);
  let contenedorJugador2 = crearJugador(2);


  seccionTablero = crearContenedor("seccion-tablero", "seccion");
  // seccionJugadores.appendChild(contenedorJugador2);
  seccionTablero.appendChild(contenedorJugador1);
  seccionTablero.appendChild(contenedorJugador2);

  contenedorReglas = crearContenedor("reglas-juego", "article");

  contenedorBotonera = crearContenedor("contenedor-botonera", "div","contenedor-botonera");
  // contenedorBotonera.id = "contenedor-botonera";
  agregarElementosBotonera(contenedorBotonera);

  let pantallaVersus = crearContenedor("pantalla-versus", "div","contenedor-pantalla-versus");
  // pantallaVersus.id = "contenedor-pantalla-versus";

  let pantalla1 = crearPantallaVersus(pantallaVersus, 1, "", contenedorPalabraVs);
  let pantalla2 = crearPantallaVersus(pantallaVersus, 2, "", contenedorPalabraVs);

  seccionJugadores.appendChild(pantallaVersus);
app.appendChild(seccionJugadores);
  insertarImagenes();
  seccionTablero.appendChild(contenedorBotonera);
  seccionTablero.appendChild(tablero);
  seccionTablero.appendChild(contenedorReglas);

  app.appendChild(seccionTablero);

  
};

function agregarElementosBotonera(contenedor) {

  // Fila superior que contiene el tiempo y el botón comenzar
  let filaSuperior = crearContenedor("fila-superior", "div");

  // Contenedor del reloj
  let contenedorTiempo = crearContenedor("contenedor-tiempo", "div");
  let iconoReloj = crearSpan("icono-reloj", "⏱️");
  let infoTiempo = crearContenedor("info-tiempo", "div");

  let labelTiempo = document.createElement("span");
  labelTiempo.textContent = "Tiempo";
  labelTiempo.classList.add("label-tiempo");

  let reloj = crearSpan("display-reloj", "0");
  reloj.id = "reloj";

  infoTiempo.appendChild(labelTiempo);
  infoTiempo.appendChild(reloj);

  contenedorTiempo.appendChild(iconoReloj);
  contenedorTiempo.appendChild(infoTiempo);

  let btnConIconoStart = crearBtnConIcono("btn-start", "Comenzar", "icono-start", "▶","start");

  let btnConIconoReiniciar = crearBtnConIcono("btn-reiniciar", "Reiniciar", "icono-reiniciar", "🔄","reiniciar");

  filaSuperior.appendChild(contenedorTiempo);
  filaSuperior.appendChild(btnConIconoStart);

  // Agregar todo al contenedor principal pasado por parámetro
  contenedor.appendChild(filaSuperior);
  contenedor.appendChild(btnConIconoReiniciar);

}


function crearBtnConIcono(claseBtn, textoBtn, claseIcono, iconoContent,id) {

  let boton = crearBtn(claseBtn, textoBtn);
  boton.id = id

  let spanIcono = crearSpan(claseIcono, iconoContent);

  boton.appendChild(spanIcono);

  return boton;
};


function crearPantallaVersus(pantallaVersus, numero, inputJugador, contenedorPalabraVs) {

  let contenedorPuntaje = crearContenedor("contenedor-puntaje", "div","contenedor-puntaje"+numero);
  // contenedorPuntaje.id = "contenedor-puntaje"+numero
  let puntaje = crearSpan("puntaje-jugador" + numero, "0");
  puntaje.id = "puntaje"+numero;


  let textoPuntaje = document.createElement("p");
  textoPuntaje.textContent = " / 8";
  textoPuntaje.classList.add("jugador" + numero);

  let contenedorNombre = crearContenedor("contenedor-nombre", "div");

  let nombreJugador = crearSpan("nombre-jugador" + numero, inputJugador);
  nombreJugador.id = "nombre-jugador" + numero;

  let sumarPuntaje = crearContenedor("contador", "div");

  sumarPuntaje.appendChild(puntaje);
  sumarPuntaje.appendChild(textoPuntaje);

  contenedorNombre.appendChild(nombreJugador);

  pantallaVersus.appendChild(contenedorPalabraVs);

  contenedorPuntaje.appendChild(contenedorNombre);
  contenedorPuntaje.appendChild(sumarPuntaje);

  pantallaVersus.appendChild(contenedorPuntaje);
};

function crearJugador(numero) {

  let contenedorJugador = crearContenedor("contenedor-jugador" + numero, "div","contenedor-jugador" + numero);
  // contenedorJugador.id = "contenedor-jugador" + numero;

  let imagenJugador = document.createElement("img");
  imagenJugador.classList.add("icono-usuario");
  imagenJugador.src = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/person-circle.svg";

  // contenedor que contiene : contenedor-label-span, input ingresar nombre y btn guardar
  let contenedorInputNombre = crearContenedor("contenedor-input-jugador", "div");

  let textoFaltanDatos = document.createElement("p");
  textoFaltanDatos.textContent = "Ingrese un nombre";
  textoFaltanDatos.classList.add("texto-faltan-datos");
  textoFaltanDatos.id = "faltan-datos"+numero;

  let btnGuardar = crearBtn("btn-guardar", "Guardar");
  btnGuardar.id = "btn-guardar" + numero;

  let jugadorInput = document.createElement("input");
  jugadorInput.id = "input-jugador" + numero;

  jugadorInput.placeholder = "Ingresá tu nombre";

  // contiene el el label y el span
  let contenedorLabelSpan = crearContenedor("contenedor-label-span", "div");

  let nombrejugador = crearSpan("nombre-jugador" + numero, "Jugador: " + numero);
  contenedorLabelSpan.appendChild(nombrejugador);

  contenedorJugador.appendChild(imagenJugador);

  // contine el contenedor que tiene el label y el span
  contenedorInputNombre.appendChild(contenedorLabelSpan);

  //contenedor que contiene el input
  contenedorInputNombre.appendChild(jugadorInput);
  contenedorInputNombre.appendChild(textoFaltanDatos);
  contenedorInputNombre.appendChild(btnGuardar);

  // es el contenedor principal de la informacion del jugador
  contenedorJugador.appendChild(contenedorInputNombre);



  return contenedorJugador;
};

function obtenerSegundos() {
  cronometro += 1;
  if (cronometro > 0) {
    displayReloj.textContent = cronometro;
  }
  

  if (displayReloj.textContent  === 16) {
    alternarJugador();
   
  }

  if (usado) {
    setTimeout(obtenerSegundos, 1000);
  } else {
    reiniciarJugo();
  }
};


function crearSpan(clase, content = null) {

  let elemento = document.createElement("span");
  elemento.classList.add(clase);
  elemento.textContent = content;

  return elemento;
};

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
      cronometro = -2;

    }, 2000)


  }
  else {

    setTimeout(() => {
      primeraCarta.classList.remove("girar");

      segundaCarta.classList.remove("girar");

      primeraCarta = null;

      segundaCarta = null;

      alternar = false;

      alternarJugador();
      cronometro = -2;


    }, 2000);

  }


};

function crearContenedor(clase, etiqueta, id=null) {

  const contenedor = document.createElement(etiqueta);
  contenedor.id =id

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

    puntuacion1.textContent = puntosJugador1;

    console.log("puntos para el 1")
  }
  else {
    puntosJugador2++;

    puntuacion2.textContent = puntosJugador2;

    console.log("puntos para el 2")
  }

};

function verificarGanador(puntaje1, puntaje2) {

  if (puntaje1 + puntaje2 === 10) {

    if (puntaje1 > puntaje2) {

      alert(nombrejugador1.textContent)
    }
    else if (puntaje1 < puntaje2) {

      alert(nombrejugador2.textContent);

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

      contenedorPuntaje1.classList.remove("jugando");

      contenedorPuntaje2.classList.add("jugando");
      cronometro = 0;

    }
    else {
      jugadorActual = 1;
      cronometro = 0;

      contenedorPuntaje1.classList.add("jugando");

      contenedorPuntaje2.classList.remove("jugando");
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

contenedorPuntaje1.classList.remove("jugando");

  puntosJugador1 = 0;
  puntosJugador2 = 0;

  puntuacion1.textContent = puntosJugador1;
  puntuacion2.textContent = puntosJugador2;
  primeraCarta = null;
  segundaCarta = null;

  jugadorActual = 1;
  alternar = false;
  cronometro = 0;
 
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

let inputJugador1 = document.getElementById("input-jugador1");
let inputJugador2 = document.getElementById("input-jugador2");
let btnGuardar1 = document.getElementById("btn-guardar1");
let btnGuardar2 = document.getElementById("btn-guardar2");
let nombrejugador1 = document.getElementById("nombre-jugador1");
let nombrejugador2 = document.getElementById("nombre-jugador2");
let textoFaltanDatos1 = document.getElementById("faltan-datos1");
let textoFaltanDatos2 = document.getElementById("faltan-datos2");
let contenedor1 = document.getElementById("contenedor-jugador1");
let contenedor2 = document.getElementById("contenedor-jugador2");
let seccionJugador = document.getElementById("seccion-jugadores");
let contenedorBotones = document.getElementById("contenedor-botonera");
let contenedorPantallaVersus = document.getElementById("contenedor-pantalla-versus");
let btnStart = document.getElementById("start");
let btnReiniciar = document.getElementById("reiniciar");
let contenedorPuntaje1 = document.getElementById("contenedor-puntaje1");
let contenedorPuntaje2 = document.getElementById("contenedor-puntaje2");
let puntuacion1 = document.getElementById("puntaje1");
let puntuacion2 = document.getElementById("puntaje2");
let displayReloj = document.getElementById("reloj");

function nose(input, nombreJugador, contenedor,texto) {
  if (input.value !== "") {
    nombreJugador.textContent = input.value;
    contenedor.classList.add("desvanecido");
    console.log("Clic en guardar jugador 1");
    return true;


  }
  else {
    texto.style.display = "flex";
    input.classList.add("input-error");
  }

}

btnGuardar1.addEventListener("click", () => {
  nose(inputJugador1, nombrejugador1, contenedor1,textoFaltanDatos1);

})


btnGuardar2.addEventListener("click", () => {
  const validacion = nose(
    inputJugador2,
    nombrejugador2,
    contenedor2,
    textoFaltanDatos2
  );

  if (validacion !== true) {
    return;
  }

  contenedorBotones.style.display = "flex";
  contenedorPantallaVersus.style.display = "flex";
  contenedorPantallaVersus.classList.add("visible");
  contenedorBotones.classList.add("visible");

 
});


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

btnReiniciar.addEventListener("click", () => {

  reiniciarJugo();

});



btnStart.addEventListener("click", () => {

  contenedorPuntaje1.classList.add("jugando");
  encabezado.style.display = "none";
  if (usado) {
    return;
  }
   encabezado.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  usado = true;
  btnStart.classList.add("btn-usado")
  OcultarmostrarCartas("girar");

  setTimeout(() => {
    OcultarmostrarCartas("girar");
    obtenerSegundos();
  }, 2000);
})

