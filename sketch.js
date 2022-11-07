//APRETAR "J" O "T"
//CLICK MOUSE DERECHO/IZQUIERDO

//VARIABLES
var contador = 0;
var anchoPincel = 40;
//var mitadAncho = 800 / 2;
//var mitadAlto = 400 / 2;
var puntos = 701;

var angulo = 0.0;
var desplazamiento = 60;
var escalar = 30;
var velocidad = 0.05;

function setup() {
  createCanvas(800, 400);
  background("#f4edb9");
}

function draw() {
  //background("#f4edb9");
  //CONSOLA
  //COORDENADAS EN LIENZO
  //console.log("x:" + mouseX + ". y:" + mouseY);
  //console.log(frameCount);
  //console.log(". contador: " + contador);
  mitadAncho = mouseX;
  mitadAlto = mouseY;
  colorMode(hex);

  //contador va de 20 en 20
  contador += 20;
  if (contador == 400) {
    contador = 0;
  }
  if (frameCount == 400);
  {
    frameCount = 0;
  }

  //código del mouse
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      stroke(0, 105, 163, 255);
    } else if (mouseButton == RIGHT) {
      stroke(212, 118, 47, 255);
    }
    strokeWeight(400);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  //CIRCULO IZQUIERDA
  //1-NEGRO
  strokeWeight(10);
  noFill();
  stroke(0);
  ellipse(mouseX, mouseY, 270, 270);
  //2-GRIS
  stroke(228);
  ellipse(mouseX, mouseY, 250, 250);
  //3-NEGRO
  strokeWeight(0, 10, 123, 255);
  fill(0);
  stroke(0);
  ellipse(mouseX, mouseY, 228, 228);
  //4-AZUL
  strokeWeight(12);
  noFill();
  stroke("#1c3f5b");
  ellipse(mouseX, mouseY, 135, 135);
  //5-CELESTE
  strokeWeight(9);
  noFill();
  stroke("#328384");
  ellipse(mouseX, mouseY, 80, 80);

  //CIRCULO IZQ ABAJO
  strokeWeight(3);
  noFill();
  stroke(0);
  ellipse(114, 241, 84, 85);

  //LINEAS MEDIO
  //1
  strokeWeight(3);
  line(338, 124, 387, 108);
  //2
  strokeWeight(3);
  line(341, 150, 388, 150);
  //3
  strokeCap(SQUARE);
  strokeWeight(8);
  line(336, 162, 388, 162);
  //4
  strokeWeight(3);
  line(354, 101, 354, 209);

  //2 MEDIOCIRCULOS
  push();
  //ROJO
  translate(-10, -50);

  strokeWeight(7);
  fill(255);
  stroke(0);
  ellipse(390, 267, 145, 145);
  strokeWeight(6);
  stroke("#d25537");
  ellipse(390, 267, 132, 132);
  pop();
  //AMARILLO
  strokeWeight(7);
  fill(255);
  stroke(0);
  ellipse(530, 222, 145, 145);
  strokeWeight(6);
  stroke("#eec72c");
  ellipse(530, 222, 132, 132);
  stroke(0);

  //RECTANGULO MASTER TAPADOR
  fill("#f4edb9");
  strokeWeight(0);
  quad(306, 297, 330, 370, 663, 273, 628, 193);

  //3 CIRCULITOS
  //CIRCULITO AMARILLO
  strokeWeight(7);
  fill(255);
  stroke(0);
  ellipse(546, 264, 80, 80);
  stroke("#edd760");
  ellipse(546, 264, 66, 66);
  //CIRCULITO NARANJA
  strokeWeight(7);
  fill(255);
  stroke(0);
  ellipse(468, 290, 80, 80);
  stroke("#e6a05a");
  ellipse(468, 290, 66, 66);
  //CIRCULITO ROJO

  //GREEN RAYA
  stroke("#6aae3d");
  strokeCap(ROUND);
  strokeWeight(6);
  line(776, 29, 802, 16);
  strokeWeight(7);
  fill(255);
  stroke(0);
  ellipse(390, 315, 80, 80);
  stroke("#d98a63");
  ellipse(390, 315, 66, 66);

  //CRUZ MEDIO
  //HORIZONTAL
  push();

  var x = desplazamiento + cos(angulo) * escalar;
  var y = desplazamiento + sin(angulo) * escalar;
  ellipse(x, y, 40, 40);
  angulo += velocidad;

  strokeWeight(2);
  stroke(0);
  line(268, 309, 700, 169);
  pop();
  //VERTICAL
  strokeWeight(2);
  line(569, 393, 508, 31);

  //PUNTITOS AMARILLOS
  //1
  strokeWeight(6);
  stroke("#d5ae51");
  point(250, 315);
  //2
  point(232, 322);
  //3
  point(215, 328);

  //CIRCULITOS DESPARRAMADOS
  //CELESTITO
  strokeWeight(3);
  fill(255);
  stroke("#328384");
  ellipse(562, 115, 30, 30);
  //NARANJA
  strokeWeight(3);
  fill("#ecb536");
  stroke("#df952a");
  ellipse(654, 71, 26, 26);

  //#TRESRAYAS
  stroke(0);
  strokeWeight(1.5);
  line(570, 160, 623, 11);
  line(577, 163, 630, 15);
  line(583, 169, 637, 20);
  //2 RAYAS DERECHA
  stroke(0);
  strokeCap(ROUND);
  strokeWeight(5);
  line(645, 38, 801, 64);
  line(744, 10, 800, 53);

  //CIRCULO CON PUNTITOS, ARRIBA DERECHA
  push();
  //for (var puntos = 701; puntos > 500; puntos += 10);

  strokeWeight(4);
  fill(255);
  ellipse(704, 15, 50, 50);
  point(701, 34);
  point(701, 26);
  point(701, 18);
  point(701, 10);
  point(701, 2);
  point(694, 29);
  point(694, 21);
  point(694, 13);
  point(694, 5);
  point(687, 25);
  point(687, 17);
  point(687, 9);
  point(687, 1);
  point(708, 31);
  point(708, 23);
  point(708, 15);
  point(708, 7);
  point(708, -1);
  point(715, 27);
  point(715, 19);
  point(715, 11);
  point(715, 4);
  point(722, 22);
  point(722, 14);
  point(722, 6);
  pop();

  //CIRCULO TURQUESA DERECHA
  fill("#5ca7a2");
  stroke("#567879");
  ellipse(782, 133, 110, 110);

  //TRIANGULO CHICO
  strokeWeight(4);
  fill(81, 73, 120, 200);
  stroke(0);
  triangle(682, 80, 624, 130, 695, 137);
  triangle(695, 137, 741, 347, 790, 149);

  //ESQUINA TRIANGULO ABAJO
  strokeWeight(16);
  fill(255);
  stroke(0);
  triangle(445, 370, 390, 434, 440, 439);

  //3 LINEAS ABAJO
  //AMARILLAS
  strokeWeight(3);
  stroke("#efdd7b");
  line(537, 324, 519, 328);
  line(539, 336, 521, 339);
  line(541, 348, 524, 351);
  //NEGRAS
  stroke(0);
  strokeWeight(2);
  line(537, 324, 607, 312);
  line(539, 336, 609, 324);
  line(541, 348, 611, 336);

  //RAYAS DE DIAGONAL ARRIBA PONELE
  strokeWeight(3);
  line(673, 133, 749, 39);
  line(750, 38, 808, 9);

  //RAYA CON QUINIENTOS CUADRADOS
  strokeWeight(1);
  line(602, 371, 805, 190);
  line(611, 381, 804, 208);
  fill(0);
  quad(602, 371, 611, 381, 628, 365, 620, 356);
  fill(255);
  quad(628, 365, 620, 356, 647, 331, 656, 341);
  fill("#fac332");
  quad(647, 331, 656, 341, 667, 331, 658, 322);
  fill("#6ab02b");
  quad(667, 331, 658, 321, 669, 312, 677, 321);
  fill("#fac332");
  quad(669, 312, 677, 321, 688, 311, 680, 302);
  fill(0);
  quad(688, 311, 680, 302, 709, 276, 717, 285);
  fill("#a0d9b9");
  quad(709, 276, 717, 285, 724, 279, 721, 264);
  fill(255);
  quad(724, 261, 728, 276, 764, 244, 770, 221);
  line(750, 258, 741, 247);
  fill("#fac332");
  quad(775, 218, 770, 238, 787, 223, 780, 213);
  fill(0);
  quad(787, 223, 780, 213, 801, 194, 805, 206);

  //LINEAS VERDES DERECHA
  strokeCap(SQUARE);
  stroke("#648c4d");
  strokeWeight(3);
  line(802, 230, 783, 246);
  stroke("#648c4d");
  strokeWeight(6);
  line(806, 236, 788, 252);

  //RAYAS NEGRAS ESQ ABAJO
  stroke(0);
  strokeWeight(3);
  line(808, 352, 705, 354);
  line(803, 375, 764, 375);
  strokeWeight(7);
  line(802, 399, 755, 399);
  strokeWeight(3);
  line(787, 398, 801, 341);
  //CUADRADITO CELESTE

  if (keyIsPressed) {
    if (key == "t" || key == "T") {
      fill(255, 255, 255, 255);
      stroke(0, 0, 0, 255);
    }
    if (key == "j" || key == "J") {
      fill(148, 15, 23, 255);
      stroke(0, 0, 0, 255);
    }
  }

  //fill("#5796a7");
  strokeWeight(5);
  rect(664, 364, 32, 32);
}
document.oncontextmenu = function () {
  return false;
};
