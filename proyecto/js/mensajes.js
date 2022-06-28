$(document).ready(function () {
  $.getJSON("json/mensajes.json", function (msg) {
    // título
    $(".juegosTitulo").append(msg.es.juegos);
    // menú navegación
    $(".inicio").append(msg.es.inicio);
    $(".gatos").append(msg.es.juegos);
    $(".rol").append(msg.es.rol);
    $(".contacto").append(msg.es.contacto);
  });

  $("#ingles").click(function (event) {
    $.getJSON("json/mensajes.json", function (msg) {
      // título
      $(".juegosTitulo").html("");
      // menú navegación
      $(".inicio").html("");
      $(".gatos").html("");
      $(".rol").html("");
      $(".contacto").html("");
      // título
      $(".juegosTitulo").append(msg.en.juegos);
      // menú navegación
      $(".inicio").append(msg.en.inicio);
      $(".gatos").append(msg.en.juegos);
      $(".rol").append(msg.en.rol);
      $(".contacto").append(msg.en.contacto);
    });
  });
});
