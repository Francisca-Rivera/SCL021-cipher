import cipher from './cipher.js';
window.addEventListener('load', start, true); //es una función para asociar un evento a un input en HTML, puedo colocar esta función.
//function inicio, es para asignar a cada uno de los eventos que se van a producir, el escuchador correspondiente.
//LLamar a las funciones.
function start() {
  /*Por el ID(identificador) usará 'mensaje', después de punto le agrego la función addEventListener, el escuchador.
    Es una función que se ejecutará una vez que se cumplan las condiciones del evento 'keyup' (soltar la tecla) */
  document.getElementById('message').addEventListener(
    'keyup',
    function () {
      this.value = this.value.toUpperCase(); //para mayúsculas.
    },
    true //bubbling phase
  );
  //click en el botón cifrar, llamará a una función.
  document.getElementById('encode').addEventListener(
    'click',
    function () {
      let text = document.getElementById('message').value; //para sacar el valor del texto de mensaje.
      let displacement = document.getElementById('displacement').value; //para sacar el valor de desplazamiento.
      document.getElementById('message2').value = cipher.encode(
        text,
        displacement
      ); //para escribir mensaje en el input encode
    },
    true
  );
  //igual que la función encode.
  document.getElementById('decode').addEventListener(
    'click',
    function () {
      let text = document.getElementById('message').value;
      let displacement = document.getElementById('displacement').value;
      document.getElementById('message2').value = cipher.decode(
        text,
        displacement
      ); //para escribir mensaje en el input decode
    },
    true
  );
}

const $contentCopy = document.getElementById('message2'),
  $buttonCopy = document.getElementById('buttonCopy');

$buttonCopy.addEventListener('click', (e) => {
  $contentCopy.select();
  document.execCommand('copy');

  $buttonCopy.innerHTML = '¡Copiado!';
});
