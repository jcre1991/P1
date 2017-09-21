// practico7ejercicio1
var personas = [];
$("#btnAgregar711").click(agregarPersona);
$("#btnMostrar711").click(mostrarPersonasTodas);
$("#btnMostrar712").click(mostrarPersonasMayores);
function agregarPersona()
{
  var _nombre = $("#txtNombre711").val();
  var _edad = Number($("#txtEdad711").val());
  var _nacionalidad = $("#txtNacionalidad711").val();
  $("#txtNombre711").val("");
  $("#txtEdad711").val("");
  $("#txtNacionalidad711").val("");
  var _persona = {
    nombre: _nombre,
    edad: _edad,
    nacionalidad: _nacionalidad
  };
  personas.push(_persona);
}
function mostrarPersonasTodas()
{
  $("#pResultado711").empty();
  var _salidaHTML = "<table border = '1'>\n\
  <thead><tr><th>Nombre</th><th>Edad</th><th>Nacionalidad</th></tr></thead><tbody>";
  for (var i = 0; i < personas.length; i++) {
    _salidaHTML += "<tr><td>"+personas[i].nombre+"</td><td>"+personas[i].edad+"</td><td>"+
    personas[i].nacionalidad+"</td></tr>";
  }
  _salidaHTML += "</tbody></table>";
  $("#pResultado711").append(_salidaHTML);
}
$("#btnMostrar712").click(mostrarPersonasMayores);
function mostrarPersonasMayores()
{
  $("#pResultado711").empty();
  var _salidaHTML = "<table border = '1'>\n\
  <thead><tr><th>Nombre</th><th>Edad</th><th>Nacionalidad</th></tr></thead><tbody>";
  var _verifica = false;
  for (var j = 0; j < personas.length; j++) {
    if (personas[j].edad >= 18) {
      _salidaHTML += "<tr><td>"+personas[j].nombre+"</td><td>"+personas[j].edad+"</td><td>"+
      personas[j].nacionalidad+"</td></tr>";
    }
  }
  _salidaHTML += "</tbody></table>";
  $("#pResultado711").append(_salidaHTML);
}
// practico7ejercicio2
var peliculas = [];
$("#btnAgregar721").click(agregarPelicula);
$("#btnMostrar721").click(mostrarPeliculas);
$("#btnMostrar722").click(mostrarPeliculaBuscada);
function agregarPelicula()
{
  var _nombre = $("#txtNombre721").val();
  var _anio = Number($("#txtAnio721").val());
  var _genero = $("#slcGenero721").val();
  var _votos = Number($("#txtCantidad721").val());
  var _total = Number($("#txtTotal721").val());
  $("#txtNombre721").val("");
  $("#txtAnio721").val("");
  $("#slcGenero721").val("S");
  $("#txtCantidad721").val("");
  $("#txtTotal721").val("");
  switch (_genero) {
    case "C":
    _genero = "Comedia";
      break;
    case "D":
    _genero = "Drama";
      break;
    case "F":
    _genero = "Ciencia ficcion";
      break;
    default:
    _genero = "S";
  }
  var _existe = false;
  for (var k = 0; k < peliculas.length; k++) {
    if (_nombre === peliculas[k].nombre) {
      _existe = true;
      break;
    }
  }
  if (verificaNumerico(_anio) > -1 && verificaNumerico(_votos) > -1 && verificaNumerico(_total) > -1 && _genero != "S" && !_existe) {
    var _pelicula = {
      nombre: _nombre,
      anio: _anio,
      genero: _genero,
      votos: _votos,
      total: _total
    };
    peliculas.push(_pelicula);
  }
  else {
    alert("ATENCION: Algun dato es incorrecto o la pelicula ya existe");
  }
}
function mostrarPeliculas()
{
  $("#pResultado721").empty();
  var _salidaHTML = "<table border = '1'>\n\
  <thead><tr><th>Nombre</th><th>Año</th><th>Genero</th><th>Votos</th><th>Puntos</th></tr></thead><tbody>";
  var _promedio;
  for (var l = 0; l < peliculas.length; l++) {
    _promedio = peliculas[l].total / peliculas[l].votos;
    if (_promedio >= 4) {
      _salidaHTML += "<tr><td>"+peliculas[l].nombre+"</td><td>"+peliculas[l].anio+"</td><td>"+
        peliculas[l].genero+"</td><td>"+peliculas[l].votos+"</td><td>"+peliculas[l].total+"</td></tr>";
    }
  }
  _salidaHTML += "</tbody></table>";
  $("#pResultado721").append(_salidaHTML);
}
function mostrarPeliculaBuscada()
{
  var _nombre = $("#txtNombre722").val();
  $("#txtNombre722").val("");
  for (var m = 0; m < peliculas.length; m++) {
    if (peliculas[m].nombre === _nombre) {
      $("#pResultado721").empty();
      $("#pResultado721").append("Nombre: "+peliculas[m].nombre+"<br>"+"Año: "+peliculas[m].anio+"<br>"+
        "Genero: "+peliculas[m].genero+"<br>"+"Votos: "+peliculas[m].votos+"<br>"+"Puntos: "+peliculas[m].total);
        break;
    }
    else {
      $("#pResultado721").empty();
      $("#pResultado721").append("ATENCION: La pelicula ingresada no se encuentra en el listado");
    }
  }
}
// practico7ejercicio3
var ventas731 = [];
var guitarras = new Array(
  {tipo:1, nombre:"Clasica", precio:2000},
  {tipo:2, nombre:"Electrica", precio:2500},
  {tipo:3, nombre:"Electroacustica", precio:2300}
);
$("#btnComprar731").click(ingresarVenta);
$("#btnMostrar731").click(mostrarVentas);
function ingresarVenta()
{
  var _tipo = Number($("#slcTipo731").val());
  $("#slcTipo731").val(-1);
  var _cantidad = Number($("#txtCantidad731").val());
  $("#txtCantidad731").val("");
  if (verificaNumerico(_cantidad) !== -1 && verificaNumerico(_tipo) !== -1) {
    var _venta = {
      tipo: _tipo,
      cantidad: _cantidad
    };
    ventas731.push(_venta);
  }
  else {
    alert("ATENCION: Alguno de los datos ingresados no son correctos");
  }
}
function calcularTotalEfecticoventas731(_tipo)
{
  var _precio;
  var _cantidad = 0;
  for (var n = 0; n < guitarras.length; n++) {
    if (_tipo === guitarras[n].tipo) {
      _precio = guitarras[n].precio;
      break;
    }
  }
  for (var o = 0; o < ventas731.length; o++) {
    if (_tipo === ventas731[o].tipo) {
      _cantidad += ventas731[o].cantidad;
    }
  }
  var _total = _cantidad * _precio;
  return _total;
}
function mostrarVentas()
{
  var _salidaHTML = "<table border = '1'>\n\
  <thead><tr><th>Guitarras</th><th>ventas Total</th></tr></thead><tbody>";
  for (var p = 0; p < guitarras.length; p++) {
    _salidaHTML += "<tr><td>"+guitarras[p].nombre+"</td><td>"+calcularTotalEfecticoventas731(p+1)+"</td></tr>";
  }
  _salidaHTML += "</tbody></table>";
  $("#pResultado731").html(_salidaHTML);
}
// practico7ejercicio4
var ventas741 = [];
$("#btnAgregar741").click(agregarCelulares);
$("#btnMostrar741").click(mostrarVentasMayor2000);
$("#btnBuscar741").click(buscarVentasPorModelo);
function agregarCelulares()
{
  var _marca = "";
  var _id = Number($("#slcMarca741").val());
  var _modelo = $("#txtModelo741").val();
  var _precio = Number($("#txtPrecio741").val());
  var _cantidad = Number($("#txtCantidad741").val());
  $("#slcMarca741").val(-1);
  $("#txtModelo741").val("");
  $("#txtPrecio741").val("");
  $("#txtCantidad741").val("");
  switch (_id) {
    case 1:
    _marca = "Samsung";
      break;
    case 2:
    _marca = "Sony";
      break;
    case 3:
    _marca = "LG";
      break;
    default:
  }
  if (verificaNumerico(_cantidad) !== -1 && verificaNumerico(_precio) !== -1 && _modelo.length > 0) {
    var _venta = {
      id: _id,
      marca: _marca,
      modelo: _modelo,
      precio: _precio,
      cantidad: _cantidad
    };
    ventas741.push(_venta);
  }
  else {
    alert("ATENCION: Alguno de los datos ingresados no son correctos");
  }
}
function mostrarVentasMayor2000()
{
  var _salidaHTML = "<table border = '1'>\n\
  <thead><tr><th>Marca</th><th>Modelo</th><th>Cantidad</th><th>Venta Total</th></tr></thead><tbody>";
  for (var q = 0; q < ventas741.length; q++) {
    var _precio = ventas741[q].cantidad * ventas741[q].precio;
    if (_precio > 2000) {
      _salidaHTML += "<tr><td>"+ventas741[q].marca+"</td><td>"+ventas741[q].modelo+"</td><td>"+ventas741[q].cantidad+"</td><td>"+_precio+"</td></tr>";
    }
  }
  _salidaHTML += "</tbody></table>";
  $("#pResultado741").html(_salidaHTML);
}
function buscarVentasPorModelo()
{
  var _ventasTotal = 0;
  var _modelo = $("#txtBusqueda741").val();
  $("#txtBusqueda741").val("");
  for (var r = 0; r < ventas741.length; r++) {
    if (_modelo === ventas741[r].modelo) {
      _ventasTotal += ventas741[r].cantidad;
    }
  }
  $("#pResultado741").html("Se vendieron "+_ventasTotal+" unidades del modelo "+_modelo);
}
// practico7ejercicio5
var zapatos = [];
$("#btnAgregar751").click(agregarZapatos);
$("#btnComparar751").click(compararZapatos);
function agregarZapatos()
{
  var _origen = "";
  var _marca = $("#txtMarca751").val();
  var _talle = Number($("#txtTalle751").val());
  var _color = $("#txtColor751").val();
  var _origenId = Number($("#slcOrigen751").val());
  $("#txtMarca751").val("");
  $("#txtTalle751").val("");
  $("#txtTalle751").val("");
  $("#txtColor751").val("");
  $("#slcOrigen751").val(-1);
  switch (_origenId) {
    case 1:
    _origen = "Nacional";
      break;
    case 2:
    _origen = "Importado";
      break;
    default:
  }
  if (verificaNumerico(_talle) >= 30 && verificaNumerico(_talle) <= 46 && _marca.length > 0) {
    var _zapato = {
      marca: _marca,
      talle: _talle,
      color: _color,
      origenId: _origenId,
      origen: _origen
    };
    zapatos.push(_zapato);
  }
  else {
    alert("ATENCION: Alguno de los datos ingresados no son correctos");
  }
}
function compararZapatos()
{
  var _cantidad1 = cantidadZapatosMayor38(zapatos, 1);
  var _cantidad2 = cantidadZapatosMayor38(zapatos, 2);
  if (_cantidad1 > _cantidad2) {
    $("#pResultado752").html("La cantidad de zapatos Nacionales es mayor");
  }
  else if (_cantidad1 < _cantidad2) {
    $("#pResultado752").html("La cantidad de zapatos Importados es mayor");
  }
  else {
    $("#pResultado752").html("La cantidad de zapatos Nacionales e Importados son iguals");
  }
}
function cantidadZapatosMayor38(_array, _tipo)
{
  var _cantidad = 0;
  for (var s = 0; s < _array.length; s++) {
    if (_tipo === _array[s].origenId && _array[s].talle >= 38) {
      _cantidad ++;
    }
  }
  return _cantidad;
}
// funciones genericas
function verificaNumerico(_valor)
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
