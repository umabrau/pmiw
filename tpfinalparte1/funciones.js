function mousePressed() {
  if (estado===0 && frameCount > 150) {
    if (sobreMouse(500, 400, 125, 60)) {
      estado=1;
    }
  }
  else if (estado===1) {
    if (sobreMouse(500, 400, 125, 60)) {
      estado=2;
    }
  }
  else if (estado===2) {
    if (sobreMouse(500, 400, 125, 60)) {
      estado=3;
    }
  }
  else if (estado===3) {
      if (sobreMouse(375, 400, 250, 60)) {
      estado=4;
      }
      else if (sobreMouse(15, 400, 200, 60)) {
      estado=6;
      }
  }
  else if (estado===4) {
    if (sobreMouse(500, 400, 125, 60)) {
      estado=5;
      }
  }
  else if (estado===6) {
      if (sobreMouse(500, 400, 250, 60)) {
      estado=10;
      }
      else if (sobreMouse(15, 400, 200, 60)) {
      estado=7;
      }
  }
  
  else if (estado===7) {
    if (sobreMouse(500, 400, 125, 60)) {
      estado=8;
      }
  }
  
  else if (estado===8) {
    if (sobreMouse(500, 400, 125, 60)) {
      estado=9;
      }
  }
  
  else if (estado===9) {
    if (sobreMouse(500, 400, 250, 60)) {
      estado=10;
      }
      else if (sobreMouse(15, 400, 200, 60)) {
      estado=4;
      }
  }
  
  else if (estado===10) {
    if (sobreMouse(500, 400, 125, 60)) {
      estado=11;
      }
  }
  
  else if (estado===11) {
    if (sobreMouse(500, 400, 125, 60)) {
      estado=12;
      }
  }
  
  else if (estado===12) {
    if (sobreMouse(450, 400, 175, 60)) {
      estado=16;
      }
      else if (sobreMouse(15, 400, 100, 60)) {
      estado=13;
      }
  }
  
  else if (estado===13) {
    if (sobreMouse(500, 400, 125, 60)) {
      estado=14;
      }
  }
  
  else if (estado===14) {
    if (sobreMouse(500, 400, 125, 60)) {
      estado=15;
      }
  }
  
  else if (estado===16) {
    if (sobreMouse(500, 400, 125, 60)) {
      estado=17;
      }
  }
  
 else if (estado===17) {
    if (sobreMouse(500, 400, 125, 60)) {
      estado=18;
      }
  }
  
  else if (estado===18) {
    if (sobreMouse(500, 400, 125, 60)) {
      estado=19;
      }
  }
  
  else if (estado===5) {
    if (sobreMouse(500, 400, 125, 60)) {
      estado=20;
      }
  }
  
  else if (estado===15) {
    if (sobreMouse(500, 400, 125, 60)) {
      estado=21;
      }
  }
  
  else if (estado===19 || estado===20 || estado===21) {
    if (sobreMouse(500, 400, 125, 60)) {
      estado=0;
      frameCount=0;
      }
  }
}

function boton(posX, posY, tamX, tamY, textoB) {
  if (sobreMouse(posX, posY, tamX, tamY)) {
    fill(100);
  }
  else {
    fill(205);
  }
  
  rect(posX, posY, tamX, tamY, tamY/4);
  fill(0);
  textAlign(CENTER, CENTER);
  text(textoB, posX+tamX/2, posY+tamY/2);
}

function sobreMouse(posX, posY, tamX, tamY) {
  return mouseX>posX && mouseX<posX+tamX && mouseY>posY && mouseY<posY+tamY;
}

function fondo(imagen, x, y, ancho, largo, red, texto, posX, posY, posXB, posYB, tamXB, tamYB, textoB) {
  image(imagen, 0, 0);
  fill(27, 9, 107);
  rect(x, y, ancho, largo, red);
  fill(255);
  text(texto, posX, posY, width-tamXB, height-tamYB);
  boton(posXB, posYB, tamXB, tamYB, textoB);
}

function mouseClicked() {
  gato.play();
  }
