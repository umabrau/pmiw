class Gato {
constructor(imagen, anchoGato, altoGato){
this.x = 200;
this.y = 225;
this.imagen= imagen;
this.anchoGato = anchoGato;
this.altoGato= altoGato;
this.estaQuieto= true;
this.esquivar=false;
  }
    
  dibujar() {
    image(imgGato[this.imagen], this.x, this.y, this.anchoGato, this.altoGato);
 }
    
mover() {
  if (keyCode===RIGHT_ARROW) {
this.estaQuieto= false;
this.esquivar=false;
this.imagen= 1;
this.anchoGato= 60;
this.altoGato=60;
this.x++;
this.y=225;
      }

 else if (keyCode===LEFT_ARROW) {
this.estaQuieto= false;
this.esquivar=false;
this.imagen= 2;
this.anchoGato= 60;
this.altoGato=60;
this.x--;
this.y=225;
  }

else if (keyCode===DOWN_ARROW) {
this.estaQuieto= false;
this.esquivar=true;
this.imagen= 3;
this.anchoGato= 50;
this.altoGato=30;
this.y=250;
}

else {
this.estaQuieto = true;
this.esquivar=false;
this.imagen= 0;
this.y=225;
this.anchoGato = 40;
this.altoGato= 60;

  }
 }

 gatoQuieto() {
if (this.estaQuieto === true) {
this.dibujar();
  }
}

atropellado(obstaculo) {
  let choque = this.x+this.anchoGato>obstaculo.x && this.x < obstaculo.x + obstaculo.ancho &&
    this.y + this.altoGato>obstaculo.y && this.y <obstaculo.y +obstaculo.ancho && this.esquivar===false;

return choque;
  }
  
}
