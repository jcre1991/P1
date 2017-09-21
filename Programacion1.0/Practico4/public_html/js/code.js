// practico4ejercicio1
var muestro411 = devuelvePares(1, 17);
muestroValores411();
function devuelvePares(_n1, _n2)
{
  var _calculo;
  var _par = 0;
  for (var i = _n1; i <= _n2; i++) {
    _calculo = i % 2;
    if (_calculo === 0) {
      _par++;
    }
  }
  return _par;
}
function muestroValores411()
{
  $("#pResultado411").append("Resultado: " + muestro411 + "<br>");
}
// practico4ejercicio2
var flgMayor421 = esMayor(25, 18);
muestroValores421();
function esMayor(_edad, _tope)
{
  if (_edad > _tope) {
    return true;
  }
  else {
    return false;
  }
}
function muestroValores421()
{
  var _muestro421
  if (flgMayor421 === true) {
    _muestro421 = "Es mayor"
  }
  else {
    _muestro421 = "Es menor"
  }
  $("#pResultado421").append("Resultado: " + _muestro421 + "<br>");
}
// practico4ejercicio3
esBisiesto();
function esBisiesto(_anio)
{
  var _bisiesto = false;
  if (_anio % 4 === 0 && _anio % 100 !== 0 || _anio % 400 === 0) {
    _bisiesto = true;
  }
  return _bisiesto
}
for (var j = 0; j < 2600; j++) {
  if (esBisiesto(j)) {
    $("#pResultado431").append(j + " es bisiesto" + "<br>");
  }
  else {
    $("#pResultado431").append(j + " no es bisiesto" + "<br>");
  }
}
// practico4ejercicio4
var area441 = calculaAreaTriangulo(4, 13);
mostrarValores441();
function calculaAreaTriangulo(_base, _altura)
{
  if (verificaNumericoGen(_base) > 0 && verificaNumericoGen(_altura) > 0) {
    var _area = _base * _altura / 2;
  }
  else {
    var _area = -1;
  }
  return _area;
}
function mostrarValores441()
{
  $("#pResultado441").append(area441);
}
// practico4ejercicio5
var area451 = calculaAreaRectangulo(6, 4);
mostrarValores451();
function calculaAreaRectangulo(_alto, _ancho)
{
  if (verificaNumericoGen(_alto) > 0 && verificaNumericoGen(_ancho) > 0) {
    var _area = _alto * _ancho;
  }
  else {
    var _area = -1;
  }
  return _area;
}
function mostrarValores451() {
  $("#pResultado451").append(area451);
}
// practico4ejercicio6
var temperatura461 = convierteCF(4);
muestroValores461();
function muestroValores461()
{
  $("#pResultado461").html(temperatura461 + " ˚F");
}
function convierteCF(_temperatura)
{
  return _temperatura = 1.8 * _temperatura + 32;
}
// practico4ejercicio7
var convertir471;
var temperatura471;
$("#btnConvertir471").click(muestroValores471);
function muestroValores471()
{
  convertir471 = $("#slcConvertir471").val();
  temperatura471 = Number($("#txtTemperatura471").val());
  $("#slcConvertir471").val("SLC");
  $("#txtTemperatura471").val("");
  var resultado471 = convertidorFarhenheit(convertir471, temperatura471);
  $("#pResultado471").html("Resultado: " + resultado471);
}
function convertidorFarhenheit(_medida, _temperatura)
{
  var _resultado
  switch (_medida) {
    case "FC":
    _resultado = convierteFC(_temperatura);
      break;
    case "FK":
    _resultado = convierteFK(_temperatura);
      break;
    case "FRa":
    _resultado = convierteFRa(_temperatura);
      break;
    case "FRe":
    _resultado = convierteFRe(_temperatura);
      break;
    default:
  }
  return _resultado
}
function convierteFC(_temperatura)
{
  return _temperatura = (_temperatura - 32) / 1.8;
}
function convierteFK(_temperatura)
{
  return _temperatura = (_temperatura + 459.67) / 1.8;
}
function convierteFRa(_temperatura)
{
  return _temperatura = _temperatura + 459.67;
}
function convierteFRe(_temperatura)
{
  return _temperatura = (_temperatura - 32) / 2.25;
}
// practico4ejercicio8
mostrarValores481(calculaPotencia(44, 3));
function calculaPotencia(_base, _exponente)
{
  var _resultado = _base;
  for (var k = 1; k < _exponente; k++) {
    _resultado *= _base;
  }
  return _resultado;
}
function mostrarValores481(_resultado)
{
  $("#pResultado481").append(_resultado)
}
// practico4ejercicio9
$("#btnCalcular491").click(calculaPresupuesto);
function calculaPresupuesto()
{
  var _dias = Number($("#txtDias491").val());
  var _horas = Number($("#txtHoras491").val());
  var _asistente = $("#slcAsistente491").val();
  var _costo = Number($("#txtCosto491").val());
  $("#txtDias491").val("");
  $("#txtHoras491").val("");
  $("#slcAsistente491").val("E");
  $("#txtCosto491").val("");
  var _pptoMateriales;
  var _pptoElectricista;
  var _pptoAsistente = 0;
  var _pptoCostoFinal;
  if (verificaNumericoGen(_dias) !== -1 && verificaNumericoGen(_horas) !== -1) {
    _pptoMateriales = calculaMateriales(_costo);
    _pptoElectricista = calculaSalario("E", _dias, _horas);
    if (_asistente === "A") {
      _pptoAsistente = calculaSalario("A", _dias, _horas);
    }
    _pptoCostoFinal = _pptoMateriales + _pptoElectricista + _pptoAsistente;
    $("#pResultado491").html("Costo final del presupuesto: $" + _pptoCostoFinal);
  }
  else {
    $("#pResultado491").html("ATENCION: No se puede calcular el presupuesto, asegurese de que los datos ingresados sean correctos");
  }
}
function calculaSalario(_tipo, _dias, _horas)
{
  var _valorElectricista = 200;
  var _valorAsistente = 150;
  var _salario;
  if (_tipo === "E") {
    _salario = _valorElectricista * _horas * _dias;
  }
  else {
    _salario = _valorAsistente * _horas * _dias;
  }
  return _salario;
}
function calculaMateriales(_costoMateriales)
{
  return _costoMateriales * 1.1;
}
// funciones genericas
function verificaNumericoGen(_valor)
{
  var _numerico = 0;
  if (_valor > 0 && !isNaN(_valor)) {
    _numerico = _valor;
  }
  else {
    _numerico = -1;
  }
  return _numerico;
}
