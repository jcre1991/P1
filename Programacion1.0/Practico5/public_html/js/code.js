// practico5ejercicio1
$("#btnMostrar511").click(muestraTextoInvertido);
function muestraTextoInvertido()
{
  var _texto = $("#txtTexto511").val();
  $("#txtTexto511").val("");
  $("#pResultado511").html(invierteTexto(_texto));
}
// practico5ejercicio2
$("#btnMostrar521").click(muestraLetraEnTexto);
function muestraLetraEnTexto()
{
  var _texto = $("#txtTexto521").val();
  var _letra = $("#txtLetra521").val();
  var _contador = 0;
  $("#txtTexto521").val("");
  $("#txtLetra521").val("");
  for (var j = 0; j <= _texto.length; j++) {
    if (_texto.charAt(j) === _letra) {
      _contador ++;
    }
  }
  $("#pResultado521").html("La letra " + _letra + " aparece " + _contador + " veces en el texto");
  _contador = 0;
}
// practico5ejercicio3
$("#btnMostrar531").click(muestraVocalesEnTexto)
function muestraVocalesEnTexto()
{
  var _texto = $("#txtTexto531").val();
  $("#txtTexto531").val("");
  var _texto = _texto.toLowerCase();
  var _contador = 0;
  for (var k = 0; k <= _texto.length; k++) {
    if (_texto.charAt(k) === "a" || _texto.charAt(k) === "e"
    || _texto.charAt(k) === "i" || _texto.charAt(k) === "o" || _texto.charAt(k) === "u") {
      _contador ++;
    }
  }
  $("#pResultado531").html("Total de vocales: " + _contador);
  _contador = 0;
}
// practico5ejercicio4
$("#btnMostrar541").click(muestraTextoEnMinusculas);
function muestraTextoEnMinusculas()
{
  var _texto = $("#txtTexto541").val();
  $("#txtTexto541").val("");
  $("#pResultado541").html(_texto.toLowerCase());
}
// practico5ejercicio5
$("#btnMostrar551").click(muestraTextoEnMayusculas);
function muestraTextoEnMayusculas()
{
  var _texto = $("#txtTexto551").val();
  $("#txtTexto551").val("");
  $("#pResultado551").html(_texto.toUpperCase());
}
// practico5ejercicio6
$("#btnMostrar561").click(muestraTextoFormal);
function muestraTextoFormal()
{
  var _texto = $("#txtTexto561").val();
  $("#txtTexto561").val("");
  var _mayus = _texto.substr(0, 1);
  var _minus = _texto.substr(1);
  $("#pResultado561").html(_mayus.toUpperCase() + _minus.toLowerCase());
}
// practico5ejercicio7
$("#btnMostrar571").click(muestrarCadenaEnTexto)
function muestrarCadenaEnTexto()
{
  var _texto = $("#txtTexto571").val();
  var _cadena = $("#txtTexto572").val();
  $("#txtTexto571").val("");
  $("#txtTexto572").val("");
  if (_texto.indexOf(_cadena) !== -1) {
    $("#pResultado571").html("Es subcadena");
  }
  else {
    $("#pResultado571").html("No es subcadena");
  }
}
// practico5ejercicio8
$("#btnMostrar581").click(muestraCuantasPalabras);
function muestraCuantasPalabras()
{
  var _texto = $("#txtTexto581").val();
  $("#txtTexto581").val("");
  var _palabra = 0;
  if (_texto.length > 0) {
    _palabra ++;
    for (var l = 0; l < _texto.length; l++) {
      if (l === 0 && _texto.indexOf(" ") === 0) {
        _palabra --;
      }
      if (_texto.charAt(l - 1) === " " && _texto.charAt(l) !== " ") {
        _palabra ++;
      }
    }
  }
  $("#pResultado581").html(_palabra + " palabras");
}
// practico5ejercicio9
$("#btnMostrar591").click(muestraIgualdadPalabras);
function muestraIgualdadPalabras()
{
  var _texto = $("#txtTexto591").val();
  $("#txtTexto591").val("");
  var _letraPri = "";
  var _letraUlt = "";
  if (_texto.charAt(0) !== " ") {
    _letraPri = devuelvePrimeraLetra(_texto);
  }
  for (var m = 0; m < _texto.length; m++) {
    _letraUlt = _texto.charAt(_texto.length - 1);
  }
  if (_letraPri === _letraUlt) {
    $("#pResultado591").html("El texto comienza y termina con la misma letra");
  }
  else {
    $("#pResultado591").html("El texto NO comienza y termina con la misma letra");
  }
}
// practico5ejercicio10
$("#btnMostrar5101").click(muestraMatricula);
function muestraMatricula()
{
  var _texto = $("#txtTexto5101").val();
  $("#txtTexto5101").val("");
  var _letraPri = devuelvePrimeraLetra(_texto);
  _letraPri.toUpperCase(_letraPri);
  var _departamento = "";
  switch (_letraPri) {
    case "A":
    _departamento = "Canelones"
      break;
    case "B":
    _departamento = "Maldonado"
      break;
    case "C":
    _departamento = "Rocha"
      break;
    case "D":
    _departamento = "Treinta y Tres"
      break;
    case "E":
    _departamento = "Cerro Largo"
      break;
    case "F":
    _departamento = "Rivera"
      break;
    case "G":
    _departamento = "Artigas"
      break;
    case "H":
    _departamento = "Salto"
      break;
    case "I":
    _departamento = "Paysandu"
      break;
    case "J":
    _departamento = "Rio Negro"
      break;
    case "K":
    _departamento = "Soriano"
      break;
    case "L":
    _departamento = "Colonia"
      break;
    case "M":
    _departamento = "San Jose"
      break;
    case "N":
    _departamento = "Flores"
      break;
    case "O":
    _departamento = "Florida"
      break;
    case "P":
    _departamento = "Lavalleja"
      break;
    case "Q":
    _departamento = "Durazno"
      break;
    case "R":
    _departamento = "Tacuarembo"
      break;
    case "S":
    _departamento = "Montevideo"
      break;
    default:
  }
  $("#pResultado5101").html("El vehiculo pertenece a " + _departamento);
}
// practico5ejercicio11
$("#btnMostrar5111").click(muestraMayusYMinus);
function muestraMayusYMinus()
{
  var _texto = $("#txtTexto5111").val();
  $("#txtTexto5111").val("");
  var _textoMod = modificaCaracter(_texto, " ", "")
  var _textoMin = _textoMod.toLowerCase();
  var _cantMinus = 0;
  var _cantMayus = 0;
  var _codigo = "";
  for (var q = 0; q < _textoMod.length; q++) {
    _codigo = _textoMod.charCodeAt(q);
    if (_codigo >= 65 && _codigo <= 90) {
      _cantMayus ++;
    }
    else if (_codigo >= 97 && _codigo <= 122) {
      _cantMinus ++;
    }
  }
  $("#pResultado5111").html("Mayusculas: " + _cantMayus + "<br>" + "Minusculas: " + _cantMinus);
}
// practico5ejercicio12
$("#btnMostrar5121").click(muestraPalindromo)
function muestraPalindromo()
{
  var _texto = $("#txtTexto5121").val();
  $("#txtTexto5121").val("");
  _texto = _texto.toLowerCase();
  var _textoInv = invierteTexto(_texto);
  var _caracterE = " ,;.:-_";
  var _textoCTildes = "áéíóú"
  var _textoSTildes = "aeiou"
  for (var s = 0; s < _caracterE.length; s++) {
    _textoInv = modificaCaracter(_textoInv, _caracterE.charAt(s), "");
    _texto = modificaCaracter(_texto, _caracterE.charAt(s), "");
  }
  for (var t = 0; t < 5; t++) {
    _textoInv = modificaCaracter(_textoInv, _textoCTildes.charAt(t), _textoSTildes.charAt(t));
    _texto = modificaCaracter(_texto, _textoCTildes.charAt(t), _textoSTildes.charAt(t));
  }
  if (_texto === _textoInv) {
    $("#pResultado5121").html("Es un palindromo");
  }
  else {
    $("#pResultado5121").html("No es un palindromo");
  }
}
// practico5ejercicio13
$("#btnMostrar5131").click(muestraCaracterModificado);
function muestraCaracterModificado()
{
  var _texto = $("#txtTexto5131").val();
  $("#txtTexto5131").val("");
  var _caracter = $("#txtCaracter5131").val();
  $("#txtCaracter5131").val("");
  var _textoMod = modificaCaracter(_texto, _caracter, "*");
  $("#pResultado5131").html(_textoMod);
}
// practico5ejercicio14
$("#btnMostrar5141").click(mostrarOcurrenciaA);
function mostrarOcurrenciaA()
{
  var _texto = $("#txtTexto5141").val();
  $("#txtTexto5141").val("");
  $("#pResultado5141").html("La posicion de penultima a es: " + devuelvePosicionPenUltA(_texto));
}
// practico5ejercicio15
$("#btnMostrar5151").click(mostrarPrimeraLetra);
function mostrarPrimeraLetra()
{
  var _texto = $("#txtTexto5151").val();
  $("#txt Texto5151").val("");
  var _primeraLetraCant = devuelveCantidadPrimeraLetra(_texto);
  $("#pResultado5151").html("La primera letra aparece " + _primeraLetraCant + " veces en el texto");
}
// funciones
function devuelvePrimeraLetra(_texto)
{
  var _letraPri = _texto.charAt(0);
  return _letraPri;
}
function devuelveCantidadPrimeraLetra(_texto)
{
  var _letraPri = devuelvePrimeraLetra(_texto);
  var _cantidad = 0;
  for (var n = 0; n < _texto.length; n++) {
    if (_letraPri === _texto.charAt(n)) {
      _cantidad ++;
    }
  }
  return _cantidad;
}
function devuelvePosicionPenUltA(_texto)
{
  var _penUltimo = 0;
  var _posicion = 0;
  for (var o = _texto.length; o >= 0; o--) {
    if (_texto.charAt(o) === "a") {
      _penUltimo ++;
      if (_penUltimo === 2) {
        _posicion = o;
        break;
      }
      else {
        _posicion = -1;
      }
    }
  }
  return _posicion;
}
function modificaCaracter(_texto, _caracterAnt, _caracterNvo)
{
  var _textoNuevo = "";
  for (var p = 0; p < _texto.length; p++) {
    if (_texto.charAt(p) === _caracterAnt) {
      _textoNuevo += _caracterNvo;
    }
    else {
      _textoNuevo += _texto.charAt(p);
    }
  }
  return _textoNuevo;
}
function invierteTexto(_texto)
{
  var _textoInv = "";
  for (var i = _texto.length; i >= 0; i--) {
    _textoInv += _texto.charAt(i);
  }
  return _textoInv;
}
