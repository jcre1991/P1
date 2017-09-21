// practico6ejercicio1
var usuarios611 = [];
 $("#btnIngresar611").click(ingresarUsuarios);
 function ingresarUsuarios()
 {
   var _usuario = $("#txtUsuario611").val();
   var _busqueda = false;
   $("#txtUsuario611").val("");
   for (var i = 0; i < usuarios611.length; i++) {
     if (usuarios611[i] === _usuario) {
       _busqueda = true;
       break;
     }
   }
   if (!_busqueda) {
     usuarios611.push(_usuario);
     $("#pResultado611").html("Usuario " + _usuario + " guardado" + "<br>");
   }
   else {
     $("#pResultado611").html("ERROR: Usuario " + _usuario + " ya existente");
   }
 }
 // practico6ejercicio2
 var palabras621 = ["ballena", "cocodrilo", "pato", "tigre", "marmota", "si"];
 var cantidades621 = contarLetras(palabras621);
 function contarLetras(_palabras)
 {
   var _cantidades = [];
   for (var j = 0; j < palabras621.length; j++) {
     _cantidades.push(_palabras[j].length);
   }
   return _cantidades;
 }
 $("#pResultado621").append(palabras621 + "<br>" + cantidades621 + "<br>");
 // practico6ejercicio3
 var numeros631 = [];
 $("#btnIngresar631").click(ingresarNumero);
 $("#btnMostrar631").click(mostrarMayorNumero);
 function ingresarNumero()
 {
   var _numero = Number($("#txtNumero631").val());
   $("#txtNumero631").val("");
   numeros631.push(_numero);
 }
 function mostrarMayorNumero()
 {
   var _max = Number.NEGATIVE_INFINITY;
   for (var k = 0; k < numeros631.length; k++) {
     if (numeros631[k] > _max) {
       _max = numeros631[k];
     }
   }
   $("#pResultado631").html("Mayor numero: " + _max);
 }
 // practico6ejercicio4
 var palabras641 = [];
 $("#btnIngresar641").click(ingresarPalabra);
 $("#btnMostrar641").click(mostrarListadoPalabras);
 function ingresarPalabra()
 {
   var _palabra = $("#txtTexto641").val();
   $("#txtTexto641").val("");
   palabras641.push(_palabra);
 }
 function mostrarListadoPalabras()
 {
   for (var l = 0; l < palabras641.length; l++) {
     $("#pResultado641").append(palabras641[l] + "<br>");
   }
   $("#pResultado641").append("<br>");
 }

 // practico6ejercicio5
 var numeros651 = [];
$("#btnIngresar651").click(ingresarNumeros);
$("#btnMostrar651").click(mostrarPromedio);
function ingresarNumeros()
{
  var _numero = Number($("#txtNumero651").val());
  $("#txtNumero651").val("");
  numeros651.push(_numero);
}
function mostrarPromedio()
{
  var _suma = 0
  for (var m = 0; m < numeros651.length; m++) {
    _suma += numeros651[m];
  }
  var _promedio = _suma / numeros651.length;
  $("#pResultado651").html(_promedio);
}
// practico6ejercicio6
var numeros661 = [4, 17, 24, 46, 13, 2, 27, 19, 44];
var numeros662 = devolverValoresMayores20(numeros661);
function devolverValoresMayores20(_array)
{
  var _mayores20 = [];
  for (var n = 0; n < _array.length; n++) {
    if (_array[n] > 20) {
      _mayores20.push(_array[n]);
    }
  }
  return _mayores20;
}
$("#pResultado661").html(numeros662 + "<br>");
// practico6ejercicio7
$("#dNuevoNombre671").hide();
var nombres671 = ["Ana", "Lucia", "Maria"];
nombres671.push("Juan");
var cantidad671 = nombres671.length;
var posicion671 = nombres671[1];
var posicion672 = nombres671.length -1;
var posicion673 = 0;
$("#btnMostrar671").click(mostrarNombreYPosicion);
function mostrarNombreYPosicion()
{
  var _nombre = $("#txtNombre671").val();
  $("#txtNombre671").val("");
  var _existe = false;
  for (var o = 0; o < nombres671.length; o++) {
    if (_nombre === nombres671[o]) {
      _existe = true;
      posicion673 = o;
      break;
    }
  }
  if (_existe) {
    $("#pResultado671").append("El nombre se encuentra dentro del array y su posicion es: " + o + "<br>");
    $("#dNuevoNombre671").show();
  }
  else {
    $("#pResultado671").append("El nombre NO se encuentra dentro del array " + -1 + "<br>");
  }
}
$("#btnNombre672").click(cambiarNombre);
function cambiarNombre()
{
  nombres671[posicion673] = $("#txtNombre672").val();
  $("#txtNombre672").val("");
  alert("El nombre se cambio correctamente");
  $("#dNuevoNombre671").hide();
  for (var p = 0; p < nombres671.length; p++) {
    $("#pResultado671").append(nombres671[p] + "<br>");
  }
}
$("#pResultado671").append("Largo array: " + cantidad671 + "<br>" + "Posicion 1: " + posicion671 + "<br>" +
"Posicion total -1: " + posicion672 + "<br>" + "Nombres por renglon: " + "<br>");
for (var p = 0; p < nombres671.length; p++) {
  $("#pResultado671").append(nombres671[p] + "<br>");
}
// practico6ejercicio8
var fibonacci681 = [1, 1];
var total681;
for (var q = 1; q < 19; q++) {
  total681 = fibonacci681[fibonacci681.length -1] + fibonacci681[fibonacci681.length -2];
  fibonacci681.push(total681);
}
for (var r = 0; r < fibonacci681.length; r++) {
  $("#pResultado681").append(fibonacci681[r] + "<br>");
}
// practico6ejercicio9
var fibonacci691 = [1, 1];
var total691 = 0;
var contador691 = 1;
while (total691 <= 1000) {
  total691 = fibonacci691[fibonacci691.length -1] + fibonacci691[fibonacci691.length -2];
  fibonacci691.push(total691);
  contador691 ++;
}
for (var s = 0; s < fibonacci691.length; s++) {
  $("#pResultado691").append(fibonacci691[s] + "<br>");
}
