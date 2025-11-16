//Brau Uma , Gmelin Trinidad comision 1
// 
let imgAutos = [];
let imgGato = [];
let fondo, portada;
let objJuego;
let gato, gano;

function preload() {
gato = loadSound('data/gato.mp3');
gatoGano = loadSound('data/gano.mp3')
fondo = loadImage('data/fondo.png');
portada = loadImage('data/portada.png');
ganaste = loadImage('data/ganaste.png');
perdiste = loadImage('data/perdiste.png');
tutorial = loadImage('data/tutorial.png');
for (let i=0; i<4; i++) {
imgAutos[i] = loadImage('data/auto'+i+'.png');
imgGato[i] = loadImage('data/gato'+i+'.png');
  }
}

function setup() {
createCanvas(640, 480);
objJuego = new Juego();

gato.setVolume(0.5);
gatoGano.setVolume(1);
}


function draw() {
objJuego.dibujar();
if (keyIsPressed) {
objJuego.actualizar();
  }
 objJuego.colision();
 
}
function mouseClicked() {
  
 if (objJuego.estado === "inicio" && objJuego.sobreMouse(500, 400, 125, 60)) {
objJuego.estado="tutorial";
  }

 if ((objJuego.estado === "ganaste" || objJuego.estado === "perdiste") &&
      objJuego.sobreMouse(500, 400, 125, 60)) {
frameCount=150;
objJuego.estaVivo= true;
objJuego.estado="jugando";
objJuego.crearGato();
objJuego.crearAutos();
  
 

 }
}
