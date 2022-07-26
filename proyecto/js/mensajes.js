$(document).ready(function () {
  espanol();

  function espanol() {
    $.getJSON("json/mensajes.json", function (msg) {
      // título
      $(".juegosTitulo").append(msg.es.juegos);
      // menú navegación
      $(".inicio").append(msg.es.inicio);
      $(".gatos").append(msg.es.gatos);
      $(".pocimas").append(msg.es.pocimas);
      $(".castillos").append(msg.es.castillos);
      $(".enlacesP").append(msg.es.enlacesP);
      $(".contacto").append(msg.es.contacto);

      // títulos
      $("#tituloGatos").append(msg.es.tituloGatos);
      $(".tituloIntroduccion").append(msg.es.tituloIntroduccion);
      $("#tituloPocimas").append(msg.es.tituloPocimas);
      $("#tituloCastillos").append(msg.es.tituloCastillos);

      // parrafos inicio
      $(".primero").append(msg.es.primero);
      $(".segundo").append(msg.es.segundo);
      $(".tercero").append(msg.es.tercero);

      // parrafos gatos
      $(".expGatos").append(msg.es.expGatos);
      $(".detGatos").append(msg.es.detGatos);

      // parrafos pocimas
      $(".expPyB").append(msg.es.expPyB);
      $(".detPyB").append(msg.es.detPyB);

      // parrafos Castillos
      $(".expCatillos").append(msg.es.expCatillos);
      $(".expCatillos2").append(msg.es.expCatillos2);
      $(".detCastillos").append(msg.es.detCastillos);
      $(".detCastillos2").append(msg.es.detCastillos2);

      // otros
      $(".reflexion").append(msg.es.reflexion);
      $("#enlaceReflexion").append(msg.es.enlaceReflexion);
      $(".madeIn").append(msg.es.madeIn);
      $(".detalle").append(msg.es.detalle);
      $(".enlacesComprar").append(msg.es.enlacesComprar);
      $(".videoExplicativo").append(msg.es.videoExplicativo);

      // contacto
      $(".txt_nombre").append(msg.es.txt_nombre);
      $(".txt_apellidos").append(msg.es.txt_apellidos);
      $(".labelJugadores").append(msg.es.labelJugadores);
      $(".personaUna").append(msg.es.personaUna);
      $(".personaDos").append(msg.es.personaDos);
      $(".personaTres").append(msg.es.personaTres);
      $(".personaCinco").append(msg.es.personaCinco);
      $(".juegosJugar").append(msg.es.juegosJugar);
      $(".root").append(msg.es.root);
      $(".otros").append(msg.es.otros);

      $(".juegaSemana").append(msg.es.juegaSemana);
      $(".intentoUno").append(msg.es.intentoUno);
      $(".minimoUno").append(msg.es.minimoUno);
      $(".dos").append(msg.es.dos);
      $(".tres").append(msg.es.tres);
      $(".guardar").append(msg.es.guardar);
      $(".limpiar").append(msg.es.limpiar);
      $(".tituloFormulario").append(msg.es.tituloFormulario);
      $(".formGuardar").append(msg.es.formGuardar);
      $(".tituloPaginaEnlaces").append(msg.es.tituloPaginaEnlaces);
      $(".pagina404").append(msg.es.pagina404);
    });
  }
  $(".espanol").click(function () {
    vaciar();
    espanol();
  });

  $(".ingles").click(function (event) {
    vaciar();
    $.getJSON("json/mensajes.json", function (msg) {
      // título
      $(".juegosTitulo").append(msg.en.juegos);
      // menú navegación
      $(".inicio").append(msg.en.inicio);
      $(".gatos").append(msg.en.gatos);
      $(".pocimas").append(msg.en.pocimas);
      $(".castillos").append(msg.en.castillos);
      $(".enlacesP").append(msg.en.enlacesP);
      $(".contacto").append(msg.en.contacto);

      // títulos
      $("#tituloGatos").append(msg.en.tituloGatos);
      $(".tituloIntroduccion").append(msg.en.tituloIntroduccion);
      $("#tituloPocimas").append(msg.en.tituloPocimas);
      $("#tituloCastillos").append(msg.en.tituloCastillos);

      // parrafos inicio
      $(".primero").append(msg.en.primero);
      $(".segundo").append(msg.en.segundo);
      $(".tercero").append(msg.en.tercero);

      // parrafos gatos
      $(".expGatos").append(msg.en.expGatos);
      $(".detGatos").append(msg.en.detGatos);

      // parrafos pocimas
      $(".expPyB").append(msg.en.expPyB);
      $(".detPyB").append(msg.en.detPyB);

      // parrafos Castillos
      $(".expCatillos").append(msg.en.expCatillos);
      $(".expCatillos2").append(msg.en.expCatillos2);
      $(".detCastillos").append(msg.en.detCastillos);
      $(".detCastillos2").append(msg.en.detCastillos2);

      // otros
      $(".reflexion").append(msg.en.reflexion);
      $("#enlaceReflexion").append(msg.en.enlaceReflexion);
      $(".madeIn").append(msg.en.madeIn);
      $(".detalle").append(msg.en.detalle);
      $(".enlacesComprar").append(msg.en.enlacesComprar);
      $(".videoExplicativo").append(msg.en.videoExplicativo);
      // contacto
      $(".txt_nombre").append(msg.en.txt_nombre);
      $(".txt_apellidos").append(msg.en.txt_apellidos);
      $(".labelJugadores").append(msg.en.labelJugadores);
      $(".personaUna").append(msg.en.personaUna);
      $(".personaDos").append(msg.en.personaDos);
      $(".personaTres").append(msg.en.personaTres);
      $(".personaCinco").append(msg.en.personaCinco);
      $(".juegosJugar").append(msg.en.juegosJugar);
      $(".root").append(msg.en.root);
      $(".otros").append(msg.en.otros);

      $(".juegaSemana").append(msg.en.juegaSemana);
      $(".intentoUno").append(msg.en.intentoUno);
      $(".minimoUno").append(msg.en.minimoUno);
      $(".dos").append(msg.en.dos);
      $(".tres").append(msg.en.tres);
      $(".guardar").append(msg.en.guardar);
      $(".limpiar").append(msg.en.limpiar);
      $(".tituloFormulario").append(msg.en.tituloFormulario);
      $(".formGuardar").append(msg.en.formGuardar);
      $(".tituloPaginaEnlaces").append(msg.en.tituloPaginaEnlaces);
      $(".pagina404").append(msg.en.pagina404);
    });
  });
  function vaciar() {
    $.getJSON("json/mensajes.json", function () {
      // título
      $(".juegosTitulo").html("");
      // menú navegación
      $(".inicio").html("");
      $(".gatos").html("");
      $(".pocimas").html("");
      $(".castillos").html("");
      $(".enlacesP").html("");
      $(".contacto").html("");

      // títulos
      $("#tituloGatos").html("");
      $(".tituloIntroduccion").html("");
      $("#tituloPocimas").html("");
      $("#tituloCastillos").html("");

      // parrafos inicio
      $(".primero").html("");
      $(".segundo").html("");
      $(".tercero").html("");

      // parrafos gatos
      $(".expGatos").html("");
      $(".detGatos").html("");

      // parrafos pocimas
      $(".expPyB").html("");
      $(".detPyB").html("");

      // parrafos Castillos
      $(".expCatillos").html("");
      $(".expCatillos2").html("");
      $(".detCastillos").html("");
      $(".detCastillos2").html("");

      // otros
      $(".reflexion").html("");
      $("#enlaceReflexion").html("");
      $(".madeIn").html("");
      $(".detalle").html("");
      $(".enlacesComprar").html("");
      $(".videoExplicativo").html("");

      // título
      $(".juegosTitulo").html("");
      // menú navegación
      $(".inicio").html("");
      $(".gatos").html("");
      $(".rol").html("");
      $(".contacto").html("");

      // contacto
      $(".txt_nombre").html("");
      $(".txt_apellidos").html("");
      $(".labelJugadores").html("");
      $(".personaUna").html("");
      $(".personaDos").html("");
      $(".personaTres").html("");
      $(".personaCinco").html("");
      $(".juegosJugar").html("");
      $(".root").html("");
      $(".otros").html("");

      $(".juegaSemana").html("");
      $(".intentoUno").html("");
      $(".minimoUno").html("");
      $(".dos").html("");
      $(".tres").html("");
      $(".guardar").html("");
      $(".limpiar").html("");
      $(".tituloFormulario").html("");
      $(".formGuardar").html("");
      $(".tituloPaginaEnlaces").html("");
      $(".pagina404").html("");
    });
  }
});
