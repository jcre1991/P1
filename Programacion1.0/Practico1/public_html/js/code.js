
// practico1ejercicio1
var nombre;
var apellido;
var muestra;
$("#btnMostrar").click(MostrarDatos);
function MostrarDatos()
{
  nombre = $("#txtNombre").val();
  apellido = $("#txtApellido").val();
  $("#txtNombre").val("");
  $("#txtApellido").val("");
  $("#pMuestra").append(apellido + ", " + nombre + "<br>");
}
// practico1ejercicio2
var valor21;
var valor22;
var resultado21;
$("#btnSumar1").click(SumarValores1);
function SumarValores1()
{
  valor21 = Number($("#txtSuma1").val());
  valor22 = Number($("#txtSuma2").val());
  $("#txtSuma1").val("");
  $("#txtSuma2").val("");
  resultado21 = valor21 + valor22;
  $("#pSuma1").append(resultado21 + "<br>");
}
// practico1ejercicio3
var valor31;
var valor32;
var valor33;
var resultado31;
$("#btnSumar2").click(SumarValores2);
function SumarValores2()
{
  valor31 = Number($("#txtSuma11").val());
  valor32 = Number($("#txtSuma22").val());
  valor33 = Number($("#txtSuma33").val());
  $("#txtSuma11").val("");
  $("#txtSuma22").val("");
  $("#txtSuma33").val("");
  resultado31 = valor31 + valor32 + valor33;
  $("#pSuma2").append(resultado31 + "<br>");
}
// practico1ejercicio4
var valor41;
var valor42;
var resSuma;
var resMultip;
$("#btnCalcular").click(CalculaValores);
function CalculaValores()
{
  valor41 = Number($("#txtValor1").val());
  valor42 = Number($("#txtValor2").val());
  $("#txtValor1").val("");
  $("#txtValor2").val("");
  resSuma = valor41 + valor42;
  resMultip = valor41 * valor42;
  $("#pSuma3").append(resSuma + "<br>");
  $("#pMultip").append(resMultip + "<br>");
}
// practico1ejercicio5
var lado;
var cuadrado;
$("#btnCuadrado").click(Cuadrado);
function Cuadrado()
{
  lado = Number($("#txtLado").val());
  $("#txtLado").val("");
  cuadrado = lado * lado;
  $("#pCuadrado").append(cuadrado + "<br>");
}
// practico1ejercicio6
var pesos;
var tCambio;
var dolares;
$("#btnVTCambio").click(CalculaTCambio);
function CalculaTCambio()
{
  pesos = Number($("#txtPesos").val());
  tCambio = Number($("#txtTCambio").val());
  $("#txtPesos").val("");
  $("#txtTCambio").val("");
  dolares = pesos * tCambio;
  $("#pDolares").append(dolares + "<br>");
}
// practico1ejercicio7
var valor71;
var valor72;
var resultado7;
$("#btnCalcularRest").click(CalculaResto);
function CalculaResto()
{
  valor71 = Number($("#txtValor71").val());
  valor72 = Number($("#txtValor72").val());
  $("#txtValor71").val("");
  $("#txtValor72").val("");
  resultado7 = valor71 % valor72;
  $("#pResultaRest").append(resultado7 + "<br>");
}
// practico1ejercicio8
var valor81;
var valor82;
var valor83;
var resultado81;
$("#btnCalcular81").click(CalculaSumRes);
function CalculaSumRes()
{
  valor81 = Number($("#txtValor81").val());
  valor82 = Number($("#txtValor82").val());
  valor83 = Number($("#txtValor83").val());
  $("#txtValor81").val("");
  $("#txtValor82").val("");
  $("#txtValor83").val("");
  resultado81 = valor81 + valor82 - valor83;
  $("#pResultado81").append(resultado81 + "<br>");
}
// practico1ejercicio9
var valor91;
var valor92;
var valor93;
var resultado91;
var resultado92;
var resultado93;
$("#btnCalcular91").click(CalcularCuadRes);
function CalcularCuadRes()
{
  valor91 = Number($("#txtValor91").val());
  valor92 = Number($("#txtValor92").val());
  valor93 = Number($("#txtValor93").val());
  $("#txtValor91").val("");
  $("#txtValor92").val("");
  $("#txtValor93").val("");
  resultado91 = valor91 * valor91;
  resultado92 = valor92 + valor93;
  resultado93 = resultado91 - resultado92;
  $("#pResultado91").append(resultado93 + "<br>");
}
// practico1ejercicio10
var importe101;
var porcentaje101;
var descuento101;
var importeFinal101;
$("#btnCalcular101").click(CalculaDescuento);
function CalculaDescuento()
{
  importe101 = Number($("#txtImporte101").val());
  porcentaje101 = Number($("#txtDescuento101").val());
  $("#txtImporte101").val("");
  $("#txtDescuento101").val("");
  descuento101 = porcentaje101 / 100;
  importeFinal101 = importe101 - (importe101 * descuento101);
  $("#pImporteFinal101").append(importeFinal101 + "<br>");
}
// practico1ejercicio11
var importe111;
var iva111 = 22;
var importeFinal111;
$("#btnImporteFinal111").click(CalculaTotal);
function CalculaTotal()
{
  importe111 = Number($("#txtImporte111").val());
  $("#txtImporte111").val("");
  importeFinal111 = importe111 * iva111 / 100 + importe111;
  $("#pImporteFinal111").append(importeFinal111 + "<br>");
}
// practico1ejercicio12
var peso121;
var altura121;
var imc121;
$("#btnCalcular121").click(CalculaImc);
function CalculaImc()
{
  peso121 = Number($("#txtPeso121").val());
  altura121 = Number($("#txtAltura121").val());
  $("#txtPeso121").val("");
  $("#txtAltura121").val("");
  imc121 = peso121 / (altura121 * altura121);
  $("#pImc").append(imc121 + "<br>");
}
// practico1ejercicio13
var acumula131;
var acumulado131 = 0;
$("#btnAcumula131").click(AcumulaValor);
function AcumulaValor()
{
  acumula131 = Number($("#txtValor131").val());
  $("#txtValor131").val("");
  acumulado131 += acumula131;
  $("#pAcumulado").append(acumulado131 + "<br>");
}
$("#btnAcumulado131").click(MuestraCumulo);
function MuestraCumulo()
{
  $("#pTotal").append(acumulado131 + "<br>");
}
// practico1ejercicio14
var chirrido141;
var temperaturaF141;
var temperaturaC141;
var temperaturaC142;
$("#btnCalcular141").click(CalculaTemperatura);
function CalculaTemperatura()
{
  chirrido141 = Number($("#txtChirrido141").val());
  $("#txtChirrido141").val("");
  temperaturaF141 = 50 + ((chirrido141 - 40) / 4);
  temperaturaC141 = 10 + ((chirrido141 - 40) / 7);
  temperaturaC142 = ((temperaturaF141 - 32) / 1.8);
  $("#pTemperaturaF141").append(temperaturaF141 + "<br>");
  $("#pTemperaturaC141").append(temperaturaC141 + "<br>");
  $("#pTemperaturaC142").append(temperaturaC142 + "<br>");
}
