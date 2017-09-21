function mostrarSeccion()
{
  if (logueo.perfil === 1) {
    mostrarDatosPaciente();
    mostrarConsultasPaciente();
  }
  mostrarReportePrincipal();
  $("#pAvisosConsulta").empty();
  $("#pInformacionPaciente").empty();
  $("#btnEstadoPaciente").hide();
  $("#pDatosPaciente").empty();
  $("#pAtencionAvisos").empty();
  $(".seccion").hide();
  var idBoton = $(this).attr("id");
  var idSeccion = "seccion" + idBoton.substr(10);
  $("#" + idSeccion).show();
}
function verificarTecla(evento) {
  if (evento.keyCode === 13) {
    if (logueo.sesion) {
      buscarPaciente();
    }
    else {
      iniciarSesion();
    }
  }
}
function verificarNumericoPositivo(_valor)
{
  if (_valor > 0 && !isNaN(_valor)) {
    return _valor;
  }
  else {
    return -1;
  }
}
function verificarVacio(_valor)
{
  _valor = _valor.toString();
  if (_valor.length > 0) {
    return false;
  }
  else {
    return true;
  }
}
function buscarCoincidenciaArray(_array, _campo, _busqueda)
{
  var _coincidencia = false;
  for (var i = 0; i < _array.length; i++) {
    if (_busqueda === _array[i][_campo]) {
      _coincidencia = true;
      break;
    }
  }
  return _coincidencia;
}
function buscarPosicionArray(_array, _campo, _busqueda)
{
  var _posicion = -1;
  for (var i = 0; i < _array.length; i++) {
    if (_busqueda === _array[i][_campo]) {
      _posicion = i;
      break;
    }
  }
  return _posicion;
}
function verificarPaciente(_usuario, _contrasenia)
{
  var _verificacion = false;
  for (var i = 0; i < pacientes.length; i++) {
    if (_usuario === pacientes[i].documento && _contrasenia === pacientes[i].contrasenia) {
      _verificacion = true;
      break;
    }
  }
  return _verificacion;
}
function verificarMedico(_usuario, _contrasenia)
{
  var _verificacion = false;
  for (var i = 0; i < medicos.length; i++) {
    if (_usuario === medicos[i].profesional && _contrasenia === medicos[i].contrasenia) {
      _verificacion = true;
      break;
    }
  }
  return _verificacion;
}
function mostrarSelectMedicos()
{
  var _salidaHTML = "<label for='slcMedicos'>Médicos: </label>";
  _salidaHTML += "<select id='slcMedicos'>";
  _salidaHTML += "<option value='-1'>Seleccionar...</option>";
  for (var i = 0; i < medicos.length; i++) {
    _salidaHTML += "<option value='"+medicos[i].profesional+"'>"+medicos[i].nombre+", "+medicos[i].apellido+": "+medicos[i].especialidad+"</option>";
  }
  _salidaHTML += "</select>";
  $("#pMedicos").html(_salidaHTML);
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
function obtenerNombreMedico(_profesional)
{
  var _nombreCompleto = "";
  for (var i = 0; i < medicos.length; i++) {
    if (medicos[i].profesional === _profesional) {
      _nombreCompleto += medicos[i].nombre;
      _nombreCompleto += " ";
      _nombreCompleto += medicos[i].apellido;
    }
  }
  return _nombreCompleto;
}
function obtenerDescripcionEstadoConsulta(_consulta)
{
  if (_consulta) {
    return "Finalizada";
  }
  else {
    return "Pendiente";
  }
}
function obtenerDescripcionPagoConsulta(_consulta)
{
  if (_consulta) {
    return "Paga";
  }
  else {
    return "Impaga";
  }
}
function buscarConsultasPorEstado(_paciente, _estado)
{
  var _salidaHTML = "";
  for (var l = 0; l < consultas.length; l++) {
    if (_paciente === consultas[l].paciente) {
      if (_estado === consultas[l].estado) {
        _salidaHTML += "<tr><td>"+consultas[l].id+"</td><td>"+obtenerNombreMedico(consultas[l].medico)+" ("+consultas[l].medico+")"+"</td><td>"+obtenerEspecialidadMedico(consultas[l].medico)+"</td><td>"+obtenerDescripcionEstadoConsulta(consultas[l].estado)+"</td><td>"+obtenerDescripcionPagoConsulta(consultas[l].pago)+"</td><td>"+consultas[l].observacion+"</td></tr>";
      }
    }
  }
  return _salidaHTML;
}
function obtenerEspecialidadMedico(_medico)
{
  var _especialidad = "";
  for (var i = 0; i < medicos.length; i++) {
    if (medicos[i].profesional === _medico) {
      _especialidad = medicos[i].especialidad;
      break;
    }
  }
  return _especialidad;
}
function calcularImc(_peso, _altura)
{
  _alturaMts = _altura / 100;
  return _peso / (_alturaMts * _alturaMts);
}
function obtenerDescripcionEstadoPaciente(_estado)
{
  if (_estado) {
    return "Alta";
  }
  else {
    return "Baja";
  }
}
function ocultarMostrarDatosPaciente(_estado)
{
  if (_estado) {
    $("#fileFoto").removeAttr("disabled", "disabled");
    $("#txtNombre").removeAttr("disabled", "disabled");
    $("#txtApellido").removeAttr("disabled", "disabled");
    $("#txtEdad").removeAttr("disabled", "disabled");
    $("#txtMail").removeAttr("disabled", "disabled");
    $("#txtContrasenia").removeAttr("disabled", "disabled");
    $("#txtTelefono").removeAttr("disabled", "disabled");
    $("#txtDireccion").removeAttr("disabled", "disabled");
    $("#btnModificarDatosPaciente").removeAttr("disabled", "disabled");
  }
  else {
    $("#fileFoto").attr("disabled", "disabled");
    $("#txtDocumento").attr("disabled", "disabled");
    $("#txtNombre").attr("disabled", "disabled");
    $("#txtApellido").attr("disabled", "disabled");
    $("#txtEdad").attr("disabled", "disabled");
    $("#txtMail").attr("disabled", "disabled");
    $("#txtContrasenia").attr("disabled", "disabled");
    $("#txtTelefono").attr("disabled", "disabled");
    $("#txtDireccion").attr("disabled", "disabled");
    $("#btnModificarDatosPaciente").attr("disabled", "disabled");
  }
}
function obtenerNombrePaciente(_documento)
{
  var _posicion = buscarPosicionArray(pacientes, "documento", _documento);
  var _nombreCompleto = pacientes[_posicion].nombre;
  _nombreCompleto += " ";
  _nombreCompleto += pacientes[_posicion].apellido;
  return _nombreCompleto;
}
function obtenerEdadPaciente(_documento)
{
  var _posicion = buscarPosicionArray(pacientes, "documento", _documento);
  return pacientes[_posicion].edad;
}
function obtenerAlturaPaciente(_documento)
{
  var _posicion = buscarPosicionArray(pacientes, "documento", _documento);
  return pacientes[_posicion].altura;
}
function obtenerPesoPaciente(_documento)
{
  var _posicion = buscarPosicionArray(pacientes, "documento", _documento);
  return pacientes[_posicion].peso;
}
function obtenerImcPaciente(_documento)
{
  var _posicion = buscarPosicionArray(pacientes, "documento", _documento);
  return pacientes[_posicion].imc;
}
function comprobarAtencionPaciente(_posicion)
{
  if (_posicion === -1) {
    alert("Antes de realizar una acción, debe dar atención a un paciente.");
    return _posicion;
  }
}
function obtenerDescripcionPerfilUsuario(_perfil)
{
  if (_perfil === 1) {
    return "paciente";
  }
  else {
    return "médico";
  }
}
function mostrarSelectEspecialidades()
{
  var _salidaHTML = "<label for='slcEspecialidades'>Especialidades: </label>";
  _salidaHTML += "<select id='slcEspecialidades'>";
  _salidaHTML += "<option value='-1'>Seleccionar...</option>";
  for (var i = 0; i < especialidades.length; i++) {
    if (especialidades[i] !== especialidades[i+1]) {
      _salidaHTML += "<option value='"+i+"'>"+especialidades[i]+"</option>";
    }
  }
  _salidaHTML += "</select>";
  $("#pEspecialidades").html(_salidaHTML);
}
function cargarEspecialidades()
{
  for (var i = 0; i < medicos.length; i++) {
    especialidades.push(medicos[i].especialidad);
  }
}
