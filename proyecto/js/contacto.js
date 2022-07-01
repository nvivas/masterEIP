var htmlForm = "";
var isCheck = false;
var isGuardar = false;

iniciar();

function iniciar() {
  formContactoTexto();
  formContactoCombo();
  formContactoRadio();
  formContactoCheck();
  botones();
  $(".formGuardar").hide();
  $("#txt_otros").hide();
}

$("#nombre").keyup(function () {
  this.value = this.value.replace(/[^a-zA-z]/g, "");
});

$("#apellidos").keyup(function () {
  this.value = this.value.replace(/[^a-zA-z]/g, "");
});

$(".guardar").click(function () {
  let nombre = $("#nombre").val();
  let apellidos = $("#apellidos").val();
  if (nombre != "" && apellidos != "") {
    $(".formGuardar").show();
  } else {
    $(".formGuardar").hide();
  }
});

$(".limpiar").click(function () {
  $(".formGuardar").hide();
});

$("#otrosCheck").click(function () {
  isCheck = !isCheck;

  isCheck ? $("#txt_otros").show() : $("#txt_otros").hide();
});

// texto nombre
function formContactoTexto() {
  htmlForm = "";
  htmlForm += '<div class="nombre">';
  htmlForm += '<label for="nombre" class="txt_nombre"></label>';
  htmlForm +=
    ' <input type="text" id="nombre" placeholder="Introduce tu nombre" required>';
  htmlForm += "</div>";

  // texto apellidos
  htmlForm += '<div class="apellidos">';
  htmlForm += '<label for="apellidos" class="txt_apellidos"></label>';
  htmlForm +=
    ' <input type="text" id="apellidos" placeholder="Introduce tu apellido" required>';
  htmlForm += "</div>";

  $(".formulario-contenedor").append(htmlForm);
}

// combo juegos
function formContactoCombo() {
  htmlForm = "";
  htmlForm += '<div class="select_jugadores">';
  htmlForm += '<label for="jugadores" class="labelJugadores"></label>';
  htmlForm += '<select name="jugadores" id="jugadores">';

  htmlForm += '<option value="vacio" selected></option>';
  htmlForm += '<option value="personaUna" class="personaUna"></option>';
  htmlForm += '<option value="personaDos" class="personaDos"></option>';
  htmlForm += '<option value="personaTres" class="personaTres"></option>';
  htmlForm += '<option value="personaCinco" class="personaCinco"></option>';
  htmlForm += "</select>";
  htmlForm += "</div>";

  $(".formulario-contenedor").append(htmlForm);
}

// jugadores
function formContactoCheck() {
  htmlForm = "";
  htmlForm += '<fieldset class="juegos-check">';
  htmlForm += "<legend class='juegosJugar'></legend>";

  htmlForm += '<div class="checkbox-container">';
  htmlForm += '<input type="checkbox" id="gatos" name="gatos">';
  htmlForm += '<label for="gatos" class="gatos"></label>';
  htmlForm += "</div>";
  htmlForm += '<div class="checkbox-container">';
  htmlForm += '<input type="checkbox" id="pocimas" name="pocimas">';
  htmlForm += '<label for="pocimas" class="pocimas"></label>';
  htmlForm += "</div>";
  htmlForm += '<div class="checkbox-container">';
  htmlForm += '<input type="checkbox" id="castillos" name="castillos">';
  htmlForm += '<label for="castillos" class="castillos"></label>';
  htmlForm += "</div>";
  htmlForm += '<div class="checkbox-container">';
  htmlForm += '<input type="checkbox" id="root" name="root">';
  htmlForm += '<label for="root" class="root"></label>';
  htmlForm += "</div>";
  htmlForm += '<div class="checkbox-container">';
  htmlForm += '<input type="checkbox" id="otrosCheck" name="otros">';
  htmlForm += '<label for="otros" class="otros"></label>';
  htmlForm += '<input type="text" id="txt_otros" name="txt_otros">';

  htmlForm += "</div>";
  htmlForm += "</fieldset>";

  $(".formulario-contenedor").append(htmlForm);
}

function formContactoRadio() {
  htmlForm = "";
  // Radiobutton dias que juegas
  htmlForm += '<div class="radio">';
  htmlForm += '<fieldset class="radioJugon">';
  htmlForm += "<legend class='juegaSemana'></legend>";
  htmlForm +=
    '<input type="radio" name="jugon" id="intentoUno" value="intentoUno" />';
  htmlForm += '<label for="intentoUno" class="intentoUno"></label>';
  htmlForm += "<br />";

  htmlForm +=
    '<input type="radio" id="minimoUno" name="jugon" value="minimoUno" />';
  htmlForm += '<label for="minimoUno" class="minimoUno"></label>';
  htmlForm += "<br />";

  htmlForm += '<input type="radio" id="dos" name="jugon" value="dosDias" />';
  htmlForm += '<label for="dos" class="dos"></label>';
  htmlForm += "<br />";

  htmlForm += '<input type="radio" id="tres" name="jugon" value="tresMas" />';
  htmlForm += '<label for="tres" class="tres"></label>';

  htmlForm += "</fieldset>";

  $(".formulario-contenedor").append(htmlForm);
}

function botones() {
  htmlForm = "";

  htmlForm += '<div class="botones">';
  htmlForm += '<button type="submit" class="guardar"></button>';
  htmlForm += '<button type="reset" class="limpiar"></button>';
  htmlForm += "</div>";

  $(".formulario-contenedor").append(htmlForm);
}
