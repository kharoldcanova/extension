const boton = document.querySelector('button');
const dialogo = document.querySelector('#dialogo');


//escuchar cuando el boton de clicl
boton.addEventListener('click', function() {
  dialogo.classList.remove('oculto');
  getURL();
});


//cargar url actual
window.onload = function getURL() {
  var urlActual = window.location.href;
  var urlInput = document.getElementById("url");
  urlInput.value = urlActual;
};


//obtener los datos que se obtienen en el formuario
function obtenerDatos() {
  var nombre = document.getElementById("nombre").value;
  var url = document.getElementById("url");
  

  console.log("Nombre: " + nombre);
  console.log("URL: " + url);

}
