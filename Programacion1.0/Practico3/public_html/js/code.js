// practico3ejercicio1
for (var i = 1; i <= 1000; i++) {
  $("#pTexto311").append(i + "<br>");
}
// practico3ejercicio2
for (var j = -100; j <=10; j++) {
  $("#pTexto321").append(j + "<br>");
}
// practico3ejercicio3
for (var k = 40; k >= 10; k--) {
  $("#pTexto331").append(k + "<br>");
}
// practico3ejercicio4
for (var l = 20; l >= -30; l--) {
  $("#pTexto341").append(l + "<br>");
}
// practico3ejercicio5
var comp351 = 0;
for (var m = 1; m <= 450; m++) {
  comp351 = m % 5
  if (comp351 === 0) {
    $("#pTexto351").append(m + "<br>");
  }
}
// practico3ejercicio6
var comp361 = 0;
for (var n = -33; n <= 230; n++) {
  comp361 = n % 4
  if (comp361 === 0) {
    $("#pTexto361").append(n + "<br>");
  }
}
// practico3ejercicio7
var numero371;
$("#btnMostrar371").click(MuestraGuiones);
function MuestraGuiones()
{
  numero371 = Number($("#txtNumero371").val());
  $("#txtNumero371").val("");
  $("#txtNumero371").attr("placeholder", "Ingrese otro numero");
  if (numero371 > 2 && numero371 < 50) {
    for (var o = 1; o <= numero371; o++) {
      $("#pResultado371").append("-");
    }
  }
  else {
    $("#pResultado371").append("Debe ingresar un numero entre 2 y 50 (Mayor que 2 y menor que 50)");
  }
  $("#pResultado371").append("<br>");
}
// practico3ejercicio8
var numero381;
var numero382;
var compara381;
var p;
$("#btnMostrar381").click(MuestraValorEntre);
function MuestraValorEntre()
{
  numero381 = Number($("#txtNumero381").val());
  numero382 = Number($("#txtNumero382").val());
  $("#txtNumero381").val("");
  $("#txtNumero382").val("");
  if (numero381 < numero382) {
    numero381 ++;
    for (p = numero381; p < numero382; p++) {
      $("#pResultado381").append(p + "<br>");
    }
  }
  else {
    numero381 --;
    for (p = numero381; p > numero382; p--) {
      $("#pResultado381").append(p + "<br>");
    }
  }
  $("#pResultado381").append("<br>");
}
// practico3ejercicio9
var alto391;
var ancho391;
$("#btnMostrar391").click(ImprimeRectangulo);
function ImprimeRectangulo()
{
  alto391 = Number($("#txtAlto391").val());
  ancho391 = Number($("#txtAncho391").val());
  $("#txtAlto391").val("");
  $("#txtAncho391").val("");
  for (var q = 0; q < alto391; q++) {
    $("#pResultado391").append("<br>");
    for (var r = 0; r < ancho391; r++) {
      $("#pResultado391").append("*");
    }
  }
  $("#pResultado391").append("<br>");
}
// practico3ejercicio10
var numero3101;
var numero3102;
var multiplo3101;
var multiplo3104;
var multiplo3106;
$("#btnMostrar3101").click(MostraMultip);
function MostraMultip()
{
  numero3101 = Number($("#txtNumero3101").val());
  numero3102 = Number($("#txtNumero3102").val());
  $("#txtNumero3101").val("");
  $("#txtNumero3102").val("");
  if (numero3101 < numero3102) {
    for (var s = numero3101; s <= numero3102 && multiplo3101 !== 0; s++) {
      multiplo3101 = (multiplo3104 = s % 4) + (multiplo3106 = s % 6);
      if (multiplo3101 === 0) {
        $("#pResultado3101").append(s + "<br>");
      }
    }
    multiplo3101 = 1;
  }
  else {
    for (var t = numero3101; t >= numero3102 && multiplo3101 !== 0; t--) {
      multiplo3101 = (multiplo3104 = t % 4) + (multiplo3106 = t % 6);
      if (multiplo3101 === 0) {
        $("#pResultado3101").append(t + "<br>");
      }
    }
    multiplo3101 = 1;
  }
}
// practico3ejercicio11
var numero3111;
var numero3112;
var producto3111 = 0;
$("#btnMostrar3111").click(SumaProducto);
function SumaProducto()
{
  numero3111 = Number($("#txtNumero3111").val());
  numero3112 = Number($("#txtNumero3112").val());
  $("#txtNumero3111").val("");
  $("#txtNumero3112").val("");
  for (var u = 0; u < numero3111 ; u++) {
    producto3111 += numero3112;
  }
  $("#pResultado3111").append(producto3111 + "<br>")
  producto3111 = 0;
}
// practico3ejercicio12
var numero3121;
var numero3122;
var producto3121 = 1;
$("#btnMostrar3121").click(ProductEntr);
function ProductEntr()
{
  numero3121 = Number($("#txtNumero3121").val());
  numero3122 = Number($("#txtNumero3122").val());
  $("#txtNumero3121").val("");
  $("#txtNumero3122").val("");
  for (var t = numero3121; t <= numero3122; t++) {
    producto3121 *= t;
  }
  $("#pResultado3121").append(producto3121 + "<br>");
  producto3121 = 1;
}
// practico3ejercicio13
var numero3131;
var numero3132;
var numero3133;
var numeroAux3131;
var multiplo3131;
$("#btnMostrar3131").click(TresMultiplo);
function TresMultiplo()
{
  numero3131 = Number($("#txtNumero3131").val());
  numero3132 = Number($("#txtNumero3132").val());
  numero3133 = Number($("#txtNumero3133").val());
  $("#txtNumero3131").val("");
  $("#txtNumero3132").val("");
  $("#txtNumero3133").val("");
  if (numero3131 < numero3132) {
    numero3131++;
    for (var u = numero3131; u < numero3132; u++) {
      multiplo3131 = u % numero3133;
      if (multiplo3131 === 0) {
        $("#pResultado3131").append(u + "<br>");
      }
    }
  }
  else {
    numero3131--;
    for (var u = numero3131; u > numero3132; u--) {
      multiplo3131 = u % numero3133;
      if (multiplo3131 === 0) {
        $("#pResultado3131").append(u + "<br>");
      }
    }
  }
  $(pResultado3131).append("<br>")
}
// practico3ejercicio14
var numero3141;
var factorial3141 = 1;
var calcula3141 = 2;
$("#btnMostrar3141").click(MostrarFactorial);
function MostrarFactorial()
{
  numero3141 = Number($("#txtNumero3141").val());
  $("#txtNumero3141").val("");
  while (calcula3141 <= numero3141) {
    factorial3141 *= calcula3141;
    calcula3141++;
  }
  $("#pResultado3141").append(factorial3141 + "<br>");
}
// practico3ejercicio15
var numero3151;
var numero3152 = 0;
var digito3151 = 0;
$("#btnMostrar3151").click(MostrarDigitos);
function MostrarDigitos()
{
  numero3151 = Number($("#txtNumero3151").val());
  $("#txtNumero3151").val("");
  numero3152 = numero3151;
  do {
    numero3152 /= 10;
    digito3151++;
  } while (numero3152 > 1);
  $("#pResultado3151").append(digito3151 + " digitos" + "<br>");
  digito3151 = 0;
}
// practico3ejercicio16
var numero3161;
$("#btnMostrar3161").click(MostrarDiv20);
function MostrarDiv20()
{
  numero3161 = Number($("#txtNumero3161").val());
  $("#txtNumero3161").val("");
  if (numero3161 > 2000) {
    while (numero3161 >= 100) {
      numero3161 /= 20;
    }
    $("#pResultado3161").append(numero3161 + "<br>");
  }
  else {
    alert("El numero ingresado debe ser mayor a 2000");
    alert("Ingrese otro numero");
  }
}
// practico3ejercicio17
var dividendo3171;
var divisor3171;
var resto3171 = 0;
var cociente3171 = 0;
var auxiliar3171;
$("#btnMostrar3171").click(CalcularDiv);
function CalcularDiv()
{
  dividendo3171 = Number($("#txtDividendo3171").val());
  divisor3171 = Number($("#txtDivisor3171").val());
  $("#txtDividendo3171").val("");
  $("#txtDivisor3171").val("");
  resto3171 = dividendo3171;
  while (resto3171 >= divisor3171) {
    resto3171 -= divisor3171;
    cociente3171++;
  }
  $("#pResultado3171").append("Cociente: " + cociente3171 + "<br>" + "Resto: " + resto3171 + "<br>");
  cociente3171 = 0;
  $("#pResultado3171").append("<br>");
}
// practico3ejercicio18
var numero3181;
var par3181 = 0;
var multiplo3181 = 0;
$("#btnMostrar3181").click(MostrarMulPar);
function MostrarMulPar()
{
  numero3181 = Number($("#txtNumero3181").val());
  $("#txtNumero3181").val("");
  for (var v = numero3181; v < 200; v++) {
    if (numero3181 > 30) {
      multiplo3181 = v % numero3181;
      par3181 = v % 2;
      if (par3181 === 0 && multiplo3181 === 0) {
        $("#pResultado3181").append(v + "<br>");
      }
    }
  }
}
