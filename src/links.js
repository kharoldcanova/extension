/*A function to save the links
*/
function guardarEnlace(nombreEnlace, urlEnlace) {
    let enlacesGuardados = JSON.parse(localStorage.getItem('enlaces')) || [];
    let nuevoEnlace = { nombre: nombreEnlace, url: urlEnlace };
    enlacesGuardados.push(nuevoEnlace);
    localStorage.setItem('enlaces', JSON.stringify(enlacesGuardados));
}

/*A function to list the links
*/
function listarEnlaces() {
    let enlacesGuardados = JSON.parse(localStorage.getItem('enlaces')) || [];
    enlacesGuardados.forEach(function(enlace) {
      console.log(`${enlace.nombre}: ${enlace.url}`);
    });
  }
  