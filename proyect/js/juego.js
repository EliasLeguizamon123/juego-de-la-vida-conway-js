var canvas;
var contexto;
var fps = 30;
var canvasEnX = 900; //Pixeles de ancho
var canvasEnY = 500; //Pixeles de Alto
var celdasX;
var celdasY;

//Variables relacionadas con el tablero de juego
var tablero
var filas = 100;
var columnas = 100;

var blanco = '#FFFFFF';
var negro = '#000000';

function array2D(fila, columna){
  var objeto = new Array(fila);
  for(i=0; i<fila; i++){
    objeto[i] = new Array(columna);
  }
  return objeto;
}

function alIniciar(){
  //Asociamos el canvas
  canvas = document.getElementById('pantalla')
  contexto = canvas.getContext('2D');
  //Ajustamos su tamaño con las variables canvas en x e y
  canvas.width = canvasEnX;
  canvas.height = canvasEnY;

  //Se calcula el tamaño de las celdas: es un 10% del tablero total, el tablero es de 900px una celda en x es 9px
  celdasX = Math.floor(canvasEnX/ filas);
  celdasY = Math.floor(canvasEnY/ columnas);
}

  //Creamos el tablero de nuestro juego
  tablero = array2D(filas, columnas); //Nuestro tablero se convierte en una matriz de nuestras variables filas y columnas

function borrarCanvas(){ //Limpia el canvas cambiando su tamaño por el mismo
  canvas.width = canvas.width;
  canvas.height = canvas.height;
}

//AGENTE O TURMITA 'AUTOMATA'
  var Agente = function(direccionx, direcciony, estado){

  }

  //se ejecuta todo el tiempo la funcion 'principal()'
setInterval(function(){principal();}, 1000/fps );
function principal(){
  console.log('fps');
}
