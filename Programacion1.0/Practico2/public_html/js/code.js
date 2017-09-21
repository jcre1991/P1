
// practico2ejercicio1
var numero211;
$("#btnMostrar211").click(MuestraValNum);
function MuestraValNum()
{
  numero211 = Number($("#txtNumero211").val());
  $("#txtNumero211").val("");
  if (numero211 >= 0) {
    $("#pResultado211").append("El numero " + numero211 + " es positivo" + "<br>");
  }
  else {
    $("#pResultado211").append("El numero " + numero211 + " es negativo" + "<br>");
  }
}
// practico2ejercicio2
var numero221;
$("#btnMostrar221").click(MuestraMay10)
function MuestraMay10()
{
  numero221 = Number($("#txtNumero221").val());
  $("#txtNumero221").val("");
  if (numero221 > 10) {
    $("#pResultado221").append("El numero " + numero221 + " es mayor que 10" + "<br>");
  }
}
// practico2ejercicio3
var numero231;
$("#btnMostrar231").click(MuestraMay20);
function MuestraMay20()
{
  numero231 = Number($("#txtNumero231").val());
  $("#txtNumero231").val("");
  if (numero231 > 20) {
    $("#pResultado231").append("El numero " + numero231 + " es mayor que 20" + "<br>");
  }
  else if (numero231 === 20) {
    $("#pResultado231").append("El numero " + numero231 + " es igual que 20" + "<br>");
  }
  else {
    $("#pResultado231").append("El numero " + numero231 + " es menor que 20" + "<br>");
  }
}
// practico2ejercicio4
var numero241;
$("#btnMostrar241").click(MostrarValPositivo);
function MostrarValPositivo()
{
  numero241 = Number($("#txtNumero241").val());
  $("#txtNumero241").val("");
  if (numero241 < 0) {
    numero241 = numero241 * -1
    $("#pResultado241").append("El numero se convirtio a positivo:  " + numero241 + "<br>");
  }
  else {
    $("#pResultado241").append("El numero es positivo: " + numero241 + "<br>");
  }
}
// practico2ejercicio5
var numero251;
$("#btnMostrar251").click(MostrarVal1020);
function MostrarVal1020()
{
  numero251 = Number($("#txtNumero251").val());
  $("#txtNumero251").val("");
  if (numero251 > 10 && numero251 < 20) {
    $("#pResultado251").append("El numero " + numero251 + " es mayor que 10 y menor que 20" + "<br>");
  }
  else {
    $("#pResultado251").append("El numero " + numero251 + " esta fuera de rango" + "<br>");
  }
}
// practico2ejercicio6
var numero261;
var multiplo263 = 0;
var multiplo267 = 0;
$("#btnMostrar261").click(MostrarValMult73);
function MostrarValMult73()
{
  numero261 = Number($("#txtNumero261").val());
  $("#txtNumero261").val("");
  multiplo263 = numero261 % 3;
  multiplo267 = numero261 % 7;
  if (multiplo263 === 0 && multiplo267 === 0) {
    $("#pResultado261").append(numero261 + " es multiplo simultaneo de 3 y 7" + "<br>");
  }
  else {
    $("#pResultado261").append(numero261 + " no es multiplo simultaneo de 3 y 7" + "<br>");
  }
}
// practico2ejercicio7
var numero271;
$("#btnMostrar271").click(MostrarValM20);
function MostrarValM20()
{
  numero271 = Number($("#txtNumero271").val());
  $("#txtNumero271").val("");
  if (numero271 < (-20) || numero271 >= 20) {
    $("#pResultado271").append("CUMPLE" + "<br>");
  }
  else {
    $("#pResultado271").append("NO CUMPLE" + "<br>");
  }
}
// practico2ejercicio8
var numero281;
$("#btnMostrar281").click(MostrarValM10);
function MostrarValM10()
{
  numero281 = Number($("#txtNumero281").val());
  $("#txtNumero281").val("");
  if (numero281 < 10) {
    $("#pResultado281").append("Menor que 10" + "<br>");
  }
  else if (numero281 > 30) {
    $("#pResultado281").append("Mayor que 30" + "<br>");
  }
  else {
    $("#pResultado281").append("Entre 10 y 30" + "<br>");
  }
}
// practico2ejercicio9
var dia291;
var temp291;
var accion291 = "Levantarse";
var accion292;
var accion293;
$("#btnMostrar291").click(MostrarAcciones);
function MostrarAcciones()
{
  dia291 = $("#slcDia291").val();
  $("#slcDia291").val("slc");
  temp291 = Number($("#txtTemp291").val());
  $("txtTemp291").val("");
  if (temp291 < 10) {
    accion292 = "Abrigarse mucho";
  }
  else if (temp291 > 20) {
    accion292 = "Ponerse ropa comoda";
  }
  else {
    accion292 = "Abrigo moderado";
  }
  switch (dia291) {
    case "lu":
    accion293 = "Ir al trabajo";
    $("#pAcciones291").html(accion291 + "<br>" + accion292 + "<br>" + accion293);
      break;
    case "ma":
    accion293 = "Ir al trabajo";
    $("#pAcciones291").html(accion291 + "<br>" + accion292 + "<br>" + accion293);
      break;
    case "mi":
    accion293 = "Ir al trabajo";
    $("#pAcciones291").html(accion291 + "<br>" + accion292 + "<br>" + accion293);
      break;
    case "ju":
    accion293 = "Ir al trabajo";
    $("#pAcciones291").html(accion291 + "<br>" + accion292 + "<br>" + accion293);
      break;
    case "vi":
    accion293 = "Ir al trabajo";
    $("#pAcciones291").html(accion291 + "<br>" + accion292 + "<br>" + accion293);
      break;
    case "sa":
    accion293 = "Ir al trabajo";
    $("#pAcciones291").html(accion291 + "<br>" + accion292 + "<br>" + accion293);
      break;
    case "do":
    accion293 = "Quedarse en casa, hoy no trabaja";
    $("#pAcciones291").html(accion291 + "<br>" + accion292 + "<br>" + accion293);
      break;
    default:
    if (temp291 === 0) {
      alert("Debe ingresar dia y temperadura");
    }
    else {
      alert("Debe ingresar dia");
      $("#txtTemp291").val("");
    }
    break;
  }
}
// practico2ejercicio10
var nota2101;
var notaNum2101 = 0;
var notaSalva2101 = 0;
var notaPierde2101 = 0;
var notaMax2101 = 0;
var notaMin2101 = 100;
var notaMB2101 = 0;
var notaTotal2101 = 0;
var notaPromedio2101;
$("#btnAgregar2101").click(AgregaNotas);
function AgregaNotas()
{
  nota2101 = Number($("#txtNotas2101").val());
  $("#txtNotas2101").val("");
  if (nota2101 <= 100) {
    notaNum2101 ++;
    notaTotal2101 += nota2101;
    notaPromedio2101 = notaTotal2101 / notaNum2101;
    if (nota2101 > notaMax2101) {
      notaMax2101 = nota2101
    }
    if (nota2101 < notaMin2101) {
      notaMin2101 = nota2101
    }
    if (nota2101 < 70) {
      notaPierde2101 ++;
    }
    else if (nota2101 >= 70 && nota2101 < 90) {
      notaSalva2101 ++;
    }
    else {
      notaSalva2101 ++;
      notaMB2101 ++;
    }
  }
  else {
    alert("La nota ingresada debe ser maxima de 100");
  }
}
$("#btnMostrar2101").click(MuestraNotas);
function MuestraNotas()
{
  $("#pResultado2101").html("Pierden: " + notaPierde2101 + "<br>" + "Salvan: " + notaSalva2101 + "<br>" + "Notas sobresalientes: " + notaMB2101 + "<br>" + "Promedio: " + notaPromedio2101 + "<br>" + "Nota minima: " + notaMin2101 + "<br>" + "Nota maxima: " + notaMax2101);
}
$("#btnLimpiar2101").click(LimpiaValores);
function LimpiaValores()
{
  nota2101 = 0;
  notaNum2101 = 0;
  notaSalva2101 = 0;
  notaPierde2101 = 0;
  notaMax2101 = 0;
  notaMin2101 = 100;
  notaMB2101 = 0;
  notaTotal2101 = 0;
  notaPromedio2101 = 0;
}
// practico2ejercicio11
var sueldo2111 = 0;
var sueldoCant2111 = 0;
var sueldoMin2111 = Number.POSITIVE_INFINITY;
var sueldoTotal2111 = 0;
$("#btnAgregar2111").click(AgregaSueldo);
function AgregaSueldo()
{
  sueldo2111 = Number($("#txtSueldo2111").val());
  $("#txtSueldo2111").val("");
  sueldoCant2111 ++;
  sueldoTotal2111 += sueldo2111;
  if (sueldo2111 < sueldoMin2111) {
    sueldoMin2111 = sueldo2111;
  }
}
$("#btnMostrar2111").click(MostrarSueldos);
function MostrarSueldos()
{
  $("#pResultado2111").html("Total a pagar: " + sueldoTotal2111 + "<br>" + "Empleados que cobran: " + sueldoCant2111 + "<br>" + "Sueldo mas bajo: " + sueldoMin2111);
}
$("#btnLimpiar2111").click(LimpiaSueldos);
function LimpiaSueldos()
{
  sueldo2111 = 0;
  sueldoCant2111 = 0;
  sueldoMin2111 = 99999999;
  sueldoTotal2111 = 0;
}
// practico2ejercicio12
var numero2121;
var numero2122;
var resultado2121;
$("#btnResultado2121").click(MostrarResultadoRes);
function MostrarResultadoRes()
{
  numero2121 = Number($("#txtNumero2121").val());
  numero2122 = Number($("#txtNumero2122").val());
  $("#txtNumero2121").val("");
  $("#txtNumero2122").val("");
  if (numero2121 > numero2122) {
    resultado2121 = numero2121 - numero2122;
    $("#pResultado2121").append("Resultado: " + resultado2121 + "<br>");
  }
  else if (numero2121 === numero2122) {
    alert("Debe ingresar numeros que sean distintos para realizar el calculo");
  }
  else {
    resultado2121 = numero2122 - numero2121;
    $("#pResultado2121").append("Resultado: " + resultado2121 + "<br>");
  }
}
// practico2ejercicio13
var numero2131;
var numero2132;
var calculo2131;
var resultado2131;
$("#btnResultado2131").click(MostrarResultadoCalc);
function MostrarResultadoCalc()
{
  numero2131 = Number($("#txtNumero2131").val());
  numero2132 = Number($("#txtNumero2132").val());
  $("#txtNumero2131").val("");
  $("#txtNumero2132").val("");
  calculo2131 = $("#slcCalculo2131").val();
  $("#slcCalculo2131").val("SLC")
  switch (calculo2131) {
    case "S":
    resultado2131 = numero2131 + numero2132;
    $("#pResultado2131").append("Resultado: " + resultado2131 + "<br>");
      break;
    case "R":
    resultado2131 = numero2131 - numero2132;
    $("#pResultado2131").append("Resultado: " + resultado2131 + "<br>");
      break;

    case "M":
    resultado2131 = numero2131 * numero2132;
    $("#pResultado2131").append("Resultado: " + resultado2131 + "<br>");
      break;

    case "D":
    resultado2131 = numero2131 / numero2132;
    $("#pResultado2131").append("Resultado: " + resultado2131 + "<br>");
      break;
    default:
    alert("Debe seleccionar un calculo a realizar")
      break;
  }
}
// practico2ejercicio14
var caracter2141;
$("#btnResultado2141").click(MostrarVocal);
function MostrarVocal()
{
  caracter2141 = $("#txtCaracter2141").val();
  $("#txtCaracter2141").val("");
  if (caracter2141 === "a" || caracter2141 === "e" || caracter2141 === "i" || caracter2141 === "o" || caracter2141 === "u") {
    $("#pResultado2141").append(caracter2141 + " es vocal" + "<br>");
  }
  else if (caracter2141 === "A" || caracter2141 === "E" || caracter2141 === "E" || caracter2141 === "O" || caracter2141 === "U") {
    $("#pResultado2141").append(caracter2141 + " es vocal" + "<br>");
  }
  else {
    $("#pResultado2141").append(caracter2141 + " no es vocal" + "<br>");
  }
}
// practico2ejercicio15
var numero2151;
var numero2152;
var multiplo2151;
$("#btnResultado2151").click(MostrarMultiplo)
function MostrarMultiplo()
{
  numero2151 = Number($("#txtNumero2151").val());
  numero2152 = Number($("#txtNumero2152").val());
  $("#txtNumero2151").val("");
  $("#txtNumero2152").val("");
  multiplo2151 = numero2151 % numero2152;
  if (multiplo2151 === 0) {
    $("#pResultado2151").append(numero2151 + " es mutiplo de " + numero2152 + "<br>");
  }
  else {
    $("#pResultado2151").append(numero2151 + " no es multiplo de " + numero2152 + "<br>");
  }
}
// practico2ejercicio16
var millas2161;
var plus2161;
var destino2161 = 15000;
var destino2162 = 30000;
var destino2163 = 60000;
$("#btnMostrar2161").click(MostrarMillas);
function MostrarMillas()
{
  millas2161 = Number($("#txtMillas2161").val());
  plus2161 = $("#slcPlus2161").val();
  $("#txtMillas2161").val("");
  $("#slcPlus2161").val("SLC");
  switch (plus2161) {
    case "S":
    millas2161 = millas2161 * 2
    if (millas2161 < destino2161) {
      $("#pResultado2161").html("Tiene " + millas2161 + " millas por su plan plus" + "<br>" + "No puede viajar a ningun destino")
    }
    else if (millas2161 >= destino2161 && millas2161 < destino2162) {
      $("#pResultado2161").html("Tiene " + millas2161 + " millas por su plan plus" + "<br>" + "Puede viajar a America del Sur como destino cercano")
    }
    else if (millas2161 >= destino2162 && millas2161 < destino2163) {
      $("#pResultado2161").html("Tiene " + millas2161 + " millas por su plan plus" + "<br>" + "Puede viajar a America del Norte como destino medio")
    }
    else {
      $("#pResultado2161").html("Tiene " + millas2161 + " millas por su plan plus" + "<br>" + "Puede viajar a Europa como destino lejano")
    }
      break;
    case "N":
    if (millas2161 < destino2161) {
      $("#pResultado2161").html("Tiene " + millas2161 + " millas" + "<br>" + "No puede viajar a ningun destino")
    }
    else if (millas2161 >= destino2161 && millas2161 < destino2162) {
      $("#pResultado2161").html("Tiene " + millas2161 + " millas" + "<br>" + "Puede viajar a America del Sur como destino cercano")
    }
    else if (millas2161 >= destino2162 && millas2161 < destino2163) {
      $("#pResultado2161").html("Tiene " + millas2161 + " millas" + "<br>" + "Puede viajar a America del Norte como destino medio")
    }
    else {
      $("#pResultado2161").html("Tiene " + millas2161 + " millas" + "<br>" + "Puede viajar a Europa como destino lejano")
    }
      break;
    default:
    alert("Debe ingresar los datos pedidos")
  }
}
// practico2ejercicio17
var departamento2171;
var departamento2172;
$("#btnMostrar2171").click(MuestraDepartamentos);
function MuestraDepartamentos()
{
  departamento2171 = $("#slcDepartamento2171").val();
  switch (departamento2171) {
    case "A":
    departamento2172 = "Canelones";
      break;
    case "B":
    departamento2172 = "Maldonado";
      break;
    case "C":
    departamento2172 = "Rocha";
      break;
    case "D":
    departamento2172 = "Treinta y Tres";
      break;
    case "E":
    departamento2172 = "Cerro Largo";
      break;
    case "F":
    departamento2172 = "Rivera";
      break;
    case "G":
    departamento2172 = "Artigas";
      break;
    case "H":
    departamento2172 = "Salto";
      break;
    case "I":
    departamento2172 = "Paysandu";
      break;
    case "J":
    departamento2172 = "Rio Negro";
      break;
    case "K":
    departamento2172 = "Soriano";
      break;
    case "L":
    departamento2172 = "Colonia";
      break;
    case "M":
    departamento2172 = "San Jose";
      break;
    case "N":
    departamento2172 = "Flores";
      break;
    case "O":
    departamento2172 = "Florida";
      break;
    case "P":
    departamento2172 = "Lavalleja";
      break;
    case "Q":
    departamento2172 = "Durazno";
      break;
    case "R":
    departamento2172 = "Tacuarembo";
      break;
    case "S":
    departamento2172 = "Montevideo";
      break;
    default:
    alert("Ingrese un departamento");
  }
  $("#pResultado2171").html(departamento2172);
}
// practico2ejercicio18
var numero2181;
var numero2182;
var numero2183;
$("#btnResultado2181").click(MuestraResultado18);
function MuestraResultado18()
{
  numero2181 = Number($("#txtNumero2181").val());
  numero2182 = Number($("#txtNumero2182").val());
  numero2183 = Number($("#txtNumero2183").val());
  if (numero2181 > numero2182 && numero2181 > numero2183) {
    $("#pResultado2181").html("A es el mayor de los tres");
  }
}
// practico2ejercicio19
var numero2191;
$("#btnResultado2191").click(MuestraResultado19);
function MuestraResultado19()
{
  numero2191 = Number($("#txtNumero2191").val());
  if (numero2191 < 0 || numero2191 > 10) {
    $("#pResultado2191").html("A esta fuera de rango");
  }
}
// practico2ejercicio20
var numeroIng2201;
var numero2201 = 0;
var numero2202 = 0;
var numero2203 = 0;
var numero2204 = 0;
var numero2205 = 0;
var numero2206 = 0;
var numeroNum2201 = 0;
$("#btnCalcular2201").click(ResultadoAbsoluto);
function ResultadoAbsoluto()
{
  numeroIng2201 = Number($("#txtNumero2201").val());
  $("#txtNumero2201").val("");
  numeroNum2201 ++;
  switch (numeroNum2201) {
    case 1:
    if (numeroIng2201 < 0) {
      numeroIng2201 = numeroIng2201 * (-1);
    }
    numero2201 = numeroIng2201;
      break;
    case 2:
    if (numeroIng2201 < 0) {
      numeroIng2201 = numeroIng2201 * (-1);
    }
    numero2202 = numeroIng2201;
      break;
    case 3:
    if (numeroIng2201 < 0) {
      numeroIng2201 = numeroIng2201 * (-1);
    }
    numero2203 = numeroIng2201;
      break;
    case 4:
    if (numeroIng2201 < 0) {
      numeroIng2201 = numeroIng2201 * (-1);
    }
    numero2204 = numeroIng2201;
      break;
    case 5:
    if (numeroIng2201 < 0) {
      numeroIng2201 = numeroIng2201 * (-1);
    }
    numero2205 = numeroIng2201;
      break;
    case 6:
    if (numeroIng2201 < 0) {
      numeroIng2201 = numeroIng2201 * (-1);
    }
    numero2206 = numeroIng2201;
    numeroNum2201 = 0
    var numeroAbs2201 = numero2201 + numero2202 + numero2203 + numero2204 + numero2205 + numero2206;
    $("#pResultado2201").html("Resultado: " + numeroAbs2201);
      break;
    default:
  }
}
// practico2ejercicio21
var numeroIng2211;
var numero2211 = 0;
var numeroNum2211 = 0;
var numeroMay2211 = 0;
var numeroMult2211 = 0;
var multiplo2211 = 5;
var numeroSim2211 = 0;
$("#btnCalcular2211").click(ResultadoMultiMay);
function ResultadoMultiMay()
{
  numeroIng2211 = Number($("#txtNumero2211").val());
  $("#txtNumero2211").val("");
  numeroNum2211 ++;
  numero2211 = numeroIng2211 % multiplo2211;
  switch (numeroNum2211) {
    case 1:
    if (numeroIng2211 > 20 && numero2211 === 0) {
      numeroMay2211 ++;
      numeroMult2211 ++;
      numeroSim2211 ++;
    }
    else {
      if (numeroIng2211 > 20) {
        numeroMay2211 ++;
      }
      if (numero2211 === 0) {
        numeroMult2211 ++;
      }
    }
      break;
    case 2:
    if (numeroIng2211 > 20 && numero2211 === 0) {
      numeroMay2211 ++;
      numeroMult2211 ++;
      numeroSim2211 ++;
    }
    else {
      if (numeroIng2211 > 20) {
        numeroMay2211 ++;
      }
      if (numero2211 === 0) {
        numeroMult2211 ++;
      }
    }
      break;
    case 3:
    if (numeroIng2211 > 20 && numero2211 === 0) {
      numeroMay2211 ++;
      numeroMult2211 ++;
      numeroSim2211 ++;
    }
    else {
      if (numeroIng2211 > 20) {
        numeroMay2211 ++;
      }
      if (numero2211 === 0) {
        numeroMult2211 ++;
      }
    }
      break;
    case 4:
    if (numeroIng2211 > 20 && numero2211 === 0) {
      numeroMay2211 ++;
      numeroMult2211 ++;
      numeroSim2211 ++;
    }
    else {
      if (numeroIng2211 > 20) {
        numeroMay2211 ++;
      }
      if (numero2211 === 0) {
        numeroMult2211 ++;
      }
    }
      break;
    case 5:
    if (numeroIng2211 > 20 && numero2211 === 0) {
      numeroMay2211 ++;
      numeroMult2211 ++;
      numeroSim2211 ++;
    }
    else {
      if (numeroIng2211 > 20) {
        numeroMay2211 ++;
      }
      if (numero2211 === 0) {
        numeroMult2211 ++;
      }
    }
    $("#pResultado2211").html(numeroMult2211 + " numeros son multiplos de " + multiplo2211 + "<br>" + numeroMay2211 + " numeros son mayores a 20" + "<br>" + numeroSim2211 + " numeros cumplen las dos condiciones simultaneamente");
    numeroNum2211 = 0;
    numeroMult2211 = 0;
    numeroMay2211 = 0;
    numeroSim2211 = 0;
      break;
    default:
  }
}
// practico2ejercicio22
var azucar2221;
var harina2221;
var aceite2221;
var agua2221;
var recetaCant2221 = Number.POSITIVE_INFINITY;
$("#btnCocinar2221").click(Cocinar);
function Cocinar()
{
  azucar2221 = Number($("#txtAzucar2221").val());
  $("#txtAzucar2221").val("");
  harina2221 = Number($("#txtHarina2221").val());
  $("#txtHarina2221").val("");
  harina2221 = (harina2221 - (harina2221 % 100)) / 100;
  if (harina2221 <= azucar2221) {
    recetaCant2221 = harina2221;
  }
  else {
    recetaCant2221 = azucar2221;
  }
  aceite2221 = Number($("#txtAceite2221").val());
  $("#txtAceite2221").val("");
  if (aceite2221 <= recetaCant2221) {
    recetaCant2221 = aceite2221;
  }
  agua2221 = Number($("#txtAgua2221").val());
  $("#txtAgua2221").val("");
  if (agua2221 <= recetaCant2221) {
    recetaCant2221 = agua2221;
  }
  $("#pResultado2221").html("Usted puede cocinar " + recetaCant2221 + " recetas de galletas");
}
// practico2ejercicio23
var ingresos2231;
var costo2231;
var ingresos2232 = 20000;
var porcentaje2231 = 0;
var pagoIni2231;
var pagoRes2231;
var pagoResCant2231 = 0;
$("#btnCalcular2231").click(CalcularCompra);
function CalcularCompra()
{
  ingresos2231 = Number($("#txtIngresos2231").val());
  costo2231 = Number($("#txtCosto2231").val());
  $("#txtIngresos2231").val("");
  $("#txtCosto2231").val("");
  if (ingresos2231 < ingresos2232) {
    porcentaje2231 = 15;
    pagoResCant2231 = 2;
    pagoIni2231 = costo2231 * porcentaje2231 / 100;
    pagoRes2231 = (costo2231 - pagoIni2231) / pagoResCant2231;
  }
  else {
    porcentaje2231 = 30;
    pagoResCant2231 = 7 * 12;
    pagoIni2231 = costo2231 * porcentaje2231 / 100;
    pagoRes2231 = (costo2231 - pagoIni2231) / pagoResCant2231;
  }
  $("#pResultado2231").html("El comprador pagara por concepto de primer pago " + "$" + pagoIni2231 + " y " + pagoResCant2231 + " pagos de " + "$" + pagoRes2231);
}
// practico2ejercicio24
var monto2241;
var tarjeta2241;
var montoLey2241 = 10000;
var descuentoLey2241 = 4;
var porcentaje2241;
var montoFinal2241;
var via2241;
var tarjetaMsg2241;
$("#btnCalcular2241").click(CalcularMonto);
function CalcularMonto()
{
  monto2241 = Number($("#txtMonto2241").val());
  $("#txtMonto2241").val("");
  tarjeta2241 = $("#slcTarjeta2241").val();
  $("#slcTarjeta2241").val("SLC");
  switch (tarjeta2241) {
    case "S":
    tarjetaMsg2241 = "con tarjeta"
    if (monto2241 < montoLey2241) {
      porcentaje2241 = monto2241 * descuentoLey2241 / 100;
      montoFinal2241 = monto2241 - porcentaje2241;
    }
    else {
      montoFinal2241 = monto2241;
    }
      break;
    case "N":
    montoFinal2241 = monto2241;
    tarjetaMsg2241 = "sin tarjeta";
      break;
    default:
  }
  $("#pResultado2241").html("Pago de $" + monto2241 + " " + tarjetaMsg2241 + ", costo final $" + montoFinal2241);
}
// practico2ejercicio25
var stock2251;
var nombre2251;
var camaras2251;
var pedidos2251 = 0;
var pedidoMax2251 = 0;
var nombreMax2251;
$("#btnStock2251").click(IngresarStock);
function IngresarStock()
{
  stock2251 = Number($("#txtStock2251").val());
  $("#txtStock2251").attr("disabled", "disabled");
  $("#btnStock2251").attr("disabled", "disabled");
}
$("#btnComprar2251").click(ProcesarComrpa);
function ProcesarComrpa()
{
  nombre2251 = $("#txtNombre2251").val();
  camaras2251 = Number($("#txtCamaras2251").val());
  $("#txtNombre2251").val("");
  $("#txtCamaras2251").val("");
  if (camaras2251 <= stock2251) {
    pedidos2251 ++;
    stock2251 -= camaras2251;
    if (camaras2251 > pedidoMax2251) {
      pedidoMax2251 = camaras2251;
      nombreMax2251 = nombre2251;
    }
    if (stock2251 <= 0) {
      $("#btnComprar2251").attr("disabled", "disabled");
    }
    $("#pResultado2251").html(nombreMax2251 + " realizo la mayor compra en un pedido" + "<br>" + "Total de pedidos procesados: " + pedidos2251);
  }
  else {
    $("#pResultado2251").html("El stock no es suficiente para procesar la compra" + "<br>" + "Stock disponible: " + stock2251);
  }
}
// practico2ejercicio26
var noches2261;
var medioPago2261;
var medioPago2262;
var noches2263 = 3;
var noches2267 = 7;
var regalo2261 = 0;
var regalo2262 = 1;
var regalo2263 = 1;
var regalo2267 = 2;
var nochesTotal2261;
var costo2261 = 40;
var costoTotal2261;
$("#btnMostrar2261").click(MostrarAlojamiento);
function MostrarAlojamiento()
{
  noches2261 = Number($("#txtNoches2261").val());
  medioPago2261 = $("#slcMedioPago2261").val();
  $("#txtNoches2261").val("");
  $("#slcMedioPago2261").val("slc");
  switch (medioPago2261) {
    case "e":
    medioPago2262 = "efectivo";
    if (noches2261 >= noches2267) {
      regalo2261 = regalo2267;
    }
    else if (noches2261 >= noches2263) {
      regalo2261 = regalo2263
    }
      break;
    case "t":
    medioPago2262 = "tarjeta";
    if (noches2261 >= noches2267) {
      regalo2261 = regalo2267;
      regalo2261 += regalo2262;
    }
    else if (noches2261 >= noches2263) {
      regalo2261 = regalo2263
    }
      break;
    default:
    alert("Debe elegir un Medio de Pago");
  }
  nochesTotal2261 = noches2261 + regalo2261;
  costoTotal2261 = noches2261 * costo2261;
  $("#pResultado2261").html(noches2261 + " pagadas con " + medioPago2262 + "<br>"
  + "Hay " + regalo2261 + " de regalo" + "<br>" +
  "El usuario se hospeda " + nochesTotal2261 + " noches en total" + "<br>"
   + "El costo total es $" + costoTotal2261);
}
// practico2ejercicio27
var numero2271;
var numero2272;
var intento2271 = 0;
var distancia2271;
$("#dJugador2271").hide();
$("#dJugador2272").hide();
$("#btnJugador2271").click(VsJugador);
function VsJugador()
{
  $("#dTipoJuego2271").hide();
  $("#dJugador2271").show();
}
$("#btnComputadora2271").click(VsComputadora);
function VsComputadora()
{
  numero2271 = Math.floor(Math.random() * 100) + 1;
  $("#dTipoJuego2271").hide();
  $("#dJugador2272").show();
}
$("#btnIngresar2271").click(IngresaNumeroJuego);
function IngresaNumeroJuego()
{
  numero2271 = Number($("#txtNumero2271").val());
  $("#txtNumero2271").val("");
  if (numero2271 >= 1 && numero2271 <= 100) {
    $("#dJugador2271").hide();
    alert("Usted ha ingresado el numero: " + numero2271);
    alert("Turno del Jugador 2");
    $("#dJugador2272").show();
  }
  else {
    alert("Debe ingresar un numero entre 1 y 100");
  }
}
$("#btnComparar2271").click(ComparaNumeroJuego);
function ComparaNumeroJuego()
{
  numero2272 = Number($("#txtNumero2272").val());
  $("#txtNumero2272").val("");
  if (numero2272 >= 1 && numero2272 <= 100) {
    intento2271 ++;
    if (numero2272 > numero2271) {
      distancia2271 = numero2272 - numero2271;
      if (distancia2271 > 15) {
        $("#pResultado2271").html("Esta lejos");
      }
      else if (distancia2271 >= 10) {
        $("#pResultado2271").html("Te estas acercando");
      }
      else if (distancia2271 >= 5) {
        $("#pResultado2271").html("Cada vez mas cerca");
      }
      else if (distancia2271 >= 1) {
        $("#pResultado2271").html("Muy pero muy cerca");
      }
    }
    else if (numero2272 < numero2271) {
      distancia2271 = numero2271 - numero2272;
      if (distancia2271 > 15) {
        $("#pResultado2271").html("Esta lejos");
      }
      else if (distancia2271 >= 10) {
        $("#pResultado2271").html("Te estas acercando");
      }
      else if (distancia2271 >= 5) {
        $("#pResultado2271").html("Cada vez mas cerca");
      }
      else if (distancia2271 >= 1) {
        $("#pResultado2271").html("Muy pero muy cerca");
      }
    }
    else {
      alert("GANASTE!")
      $("#pResultado2271").html("Adivinaste el numero " + "(" + numero2271 + ")" + " en " + intento2271 + " intentos");
    }
  }
  else {
    alert("Debe ingresar un numero entre 1 y 100");
  }
}
// practico2ejercicio28
var puntaje2281;
var puntaje2282;
var puntajeTotal2281 = 0;
var puntajeTotal2282 = 0;
var mano2281 = 0;
var puntos2281 = 30;
$("#btnAgregar2281").click(AgregaPuntajes);
function AgregaPuntajes()
{
  mano2281 ++;
  puntaje2281 = Number($("#txtPuntaje2281").val());
  puntaje2282 = Number($("#txtPuntaje2282").val());
  $("#txtPuntaje2281").val("");
  $("#txtPuntaje2282").val("");
  puntajeTotal2281 += puntaje2281;
  puntajeTotal2282 += puntaje2282;
  $("#pResultado2281").html("Mano " + mano2281 + "<br>" +
  "Puntaje equipo parcial 1: " + puntajeTotal2281 + "<br>" +
  "Puntaje equipo parcial 2: " + puntajeTotal2282);
  if (puntajeTotal2281 >= puntos2281 || puntajeTotal2282 >= puntos2281) {
    $("#btnAgregar2281").attr("disabled", "disabled");
    $("#pResultado2281").hide();
    $("#pResultado2282").html("Mano " + mano2281 + " (Juego finalizado)" + "<br>" +
    "Puntaje equipo total 1: " + puntajeTotal2281 + "<br>" +
    "Puntaje equipo total 2: " + puntajeTotal2282);
  }
}
