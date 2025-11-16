class Auto {
 constructor(ancho){
this.x = 650;
this.y = 140;
this.ancho= ancho;
this.velocidad = 5;
this.activo=true;
}
    
dibujar(imagen, altoAuto) {
  image(imgAutos[imagen], this.x, this.y, this.ancho, altoAuto);
}
    
moverIzquierda() {
 this.x -= this.velocidad;

if (this.x < -this.ancho) {
 this.x = width + this.ancho;
}
this.activo=true;
}

desactivarAuto() {
 this.activo=false;
  }

}
