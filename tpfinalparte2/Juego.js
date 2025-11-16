class Juego {
  
constructor(){
this.fondo= new Fondo();
this.crearGato();
this.crearAutos();
this.estaVivo= true;
this.estado = "inicio";
 }
    
 dibujar() {
    
  if (this.estado==="inicio") {
image(portada, 0, 0, width, height);
rect(500, 400, 125, 60);
push();
fill(0);
text("Jugar", 550, 435);
pop();
frameCount=0;

 }

else if (this.estado==="tutorial") {
image(tutorial, 0, 0, width, height);

if (frameCount>=150) {
 this.jugar();
  }
}
      

 else if (this.estado==="jugando" && frameCount< 450) {
 this.fondo.dibujar();
 this.gato.mover();
 this.gato.dibujar();
  for (let i=0; i<4; i++) {
 this.autos[i].dibujar(0, 150);
 this.autos[i].moverIzquierda();
  }
}

else if (this.estado==="jugando" && frameCount< 750) {
this.fondo.dibujar();
this.gato.mover();
this.gato.dibujar();
for (let i=0; i<4; i++) {
this.autos[i].dibujar(1, 150);
this.autos[i].moverIzquierda();
  }
}

else if (this.estado==="jugando" && frameCount<1050) {
this.fondo.dibujar();
this.gato.mover();
this.gato.dibujar();
for (let i=0; i<4; i++) {
this.autos[i].dibujar(2, 150);
this.autos[i].moverIzquierda();
  }
}

else if (this.estado==="jugando" && frameCount< 1350) {
 this.fondo.dibujar();
 this.gato.mover();
 this.gato.dibujar();
 for (let i=0; i<4; i++) {
 this.autos[i].dibujar(3, 150);
 this.autos[i].moverIzquierda();
   }
 }

else if (frameCount >= 1350 && this.estaVivo===true) {
this.estado="ganaste";
 }

if (this.estado==="ganaste") {
image(ganaste, 0, 0, width, height);
rect(500, 400, 125, 60);
push();
fill(0);
text("Jugar de nuevo", 525, 435);
pop();
}

if (this.estado==="perdiste") {
image(perdiste, 0, 0, width, height);
rect(500, 400, 125, 60);
push();
fill(0);
text("Reintentar", 535, 435);
pop();
  }

      
}
    
crearAutos() {
this.autos = [];
 for (let i=0; i<4; i++) {
this.autos[i] = new Auto(500);
  }
}
    
crearGato() {
this.gato = new Gato(0, 40, 60);
}

actualizar() {
 this.gato.mover();
 }


colision() {
  
for (let i=0; i<this.autos.length; i++) {

if (this.gato.atropellado(this.autos[i]) && this.autos[i].activo===true) {
this.estaVivo= false;
this.autos[i].desactivarAuto();
this.estado="perdiste";
//sonido: disparo.play();
    }
  }
}

jugar() {
   this.estado = "jugando";
  }

sobreMouse(posX, posY, tamX, tamY) {
   return mouseX>posX && mouseX<posX+tamX && mouseY>posY && mouseY<posY+tamY;
  }

}


class Fondo {
  
dibujar() {
    image(fondo, 0, 0, width, height);
    }
  }
