import cipher from './cipher.js';
window.addEventListener('load', inicio, true); //es una función para asociar un evento a un input en HTML, puedo colocar esta función.
//function inicio, es para asignar a cada uno de los eventos que se van a producir, el escuchador correspondiente.
//LLamar a las funciones.
function inicio() {
  /*Por el ID(identificador) usará 'mensaje', después de punto le agrego la función addEventListener, el escuchador.
    Es una función que se ejecutará una vez que se cumplan las condiciones del evento 'keyup' (soltar la tecla) */
  document.getElementById('mensaje').addEventListener(
    'keyup',
    function () {
      this.value = this.value.toUpperCase(); //para mayúsculas.
    },
    true //bubbling phase
  );
  //click en el botón cifrar, llamará a una función.
  document.getElementById('cifrar').addEventListener(
    'click',
    function () {
      let texto = document.getElementById('mensaje').value; //para sacar el valor del texto de mensaje.
      let desplazamiento = document.getElementById('desplazamiento').value; //para sacar el valor de desplazamiento.
      document.getElementById('mensaje2').value = cipher.encode(
        texto,
        desplazamiento
      ); //para escribir mensaje en el input encode
    },
    true
  );
  //igual que la función encode.
  document.getElementById('decifrar').addEventListener(
    'click',
    function () {
      let texto = document.getElementById('mensaje').value;
      let desplazamiento = document.getElementById('desplazamiento').value;
      document.getElementById('mensaje2').value = cipher.decode(
        texto,
        desplazamiento
      ); //para escribir mensaje en el input decode
    },
    true
  );
}
