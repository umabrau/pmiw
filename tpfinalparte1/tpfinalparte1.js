let sonido, gato;
let img=[];
let estado=0;
let txt=['En una carretera solitaria de California, un gatito negro aparece de pronto entre dos carriles.', 'Dos autos que circulan en direcciones opuestas frenan en seco al verlo.', 'De uno baja una muchacha, del otro un joven; ambos se inclinan al gato al mismo tiempo.', 'Chica: "quédate con él, yo no tengo tiempo para un gato."', 'Él asiente, toma al gato y se aleja.', 'Ambos quieren quedarse con el gatito y discuten por ello.', 'El gato se aleja sigilosamente mientras ellos forcejean.', 'Un auto pasa cerca y casi lo atropella.', 'El joven y la chica se detienen en seco, alertados por el frenazo.', 'Los dos confiesan que sus gatos murieron recientemente.', 'Deciden ir a un café cercano para hablar del gato, pero estaba por cerrar.', 'Encuentran un hotel que admite mascotas y acuerdan una prueba: quien el gato elija al acostarse será su dueño.', 'Ambos se rinden al cansancio. Se acuestan sin hablar, con el gato entre ellos.', 'Ella se duerme primero. Él la mira un momento, luego cierra los ojos. Nadie vigila.', 'El primer rayo de sol despierta al joven. Palpa la cama: está vacía. La ventana, abierta. El gato, desaparecido.', 'Ella revela que hizo un pijama para su gato que murió.', 'Ambos reconocen que no eran tan malos como al principio pensaron.', 'Al amanecer, el gato no se mueve hacia nadie; en cambio, ella se acuesta junto al gato.'];

function preload() {
  for (let i=0; i<22; i++) {
    img[i]=loadImage('data/pant'+i+'.png');
  }
  
   sonido= loadSound('data/sonidoFondo.mp3');
   gato= loadSound('data/gatoClick.mp3');
}

function setup() {
  createCanvas(640, 480);
  textSize(20);
  
  gato.setVolume(1);
  sonido.setVolume(1);
  sonido.loop();
}


function draw() {
  if (estado===0) {
    image(img[0], 0, 0);
    if (frameCount > 150) {
    boton(500, 400, 125, 60, "Comenzar");
    }
  }

  else if (estado===1) {
    fondo(img[1], 20, 50, 580, 120, 50, txt[0], 50, -100, 500, 400, 125, 60, "Siguiente");
  }

  else if (estado===2) {
    fondo(img[2], 20, 50, 580, 120, 50, txt[1], 50, -100, 500, 400, 125, 60, "Siguiente" );
  }
  
  else if (estado===3) {
    fondo(img[3], 45, 200, 500, 120, 50, txt[2], 100, 50, 375, 400, 250, 60, "Que se lleve el gato el otro");
    boton(15, 400, 200, 60, "Llevar el gato a casa");
  }

  else if (estado===4) {
    fondo(img[4], 20, 50, 580, 80, 50, txt[3], 50, -125, 500, 400, 125, 60, "Siguiente" );
  }
  
  else if (estado===5) {
    fondo(img[5], 10, 385, 400, 50, 50, txt[4], -50, 200, 500, 400, 125, 60, "Creditos");
  }

  else if (estado===6) {
    fondo(img[6], 20, 285, 580, 50, 50, txt[5], 50, 100, 500, 400, 125, 60, "Hablarlo" );
    boton(15, 400, 250, 60, "Resolverlo con violencia");
  }
  
  else if (estado===7) {
    fondo(img[7], 20, 85, 580, 50, 50, txt[6], 50, -100, 500, 400, 125, 60, "Siguiente" );
  }
  
  else if (estado===8) {
    fondo(img[8], 20, 85, 580, 50, 50, txt[7], 50, -100, 500, 400, 125, 60, "Siguiente" );
  }
  
  else if (estado===9) {
    fondo(img[9], 20, 30, 580, 65, 50, txt[8], 40, -145, 500, 400, 125, 60, "Hablarlo" );
    boton(15, 400, 250, 60, "Que se lleve el gato el otro");
  }
  
  else if (estado===10) {
    fondo(img[10], 20, 200, 580, 80, 50, txt[9], 50, 25, 500, 400, 125, 60, "Siguiente" );
  }
  
  else if (estado===11) {
    fondo(img[11], 20, 25, 580, 80, 50, txt[10], 50, -145, 500, 400, 125, 60, "Siguiente" );
  }
  
  else if (estado===12) {
    fondo(img[12], 10, 10, 450, 100, 50, txt[11], 0, -150, 450, 400, 175, 60, "Seguir hablando");
    boton(15, 400, 100, 60, "Dormir");
  }
  
  else if (estado===13) {
    fondo(img[13], 20, 270, 580, 80, 50, txt[12], 65, 100, 500, 400, 125, 60, "Siguiente" );
  }
  
  else if (estado===14) {
    fondo(img[14], 20, 270, 580, 80, 50, txt[13], 65, 100, 500, 400, 125, 60, "Siguiente" );
  }
  
  else if (estado===15) {
    fondo(img[15], 20, 50, 580, 120, 50, txt[14], 50, -100, 500, 400, 125, 60, "Creditos" );
  }
  
  else if (estado===16) {
    fondo(img[16], 20, 270, 580, 80, 50, txt[15], 65, 100, 500, 400, 125, 60, "Siguiente" );
  }
  
  else if (estado===17) {
    fondo(img[17], 20, 300, 580, 80, 50, txt[16], 65, 125, 500, 400, 125, 60, "Siguiente" );
  }
  
  else if (estado===18) {
    fondo(img[18], 20, 200, 580, 80, 50, txt[17], 50, 30, 500, 400, 125, 60, "Creditos" );
  }
  
  else if (estado===19) {
    image(img[19], 0, 0);
    boton( 500, 400, 125, 60, "Inicio" );
  }
  
  else if (estado===20) {
    image(img[20], 0, 0);
    boton( 500, 400, 125, 60, "Inicio" );
  }
  
  else if (estado===21) {
    image(img[21], 0, 0);
    boton( 500, 400, 125, 60, "Inicio" );
  }
}
