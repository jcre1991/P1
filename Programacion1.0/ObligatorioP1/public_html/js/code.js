$(".seccion").hide();
$(".boton").hide();
$("#aCerrarSesion").hide();
$("#btnAtencionPago").hide();
$("#seccionLogin").show();
$("#txtUsuario").keyup(verificarTecla);
$("#pwdContrasenia").keyup(verificarTecla);
$("#slcPerfil").keyup(verificarTecla);
$("#txtDocumentoPaciente").keyup(verificarTecla);
$("#btnIniciar").click(iniciarSesion);
$("#btnCancelar").click(cancelarLogin);
$("#aCerrarSesion").click(cerrarSesion);
$(".boton").click(mostrarSeccion);
$("#btnConsulta").click(crearConsulta);
$("#btnModificarDatosPaciente").click(modificarDatosPaciente);
$("#btnRefrescarConsultas").click(mostrarConsultasPaciente);
$("#btnBuscarPaciente").click(buscarPaciente);
$("#btnEstadoPaciente").click(darAltaBajaPaciente);
$("#btnAtencionPago").click(realizarPagoConsulta);
$("#btnAtencionDatos").click(asignarAlturaPeso);
$("#btnFinalizar").click(finalizarConsulta);
$("#hLateral1").html("Bienvenido/a");
var numeradorConsulta = consultas.length;
var documentoPaciente = 0;
var posicionPaciente = 0;
var logueo = {
  usuario: 0,
  perfil: 0,
  sesion: false
};
var idBoton;
function cancelarLogin()
{
  $("#slcPerfil").val(-1);
  $("#txtUsuario").val("");
  $("#pwdContrasenia").val("");
}
function iniciarSesion()
{
  var _verificacion = false;
  var _usuario = Number($("#txtUsuario").val());
  var _contrasenia = $("#pwdContrasenia").val();
  var _perfil = Number($("#slcPerfil").val());
  $("#slcPerfil").val(-1);
  $("#txtUsuario").val("");
  $("#pwdContrasenia").val("");
  if (verificarVacio(_usuario) || verificarVacio(_contrasenia) || _perfil === -1) {
    alert("ATENCION: Debe ingresar todos los datos requeridos.");
  }
  else {
    switch (_perfil) {
      case 1:
      _verificacion = verificarPaciente(_usuario, _contrasenia);
        break;
      case 2:
      _verificacion = verificarMedico(_usuario, _contrasenia);
        break;
    }
    if (_verificacion) {
      logueo.usuario = _usuario;
      logueo.perfil = _perfil;
      logueo.sesion = _verificacion;
      $("#aCerrarSesion").show();
      if (logueo.perfil === 1) {
        var _posicion = buscarPosicionArray(pacientes, "documento", logueo.usuario);
        $(".seccion").hide();
        $("#seccionPrincipal").show();
        $(".boton").show();
        $("#btnSeccionConsultas").hide();
        $("#btnSeccionAtencion").hide();
        $("#btnSeccionGestion").hide();
        mostrarReportePrincipal();
        mostrarDatosPaciente();
        if (pacientes[_posicion].estado) {
          $("#btnSeccionConsultas").show();
          mostrarSelectMedicos();
        }
      }
      else {
        $(".seccion").hide();
        $("#seccionPrincipal").show();
        $(".boton").show();
        $("#btnSeccionConsultas").hide();
        $("#btnSeccionDatosPersonales").hide();
        $("#pAtencionPago").html("Sin datos de pago.");
        mostrarReportePrincipal();
        mostrarConsultasPendientes();
      }
      var _nombre = "";
      if (logueo.perfil === 1) {
        _nombre = obtenerNombrePaciente(logueo.usuario);
      }
      else {
        _nombre = obtenerNombreMedico(logueo.usuario);
      }
      $("#hLateral1").html("Bienvenido/a "+"<br>"+_nombre);
      $("#hLateral2").html("Usuario: "+logueo.usuario+"<br>"+"Perfil: "+obtenerDescripcionPerfilUsuario(logueo.perfil));
    }
    else {
      alert("ATENCION: Usuario y/o contraseña incorrectos.");
    }
  }
}
function cerrarSesion()
{
  var _confirmar = confirm("Esta seguro de que desea cerrar sesión?");
  if (_confirmar) {
    logueo.sesion = false;
    $(".seccion").hide();
    $(".boton").hide();
    $("#aCerrarSesion").hide();
    $("#seccionLogin").show();
    $("#hLateral1").html("Bienvenido/a");
    $("#hLateral2").html("");
    $("#pAtencionPaciente").html("");
    idBoton = "";
  }
}
function mostrarDatosPaciente()
{
  var _posicion = buscarPosicionArray(pacientes, "documento", logueo.usuario);
  $("#txtDocumento").attr("disabled", "disabled");
  $("#txtEstado").attr("disabled", "disabled");
  $("#pFoto").html("<img src='imgs/pacientes/"+pacientes[_posicion].foto+"' alt='foto'>");
  ocultarMostrarDatosPaciente(true);
  $("#datosPaciente").removeAttr("disabled", "disabled");
  $("#btnModificarDatosPaciente").removeAttr("disabled", "disabled");
  $("#txtDocumento").val(pacientes[_posicion].documento);
  $("#txtNombre").val(pacientes[_posicion].nombre);
  $("#txtApellido").val(pacientes[_posicion].apellido);
  $("#txtEdad").val(pacientes[_posicion].edad);
  $("#txtMail").val(pacientes[_posicion].mail);
  $("#txtContrasenia").val(pacientes[_posicion].contrasenia);
  $("#txtTelefono").val(pacientes[_posicion].telefono);
  $("#txtDireccion").val(pacientes[_posicion].direccion);
  if (pacientes[_posicion].estado) {
    $("#txtEstado").val("Alta");
  }
  else {
    $("#txtEstado").val("Baja");
  }
}
function modificarDatosPaciente()
{
  var _confirmar = confirm("Confirma la modificacion de datos?");
  if (_confirmar) {
    var _posicion = buscarPosicionArray(pacientes, "documento", logueo.usuario);
    var _nombre = $("#txtNombre").val();
    var _apellido = $("#txtApellido").val();
    var _edad = Number($("#txtEdad").val());
    var _mail = $("#txtMail").val();
    var _contrasenia = $("#txtContrasenia").val();
    var _telefono = Number($("#txtTelefono").val());
    var _direccion = $("#txtDireccion").val();
    if (verificarNumericoPositivo(_edad) === -1 || verificarNumericoPositivo(_telefono) === -1 || verificarVacio(_nombre) || verificarVacio(_apellido) || verificarVacio(_contrasenia)) {
      alert("ATENCION: Falta algun dato obligatorio o no es correcto, por favor vuelva a ingresarlos.");
    }
    else {
      var _foto = $("#fileFoto").val();
      if (_foto !== "") {
        _foto = _foto.substr(_foto.lastIndexOf("\\") + 1);
        pacientes[_posicion].foto = _foto;
        $("#pFoto").html("<img src='imgs/pacientes/"+_foto+"' alt='foto'>");
      }
      pacientes[_posicion].nombre = _nombre;
      pacientes[_posicion].apellido = _apellido;
      pacientes[_posicion].edad = _edad;
      pacientes[_posicion].mail = _mail;
      pacientes[_posicion].contrasenia = _contrasenia;
      pacientes[_posicion].telefono = _telefono;
      pacientes[_posicion].direccion = _direccion;
      $("#hLateral1").html("Bienvenido/a "+"<br>"+_nombre);
      $("#pDatosPaciente").html("Los datos se modificaron correctamente.");
    }
  }
  else {
    $("#pDatosPaciente").html("Se canceló la modificación de datos.");
  }
}
function crearConsulta()
{
  var _paciente = logueo.usuario;
  var _medico = Number($("#slcMedicos").val());
  $("#slcMedicos").val(-1);
  if (_medico === -1) {
    alert("ATENCION: Debe ingresar el médico con el que desea realizar la consulta.");
  }
  else {
    var _confirmar = confirm("Confirma la consulta?");
    if (_confirmar) {
      var _caracteresEspeciales = "áéíóúñ";
      var _caracteresComunes = "aeioun";
      var _codigoConsulta = "";
      for (var i = 0; i < medicos.length; i++) {
        if (medicos[i].profesional === _medico) {
          _codigoConsulta += medicos[i].nombre.charAt(0);
          _codigoConsulta += medicos[i].apellido.substr(0,3);
          numeradorConsulta ++;
          break;
        }
      }
      _codigoConsulta = _codigoConsulta.toLowerCase();
      for (var j = 0; j < 6; j++) {
        _codigoConsulta = modificaCaracter(_codigoConsulta, _caracteresEspeciales.charAt(j), _caracteresComunes.charAt(j));
      }
      var _consulta = {
        id: _codigoConsulta+numeradorConsulta,
        medico: _medico,
        paciente: _paciente,
        estado: false,
        pago: false,
        observacion: ""
        // descripcion: ""
      };
      consultas.push(_consulta);
      mostrarConsultasPaciente();
      $("#pAvisosConsulta").html("La consulta fué creada con exito.");
    } else {
      $("#pAvisosConsulta").html("La consulta fué cancelada.");
    }
  }
}
function mostrarConsultasPaciente()
{
  var _visual = Number($("#slcConsultas").val());
  $("#slcConsultas").val(-1);
  var _salidaHTML = "";
  if (buscarCoincidenciaArray(consultas, "paciente", logueo.usuario)) {
    _salidaHTML += "<table border = '1'><thead><tr><th>Identificador</th><th>Médico</th><th>Especialidad</th><th>Estado</th><th>Pago</th><th>Observaciones</th></tr></thead><tbody>";
    switch (_visual) {
      case 1:
      _salidaHTML += buscarConsultasPorEstado(logueo.usuario, false);
        break;
      case 2:
      _salidaHTML += buscarConsultasPorEstado(logueo.usuario, true);
        break;
      default:
      for (var k = 0; k < consultas.length; k++) {
        if (logueo.usuario === consultas[k].paciente) {
          _salidaHTML += "<tr><td>"+consultas[k].id+"</td><td>"+obtenerNombreMedico(consultas[k].medico)+" ("+consultas[k].medico+")"+"</td><td>"+obtenerEspecialidadMedico(consultas[k].medico)+"</td><td>"+obtenerDescripcionEstadoConsulta(consultas[k].estado)+"</td><td>"+obtenerDescripcionPagoConsulta(consultas[k].pago)+"</td><td>"+consultas[k].observacion+"</td></tr>";
        }
      }
      _salidaHTML += "</tbody></table>";
    }
  }
  else {
    _salidaHTML = "Aún no tiene consultas.";
  }
  $("#pConsultas").html(_salidaHTML);
}
function buscarPaciente()
{
  var _salidaHTML = "";
  documentoPaciente = Number($("#txtDocumentoPaciente").val());
  $("#txtDocumentoPaciente").val("");
  if (verificarNumericoPositivo(documentoPaciente) !== -1) {
    posicionPaciente = buscarPosicionArray(pacientes, "documento", documentoPaciente);
    if (posicionPaciente === -1) {
      _salidaHTML = "No se encontraron pacientes con el documento ingresado.";
    }
    else {
      _salidaHTML += "<table border='1'><thead><tr><th>Documento</th><th>Nombre</th><th>Estado</th></tr></thead><tbody>";
      _salidaHTML += "<tr><td>"+pacientes[posicionPaciente].documento+"</td><td>"+pacientes[posicionPaciente].nombre+" "+pacientes[posicionPaciente].apellido+"</td><td>"+obtenerDescripcionEstadoPaciente(pacientes[posicionPaciente].estado)+"</td></tr></tbody></table>";
      $("#btnEstadoPaciente").show();
    }
    $("#pInformacionPaciente").html(_salidaHTML);
    if (pacientes[posicionPaciente].estado) {
      $("#btnEstadoPaciente").attr("value", "Dar baja");
    }
    else {
      $("#btnEstadoPaciente").attr("value", "Dar alta");
    }
  }
  else {
    alert("Los datos ingresados son erroneos, recuerde que el documento debe ser numérico.");
    $("#pInformacionPaciente").empty();
    $("#btnEstadoPaciente").hide();
  }
}
function darAltaBajaPaciente()
{
  var _salidaHTML = "";
  var _confirmar = confirm("Desea confirmar la acción?");
  if (_confirmar) {
    if (pacientes[posicionPaciente].estado) {
      pacientes[posicionPaciente].estado = false;
    }
    else {
      pacientes[posicionPaciente].estado = true;
    }
    _salidaHTML = "Acción realizada con éxito.";
  }
  else {
    _salidaHTML = "Acción cancelada.";
  }
  $("#btnEstadoPaciente").hide();
  $("#pInformacionPaciente").html(_salidaHTML);
}
function mostrarReportePrincipal()
{
  medicos.sort(ordenarDatosArray);
  var _salidaHTML = "";
  _salidaHTML += "<table border = '1'><thead><tr><th>Especialidad</th><th>Nombre</th><th>Cantidad de consultas</th></th></tr></thead><tbody>";
  for (var m = 0; m < medicos.length; m++) {
    if (medicos[m].consultas > 0) {
      _salidaHTML += "<tr><td>"+medicos[m].especialidad+"</td><td>"+medicos[m].nombre+" "+medicos[m].apellido+" ("+medicos[m].profesional+")"+"</td><td>"+medicos[m].consultas+"</td></tr>";
    }
  }
  _salidaHTML += "</tbody></table>";
  $("#pReportePrincipal").html(_salidaHTML);
}
function ordenarDatosArray(_a, _b)
{
  var _resultado = 0;
  if (_a.especialidad < _b.especialidad) {
    _resultado = -1;
  }
  else if (_a.especialidad > _b.especialidad) {
    _resultado = 1;
  }
  else if (_a.consultas > _b.consultas) {
    _resultado = -1;
  }
  else {
    _resultado = 1;
  }
  return _resultado;
}
function mostrarConsultasPendientes()
{
  $("#tblPendientesBody").empty();
  for (var n = 0; n < consultas.length; n++) {
    if (!consultas[n].estado && consultas[n].medico === logueo.usuario) {
      $("#tblPendientesBody").append(
        "<tr><td>"+consultas[n].id+"</td><td>"+obtenerNombrePaciente(consultas[n].paciente)+
          "</td><td>"+obtenerEdadPaciente(consultas[n].paciente)+"</td>"+
          "<td><input class='atencion' data-id='" +consultas[n].id+
          "' type='button' value='Atender'></td></tr>");
    }
  }
  $(".atencion").click(realizarAtencionPaciente);
}

function realizarAtencionPaciente()
{
  idBoton = $(this).attr("data-id");
  var _posicion = buscarPosicionArray(consultas, "id", idBoton);
  $("#pAtencionPago").html("La consulta se encuentra "+obtenerDescripcionPagoConsulta(consultas[_posicion].pago));
  if (consultas[_posicion].pago) {
    $("#btnAtencionPago").hide();
  }
  else {
    $("#btnAtencionPago").show();
  }
  $("#pAtencionPaciente").html("Nombre: "+obtenerNombrePaciente(consultas[_posicion].paciente)+" Altura actual: "+obtenerAlturaPaciente(consultas[_posicion].paciente)+" Peso actual: "+obtenerPesoPaciente(consultas[_posicion].paciente)+" IMC: "+obtenerImcPaciente(consultas[_posicion].paciente));
  $("#txtAltura").removeAttr("disabled", "disabled");
  $("#txtPreso").removeAttr("disabled", "disabled");
  $("#txtObservacion").removeAttr("disabled", "disabled");
  $("#btnAtencionDatos").removeAttr("disabled", "disabled");
  $("#btnAtencionPago").removeAttr("disabled", "disabled");
  $("#btnFinalizar").removeAttr("disabled", "disabled");
}
function realizarPagoConsulta()
{
  var _posicion = buscarPosicionArray(consultas, "id", idBoton);
  if (comprobarAtencionPaciente(_posicion) !== -1) {
    var _confirmar = confirm("Esta seguro de que desea marcar la consulta como paga?");
    if (_confirmar) {
      consultas[_posicion].pago = true;
      $("#pAtencionPago").empty();
      $("#btnAtencionPago").hide();
      $("#pAtencionPago").html("La consulta se encuentra "+obtenerDescripcionPagoConsulta(consultas[_posicion].pago));
      $("#pAtencionAvisos").html("La consulta "+consultas[_posicion].id+" fué paga.");
    }
    else {
      $("#pAtencionAvisos").html("Acción cancelada.");
    }
  }
}
function asignarAlturaPeso()
{
  $("#pAtencionAvisos").empty();
  var _posicionConsulta = buscarPosicionArray(consultas, "id", idBoton);
  if (comprobarAtencionPaciente(_posicionConsulta) !== -1) {
    var _posicion = buscarPosicionArray(pacientes, "documento", consultas[_posicionConsulta].paciente);
    var _altura = Number($("#txtAltura").val());
    var _peso = Number($("#txtPeso").val());
    $("#txtAltura").val("");
    $("#txtPeso").val("");
    if (verificarNumericoPositivo(_altura) !== -1 && verificarNumericoPositivo(_peso) !== -1) {
      pacientes[_posicion].altura = _altura;
      pacientes[_posicion].peso = _peso;
      if (pacientes[_posicion].pesoMin === 0 && pacientes[_posicion].pesoMax === 0) {
        pacientes[_posicion].pesoMin = _peso;
        pacientes[_posicion].pesoMax = _peso;
        pacientes[_posicion].imc = calcularImc(_peso, _altura);
        alert("Datos ingresados correctamente.");
        $("#pAtencionAvisos").append("Se ingresaron por primera vez altura y peso del paciente."+"<br>");
        $("#pAtencionPaciente").html("Nombre: "+obtenerNombrePaciente(consultas[_posicionConsulta].paciente)+" Altura actual: "+obtenerAlturaPaciente(consultas[_posicionConsulta].paciente)+" Peso actual: "+obtenerPesoPaciente(consultas[_posicionConsulta].paciente)+" IMC: "+obtenerImcPaciente(consultas[_posicionConsulta].paciente));
      }
      else {
        var _imc = calcularImc(_peso, _altura);
        if (_imc < pacientes[_posicion].imc * 0.9 || _imc > pacientes[_posicion].imc * 1.1) {
          pacientes[_posicion].imc = _imc;
          alert("La variación del IMC fué mayor al 10%");
        }
        pacientes[_posicion].imc = calcularImc(_peso, _altura);
        if (pacientes[_posicion].peso < pacientes[_posicion].pesoMin) {
          pacientes[_posicion].pesoMin = _peso;
          $("#pAtencionAvisos").append("El peso ingresado es el nuevo mínimo personal del paciente."+"<br>");
          $("#pAtencionPaciente").html("Nombre: "+obtenerNombrePaciente(consultas[_posicionConsulta].paciente)+" Altura actual: "+obtenerAlturaPaciente(consultas[_posicionConsulta].paciente)+" Peso actual: "+obtenerPesoPaciente(consultas[_posicionConsulta].paciente)+" IMC: "+obtenerImcPaciente(consultas[_posicionConsulta].paciente));
          alert("Datos ingresados correctamente.");
        }
        if (pacientes[_posicion].peso > pacientes[_posicion].pesoMax) {
          pacientes[_posicion].pesoMax = _peso;
          alert("Datos ingresados correctamente.");
          $("#pAtencionAvisos").append("El peso ingresado es el nuevo máximo personal del paciente."+"<br>");
          $("#pAtencionPaciente").html("Nombre: "+obtenerNombrePaciente(consultas[_posicionConsulta].paciente)+" Altura actual: "+obtenerAlturaPaciente(consultas[_posicionConsulta].paciente)+" Peso actual: "+obtenerPesoPaciente(consultas[_posicionConsulta].paciente)+" IMC: "+obtenerImcPaciente(consultas[_posicionConsulta].paciente));
        }
      }
      $("#pAtencionAvisos").append("Los datos se ingresaron correctamente.");
    }
    else {
      alert("Alguno de los datos pedidos no son correctos, por favor verifiquelos y vuelva a intentar.");
    }
  }
}
function finalizarConsulta()
{
  var _posicion = buscarPosicionArray(consultas, "id", idBoton);
  if (comprobarAtencionPaciente(_posicion) !== -1) {
    var _mensaje = "";
    if (consultas[_posicion].pago) {
      _mensaje = "Desear dar como finalizada la consulta?";
    }
    else {
      _mensaje = "La consulta se encuentra impaga, desear dar como finalizada la consulta de todos modos?";
    }
    var _confirmar = confirm(_mensaje);
    var _observacion = $("#txtObservacion").val();
    $("#txtObservacion").val("");
    if (_confirmar) {
      consultas[_posicion].observacion = _observacion;
      consultas[_posicion].estado = true;
      _posicion = buscarPosicionArray(medicos, "profesional", logueo.usuario);
      medicos[_posicion].consultas ++;
      mostrarConsultasPendientes();
      $("#txtAltura").attr("disabled", "disabled");
      $("#txtPreso").attr("disabled", "disabled");
      $("#txtObservacion").attr("disabled", "disabled");
      $("#btnAtencionDatos").attr("disabled", "disabled");
      $("#btnAtencionPago").attr("disabled", "disabled");
      $("#btnFinalizar").attr("disabled", "disabled");
      $("#pAtencionPago").html("Sin datos de pago.");
      $("#pAtencionAvisos").html("La consulta fué finalizada correctamente.");
      $("#pAtencionPaciente").html("");
    }
    else {
      $("#pAtencionAvisos").html("La finalización de la consulta fué cancelada.");
    }
  }
}
