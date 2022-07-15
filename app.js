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
    true
  );
  //click en el botón cifrar, llamará a una función.
  document.getElementById('encode').addEventListener(
    'click',
    function () {
      let texto = document.getElementById('mensaje').value;
      let desplazamiento = document.getElementById('desplazamiento').value;
      document.getElementById('mensaje2').value = encode(texto, desplazamiento); //para escribir en el input encode
    },
    true
  );
  document.getElementById('decode').addEventListener(
    'click',
    function () {
      let texto = document.getElementById('mensaje').value;
      let desplazamiento = document.getElementById('desplazamiento').value;
      document.getElementById('mensaje2').value = decode(texto, desplazamiento); //para escribir en el input decode
    },
    true
  );
}

function encode(texto, desplazamiento) {
  let resultado = '';
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  desplazamiento = ((desplazamiento % 26) + 26) % 26;

  if (texto) {
    for (let i = 0; i < texto.length; i++) {
      if (letras.indexOf(texto[i]) != -1) {
        let posicion = (letras.indexOf(texto[i]) + desplazamiento) % 26;
        resultado += letras[posicion];
      } else resultado += texto[i];
    }
  }
  return resultado;
}

function decode2(texto, desplazamiento) {
  if (!texto) return '';
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  desplazamiento = ((desplazamiento % 26) + 26) % 26;
  return texto.replace(
    /[A-Z]/gi,
    (c) => letras[(letras.indexOf(c) + desplazamiento) % 26]
  );
}
function decode(texto, desplazamiento) {
  if (!texto) return '';
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  desplazamiento = ((desplazamiento % 26) - 26) % 26;
  return texto.replace(
    /[A-Z]/gi,
    (c) => letras[(letras.indexOf(c) - desplazamiento) % 26]
  );
}
