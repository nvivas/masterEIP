function navegador() {
  let navegar = "";
  navegar += "<nav>";
  navegar += "<menu>";
  navegar += "<li><a href='index.html' class='active'>Inicio</a></li>";
  //  <li>
  //    <a href="juegosMesa.html">Juegos de mesa</a>
  //  </li>
  //  <li>
  //    <a href="rol.html">Rol ESDLA</a>
  //  </li>
  //  <li>
  //    <a href="contacto.html">Contacto</a>
  //  </li>
  navegar += "</menu>";
  navegar += "</nav>";
}

const menu = document.querySelector("#navegador");

menu.innerHTML = "<h1>Tema 1</h1>";
