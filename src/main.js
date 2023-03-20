const boton = document.querySelector('button');
const dialogo = document.querySelector('#dialogo');

boton.addEventListener('click', function() {
  dialogo.classList.remove('oculto');
});
