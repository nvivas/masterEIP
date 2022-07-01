function mueveReloj() {
  let momentoActual = new Date();
  let hora = momentoActual.getHours();
  let minuto = momentoActual.getMinutes();
  let segundo = momentoActual.getSeconds();

  let minutoFormat = minuto < 10 ? "0" + minuto : minuto;
  let segundoFormat = segundo < 10 ? "0" + segundo : segundo;

  horaImprimible = hora + " : " + minutoFormat + " : " + segundoFormat;

  document.form_reloj.reloj.value = horaImprimible;

  setTimeout("mueveReloj()", 1000);
}

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".arriba").addClass("sticky");
  } else {
    $(".arriba").removeClass("sticky");
  }
});
