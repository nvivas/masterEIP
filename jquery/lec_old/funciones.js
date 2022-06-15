let x = $(document); // invoca a jquery
x.ready(operacion); // cuando la página cargue, activará la magia

$(document).ready(function () {
  // constante siempre que uses jquery
  let boton = $("button");
  let cuadrado = $("#cuadrado");
  boton.click(cambiarCuadrado);

  function cambiarCuadrado() {
    cuadrado.css("background", "red");
  }
});

function operacion() {
  let capa = $("#primero");
  capa.click(hacemos_click);
}

function hacemos_click() {
  let x = $("#primero");
  x.css("color", "green");
  x.css("background", "yellow");
  x.css("font-size", "24px");
  x.css("border", "1px solid black");
  x.css("width", "200px");
  x.css("height", "150px");
  //   x.css({color: "green", backgroundColor:"yellow"});
}
