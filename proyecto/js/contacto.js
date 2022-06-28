formContacto();

function eventos() {
  $("#guardar").click(function () {});
}

function formContacto() {
  var htmlForm = "";

  htmlForm += '<label for="nombre"></label>';
  htmlForm += ' <input type="text" id="nombre">';
  htmlForm += ' <button id="guardar">Guardar</button>';
  htmlForm += " <button>Cancelar</button>";

  $(".formulario-contenedor").append(htmlForm);
}
