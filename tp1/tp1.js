// uma brau comision 1 
// 122618/7
// https://youtu.be/7aX86tlIcR8?si=zQTGJ_i4MwOt4XrG
// porfe tuve que grabar el video de esta forma ya que mi compu no me permite descargar lo que nos hacen usar para el video. 



let imagen; 
let cantidad, posX, posY, tam, cantidadVariable;
let colorRelleno;


function preload() {
imagen = loadImage ('data/29/29.jpg'); 
}

function setup (){
  createCanvas (800,400);
  posX = 0; 
  colorRelleno = color(0); 

posY = 0;
cantidad = 20;
cantidadVariable = cantidad; 
tam = height / cantidad; 
}


function draw() {
background (255);
image(imagen, 0, 0, 400, 400);
grillaDeformada(cantidad, tam);
}

function grillaDeformada(cantidad_, tam_) {
let posX_, posY_;
for (let i = 0; i < cantidad_; i++) {
  posX_ = 0; 
for (let j = 0; j < cantidad_; j++) {
if ((i + j) % 2 === 0) {
  fill(255);
} else {
  fill(colorRelleno);
}

posY_ = tam_ * i;
let distanciaX = abs(j - (cantidad_)/2);
let mapDistancia = map(distanciaX, (cantidad_) / 2, 0, tam_ * 2, tam_ * 0.1);

rect(posX_ + 400, posY_, mapDistancia, tam_);
posX_ +=mapDistancia;
  }
 }
}

function mouseClicked(){
  colorRelleno = color(random(40, 200), random(40), random(20,100)); 

}
